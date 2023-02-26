const imageElement = document.querySelector("#slideshow")
const spanElement = document.querySelector("#slideshow_span")
let globalIndex = 0;

// list of paths to the images
let images = ["../Artistic Practice/A Flipped Plate/A_Flipped_Plate_00.jpg", "../Artistic Practice/A Flipped Plate/A_Flipped_Plate_01.jpg", "../Artistic Practice/A Flipped Plate/A_Flipped_Plate_02.jpg", "../Artistic Practice/A Flipped Plate/A_Flipped_Plate_03.jpg", "../Artistic Practice/A Flipped Plate/A_Flipped_Plate_04.jpg", "../Artistic Practice/A Flipped Plate/A_Flipped_Plate_05.jpg"];


function changeImage() {
    globalIndex++;

    if (globalIndex >= 6) { globalIndex = 0 }

    imageElement.src = images[globalIndex];
    console.log(images[globalIndex]);
    spanElement.textContent = `${globalIndex + 1} / 6`
    //spanElement.textContent = (globalIndex+1) + "/6"

}

imageElement.addEventListener("click", changeImage)


