// Initialize slide variables
let bannerIndex = 1;
let infoIndex = 1;

// Show slides for both banner and info
showSlides(bannerIndex, 'banner');
showSlides(infoIndex, 'info');

// Automatic slide change every 5 seconds for both slideshows
setInterval(() => changeSlide(1, 'banner'), 5000);
setInterval(() => changeSlide(1, 'info'), 5000);

// Function to handle next and previous buttons for slides
function changeSlide(n, slideshow) {
    if (slideshow === 'banner') {
        showSlides(bannerIndex += n, 'banner');
    } else {
        showSlides(infoIndex += n, 'info');
    }
}

// Function to display slides based on index
function showSlides(n, slideshow) {
    let slides;

    if (slideshow === 'banner') {
        slides = document.querySelectorAll('#banner-slideshow .slide');
        if (n > slides.length) { bannerIndex = 1; }
        if (n < 1) { bannerIndex = slides.length; }
        slides.forEach(slide => slide.style.display = "none");
        slides[bannerIndex - 1].style.display = "block";
    } else {
        slides = document.querySelectorAll('#info-slideshow .slide');
        if (n > slides.length) { infoIndex = 1; }
        if (n < 1) { infoIndex = slides.length; }
        slides.forEach(slide => slide.style.display = "none");
        slides[infoIndex - 1].style.display = "block";
    }
}

