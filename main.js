window.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("Start of the program");
    setUpButtons();
}

function setUpButtons() {
    document.getElementById("redDoor").onclick = () => openDoorFunction("red");
    document.getElementById("blueDoor").onclick = () => openDoorFunction("blue");
    document.getElementById("pinkDoor").onclick = () => openDoorFunction("pink");
    document.getElementById("yellowDoor").onclick = () => openDoorFunction("yellow");
    document.getElementById("greenDoor").onclick = () => openDoorFunction("green");
    document.getElementById("purpleDoor").onclick = () => openDoorFunction("purple");
    document.getElementById("brownDoor").onclick = () => openDoorFunction("brown");
};

function openDoorFunction(color) {

    if (color === "red") {
        document.getElementById("firstRoom").style.display = "flex";
        document.getElementById("startingRoom").style.display = "none";
    } else if (color === "blue") {
        document.getElementById("thirdRoom").style.display = "flex";
        document.getElementById("firstRoom").style.display = "none";
    }
    else if (color === "pink") {
        document.getElementById("secondRoom").style.display = "flex";
        document.getElementById("firstRoom").style.display = "none";
    }
    else if (color === "yellow") {
        document.getElementById("startingRoom").style.display = "flex";
        document.getElementById("secondRoom").style.display = "none";
    }
    else if (color === "green") {
        document.getElementById("firstRoom").style.display = "flex";
        document.getElementById("secondRoom").style.display = "none";
    }
    else if (color === "purple") {
        document.getElementById("secondRoom").style.display = "flex";
        document.getElementById("thirdRoom").style.display = "none";
    }
    else if (color === "brown") {
        document.getElementById("endingRoom").style.display = "flex";
        document.getElementById("thirdRoom").style.display = "none";
    }
}