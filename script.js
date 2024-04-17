let isLightOn = false;
function changeImage() {
    if (!isLightOn) {
        document.getElementById("myImage").src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
        document.getElementById("main").classList.remove("night");
        document.getElementById("main").classList.add("lighton");
    } else {
        document.getElementById("myImage").src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
        document.getElementById("main").classList.remove("lighton");
        document.getElementById("main").classList.add("night");
    }

    isLightOn = !isLightOn;
}

document.getElementById("myImage").addEventListener("click", changeImage);