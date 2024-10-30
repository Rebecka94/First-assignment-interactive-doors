const doorWorld = {
    startRoom: {
        description: "Välommen till dörrarnas värld, vill du gå igenom den första dörren?",
        doors: {
            doorOne: "Röda dörren",
        }
    },

    roomOne: {
    description: "Välommen till ängen, du kan välja att antingen gå igenom den blåa dörren eller den rosa dörren",
    doors: {
        doorOne: "Blåa dörren",
        doorTwo: "Rosa dörren",
    }
},

roomTwo: {
    description: "Välommen till dungen, du kan välja att antingen gå igenom den gula dörren eller den gröna dörren",
    doors: {
        doorOne: "Gula dörren",
        doorTwo: "Gröna dörren",
    }
},

roomThree: {
    description: "Välommen till träsket, du kan välja att antingen gå igenom den lila dörren eller den bruna dörren",
    doors: {
        doorOne: "Lila dörren",
        doorTwo: "Bruna dörren",
    }
},
};

window.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("Start of the program");
    setUpDoorButtons();
}

function setUpDoorButtons() {
    redDoor.onclick = openDoorFunction;
    doorOpen.onclick = openDoorFunction;
    blueDoor.onclick = openDoorFunction;
    pinkDoor.onclick = openDoorFunction;
    yellowDoor.onclick = openDoorFunction;
    greenDoor.onclick = openDoorFunction;
    purpleDoor.onclick = openDoorFunction;
    brownDoor.onclick = openDoorFunction;
};

function openDoorFunction() {
   console.log("Door is clicked")
};






