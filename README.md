# Display Image Rotation Project

This is a simple web application that rotates through a set of images stored in a folder. The app is built using HTML, CSS, and JavaScript.

## Features

- Automatically rotates images every 3 seconds.
- Simple and clean design.
- Easy to add more images.

## Folder Structure

/DRIP
    /images
        image1.jpg
        image2.jpg
        image3.jpg
        // Add more images here
    index.html
    styles.css
    script.js


## Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/gogorichie/image-rotator.git
    cd image-rotator
    ```

2. **Add your images**:
    Place your images in the `images` folder. Make sure to update the file names in the `script.js` file if you add or change images.

3. **Update the image paths**:
    Open `script.js` and add the paths of your images to the `images` array:
    ```javascript
    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        // Add more image paths as needed
    ];
    ```

4. **Open the app**:
    Open `index.html` in your web browser to see the image rotator in action.

## Customization

- **Change rotation interval**:
    To change the time interval for image rotation, modify the `setInterval` function in `script.js`:
    ```javascript
    setInterval(rotateImage, 3000); // Change image every 3 seconds
    ```
    The interval is set in milliseconds (3000ms = 3 seconds).

- **Adjust styling**:
    To change the appearance of the app, update `styles.css` with your desired 

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to improve the project.

## Contact

Created by [Richard Lewis](https://github.comgogorichie) - feel free to contact me!