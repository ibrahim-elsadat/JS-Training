const All = document.querySelector(".All");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", () => All.classList.add("hover-left"));
right.addEventListener("mouseenter", () => All.classList.add("hover-right"));
left.addEventListener("mouseleave", () => All.classList.remove("hover-left"));
right.addEventListener("mouseleave", () => All.classList.remove("hover-right"));
