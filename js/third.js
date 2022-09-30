var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
};

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("myslide1");
    if (n > slides.length) {
        slideIndex = 1;
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

let timer = setInterval(function () {
    if (slideIndex === 3) return
    else {
        slideIndex++;
        showSlides(slideIndex);
    }
}, 2000);