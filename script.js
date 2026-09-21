document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    const modal = document.getElementById("storyModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const closeModalBtn = document.querySelector(".modal-close");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const card = e.target.closest(".story-card");
            const imgSrc = card.querySelector("img").src;
            const title = card.querySelector("h3").innerText;
            const desc = card.querySelector("p").innerText;

            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalDesc.innerText = desc;

            modal.classList.add("active");
        });
    });

    // Close modal when clicking the close button
    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Close modal when clicking outside the card content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});