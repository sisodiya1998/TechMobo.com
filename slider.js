$(document).ready(function () {
    var slides = $(".slider-slide");
    var currentSlide = 0;

    function showSlide(n) {
        if (n >= slides.length) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = slides.length - 1;
        }

        slides.removeClass("active");
        slides.eq(currentSlide).addClass("active");
    }

    setInterval(function () {
        currentSlide++;
        showSlide(currentSlide);
    }, 3000);
});