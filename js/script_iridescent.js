const imageElement = document.querySelector("#slideshow")
const spanElement = document.querySelector("#slideshow_span")
let globalIndex = 0;

// list of paths to the images
let images = ["../Artistic Practice/Iridescent/Iridescent_00.jpg", "../Artistic Practice/Iridescent/Iridescent_01.jpg", "../Artistic Practice/Iridescent/Iridescent_02.jpg", "../Artistic Practice/Iridescent/Iridescent_03.jpg", "../Artistic Practice/Iridescent/Iridescent_04.jpg"];


function changeImage() {
    globalIndex++;

    if (globalIndex >= 5) { globalIndex = 0 }

    imageElement.src = images[globalIndex];
    console.log(images[globalIndex]);
    spanElement.textContent = `${globalIndex + 1} / 5`
    //spanElement.textContent = (globalIndex+1) + "/5"

}

imageElement.addEventListener("click", changeImage)


