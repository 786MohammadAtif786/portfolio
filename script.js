// JavaScript for controlling background music
const music = document.getElementById("background-music");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Example carousel functionality with buttons (if needed)
let index = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-inner img');
    index = (n + slides.length) % slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(index);
    setInterval(() => {
        showSlide(index + 1);
    }, 3000);
});

