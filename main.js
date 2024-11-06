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
    const rumBeskrivning = document.getElementById("roomDescription");
    document.getElementById("mainFirst").style.display = "none";

    if (color === "red") {
        document.body.style.backgroundImage = "url('Assets/swamp.webp')";
        rumBeskrivning.textContent = "Du har hamnat i träsket.. hmm.. välj en ny dörr för att komma till en ny värld"
        
        document.getElementById("firstRoom").style.display = "flex";
        document.getElementById("startingRoom").style.display = "none";
    } else if (color === "blue") {
        document.body.style.backgroundImage = "url('Assets/Dungen.jpg')";
        rumBeskrivning.textContent = "Du har hamnat vid dungen."
        
        document.getElementById("thirdRoom").style.display = "flex";
        document.getElementById("firstRoom").style.display = "none";
    }
    else if (color === "pink") {
        document.body.style.backgroundImage = "url('Assets/Grottan.jpg')";
        rumBeskrivning.textContent = "Åh nej.. Du öppnade dörren till grottan. Skynda dig här ifrån så att trollet inte äter upp dig"
        
        document.getElementById("secondRoom").style.display = "flex";
        document.getElementById("firstRoom").style.display = "none";
    }
    else if (color === "yellow") {
        document.body.style.backgroundImage = "url('Assets/Forrest.webp')";
        rumBeskrivning.textContent = "Nu är du tillbaka där vi började.. Försök igen!"
       
        document.getElementById("startingRoom").style.display = "flex";
        document.getElementById("secondRoom").style.display = "none";
    }
    else if (color === "green") {
        document.body.style.backgroundImage = "url('Assets/swamp.webp')";
        rumBeskrivning.textContent = "Du har hamnat i träsket.. hmm.. välj en ny dörr för att komma till en ny värld"
       
        document.getElementById("firstRoom").style.display = "flex";
        document.getElementById("secondRoom").style.display = "none";
    }
    else if (color === "purple") {
        document.body.style.backgroundImage = "url('Assets/Grottan.jpg')";
        rumBeskrivning.textContent = "Åh nej.. Du öppnade dörren till grottan. Skynda dig här ifrån så att trollet inte äter upp dig"
        
        document.getElementById("secondRoom").style.display = "flex";
        document.getElementById("thirdRoom").style.display = "none";
    }
    if (color === "brown") {
        rumBeskrivning.textContent = "Grattis. Du tog dig i mål"

        document.getElementById("endingRoom").style.display = "flex";
        document.getElementById("thirdRoom").style.display = "none";
    }
}