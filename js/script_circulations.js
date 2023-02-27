const imageElement = document.querySelector("#slideshow")
const spanElement = document.querySelector("#slideshow_span")
let globalIndex = 0;

// list of paths to the images
// let images = ["../Artistic Practice/Circulations/Circulations_00.jpg", "../Artistic Practice/Circulations/Circulations_01.jpg", "../Artistic Practice/Circulations/Circulations_02.jpg", "../Artistic Practice/Circulations/Circulations_03.jpg", "../Artistic Practice/Circulations/Circulations_04.jpg", "../Artistic Practice/Circulations/Circulations_05.jpg", "../Artistic Practice/Circulations/Circulations_06.jpg", "../Artistic Practice/Circulations/Circulations_07.jpg", "../Artistic Practice/Circulations/Circulations_08.jpg", "../Artistic Practice/Circulations/Circulations_09.jpg", "../Artistic Practice/Circulations/Circulations_10.jpg"];
let images = ["../Artistic Practice/Circulations/Circulations_00.jpg", "../Artistic Practice/Circulations/Circulations_01.jpg", "../Artistic Practice/Circulations/Circulations_02.jpg", "../Artistic Practice/Circulations/Circulations_03.jpg", "../Artistic Practice/Circulations/Circulations_04.jpg", "../Artistic Practice/Circulations/Circulations_05.jpg", "../Artistic Practice/Circulations/Circulations_06.jpg", "../Artistic Practice/Circulations/Circulations_07.jpg", "../Artistic Practice/Circulations/Circulations_08.jpg", "../Artistic Practice/Circulations/Circulations_09.jpg", "../Artistic Practice/Circulations/Circulations_10.jpg"];


function changeImage() {
    globalIndex++;

    if (globalIndex >= 10) { globalIndex = 0 }

    imageElement.src = images[globalIndex];
    console.log(images[globalIndex]);
    spanElement.textContent = `${globalIndex + 1} / 10`
    //spanElement.textContent = (globalIndex+1) + "/10"

}

imageElement.addEventListener("click", changeImage)


