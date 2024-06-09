document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        // Add more image paths as needed
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById('rotatingImage');

    function rotateImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }

    setInterval(rotateImage, 3000); // Change image every 3 seconds
});
