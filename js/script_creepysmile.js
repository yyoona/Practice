const imageElement = document.querySelector("#slideshow")
const spanElement = document.querySelector("#slideshow_span")
let globalIndex = 0;

// list of paths to the images
let images = ["../Artistic Practice/Creepy Smile/Creepy_Smile_00.jpg", "../Artistic Practice/Creepy Smile/Creepy_Smile_01.jpg", "../Artistic Practice/Creepy Smile/Creepy_Smile_02.jpg", "../Artistic Practice/Creepy Smile/Creepy_Smile_03.jpg", "../Artistic Practice/Creepy Smile/Creepy_Smile_04.jpg", "../Artistic Practice/Creepy Smile/Creepy_Smile_05.jpg", "../Artistic Practice/Creepy Smile/Creepy_Smile_06.jpg"];


function changeImage() {
    globalIndex++;

    if (globalIndex >= 7) { globalIndex = 0 }

    imageElement.src = images[globalIndex];
    console.log(images[globalIndex]);
    spanElement.textContent = `${globalIndex + 1} / 7`
    //spanElement.textContent = (globalIndex+1) + "/7"

}

imageElement.addEventListener("click", changeImage)


