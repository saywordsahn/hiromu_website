// script.js
const images = [
    "https://m.media-amazon.com/images/I/81Wj9h2xlkL.jpg",
    "https://www.travelcaffeine.com/wp-content/uploads/2013/10/golden-pavilion-kyoto-japan-956-800x488.jpg",
    "https://blog.sakura.co/wp-content/uploads/2023/08/kaiseki-ryori-overview.png",
    "https://www.his-usa.com/destination-japan/up_img/cke/imgs/2017822/shutterstock_akiugreatfalls (2).jpg",
    "https://m.media-amazon.com/images/I/6188fXzI+DL._AC_SX679_.jpg"
];
let currentIndex = 0;

const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function changeImage() {
    // Fade out the image
    imageElement.style.opacity = 0;

    // After the fade-out is complete (1 second), change the image source and fade it back in
    setTimeout(() => {
        imageElement.src = images[currentIndex]; // Update the image source
        imageElement.style.opacity = 1; // Fade in the new image
    }, 1000); // 1 second delay for fade-out
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage();
});