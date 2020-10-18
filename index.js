const testimonies = document.querySelectorAll(".testimony_container");
let testimonyActive = 0;
testimonies[testimonyActive].classList.add("show");

for (let i = 1; i < testimonies.length; i += 1) {
    testimonies[i].classList.add("hidden");
}

const next = () => {
    testimonies[testimonyActive].classList.replace("show", "hidden");
    testimonyActive += 1;
    if (testimonyActive >= testimonies.length) {
        testimonyActive = 0;
    }
    testimonies[testimonyActive].classList.remove("hidden");
    testimonies[testimonyActive].classList.add("show");
}

const prev = () => {
    testimonies[testimonyActive].classList.replace("show", "hidden");
    testimonyActive -= 1;
    if (testimonyActive < 0) {
        testimonyActive = testimonies.length - 1;
    }
    testimonies[testimonyActive].classList.replace("hidden", "show");
}

document.querySelector(".sliderbar_arrow--next").addEventListener("click", () => {
    next();
});

document.querySelector(".sliderbar_arrow--prev").addEventListener("click", () => {
    next();
});

window.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight") {
        next();
    }
    if (event.key == "ArrowLeft") {
        prev();
    }
})
