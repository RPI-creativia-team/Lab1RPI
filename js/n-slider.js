let slideIndex = 3;

function plusSlides(n) {
    showSlides(slideIndex += n, n > 0);
}

function showSlides(n, isRight) {
    let slides = document.getElementsByClassName("n-carousel-content");

    if (n > slides.length)
        slideIndex = 1
    if (n < 1)
        slideIndex = slides.length

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("n-carousel-content-active-goLeft");
        slides[i].classList.remove("n-carousel-content-active-goRight");
    }

    let carousel = document.getElementsByClassName("n-carousel")[0];
    carousel.classList.remove("n-carousel-leftable");
    carousel.classList.remove("n-carousel-rightable");

    if (isRight) {
        carousel.classList.add("n-carousel-rightable");
        slides[slideIndex - 1].classList.add("n-carousel-content-active-goRight");
    } else {
        carousel.classList.add("n-carousel-leftable");
        slides[slideIndex - 1].classList.add("n-carousel-content-active-goLeft");
    }
}