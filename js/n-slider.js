let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("n-slider-info");

    if (n > slides.length)
        slideIndex = 1
    if (n < 1)
        slideIndex = slides.length

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("n-active-slide");
    }

    slides[slideIndex-1].classList.add("n-active-slide");
}