const sliderBox = document.querySelector(".tab-slider__box");
const arrowButtons = document.querySelectorAll(".tab-slider__button");

arrowButtons.forEach((arrowButton) => {
    arrowButton.addEventListener("click", () => {
        sliderBox.scrollLeft += arrowButton.id === "left-button" ? -350 : 350;
    });
});

let isDragging = false;

const dragging = (e) => {
    if (!isDragging) return;
    sliderBox.scrollLeft -= e.movementX;
}

sliderBox.addEventListener("mousedown", () => isDragging = true);
sliderBox.addEventListener("mousemove", dragging);
sliderBox.addEventListener("mouseup", () => isDragging = false);