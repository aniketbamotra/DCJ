document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});


// Mobile menu

function toggleMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");

    if (menu.style.width === "100%") {
        menu.style.width = "0";
        overlay.style.opacity = "0";
        setTimeout(function() {
            overlay.style.display = "none";
        }, 500);
    } else {
        menu.style.width = "100%";
        overlay.style.display = "block";
        setTimeout(function() {
            overlay.style.opacity = "1";
        }, 10);
    }
}


// Carousal 

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto slide
setInterval(nextSlide, 3000);
