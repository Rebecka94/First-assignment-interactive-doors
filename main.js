window.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("Start of the program");
    setUpBtn()
}

function setUpBtn() {
    firstBtn.onclick = openDoorBtn;
}

function openDoorBtn() {
    document.getElementById("doorClosed").style.display = 'none';
    document.getElementById("doorOpen").style.display = 'block';
    document.getElementById("firstText").style.display = 'none';
    document.getElementById("secondText").style.display = 'block';
    document.getElementById("firstBtn").style.display = 'none';
    document.getElementById("yesBtn").style.display = 'block';
    document.getElementById("noBtn").style.display = 'block';
}






