const imageElement = document.querySelector("#slideshow")
const spanElement = document.querySelector("#slideshow_span")
let globalIndex = 0;

// list of paths to the images
let images = ["../Design Practice/Unfollow2019/photo_00.jpg", "../Design Practice/Unfollow2019/photo_01.jpg", "../Design Practice/Unfollow2019/photo_02.jpg", "../Design Practice/Unfollow2019/photo_03.jpg", "../Design Practice/Unfollow2019/photo_04.jpg", "../Design Practice/Unfollow2019/photo_05.jpg", "../Design Practice/Unfollow2019/photo_06.jpg", "../Design Practice/Unfollow2019/photo_07.jpg"];

function changeImage() {
    globalIndex++;

    if (globalIndex >= 8) { globalIndex = 0 }

    imageElement.src = images[globalIndex];
    console.log(images[globalIndex]);
    spanElement.textContent = `${globalIndex + 1} / 8`
    //spanElement.textContent = (globalIndex+1) + "/10"

}

imageElement.addEventListener("click", changeImage)


