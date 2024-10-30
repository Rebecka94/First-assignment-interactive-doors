const doorWorld = {
    startRoom: {
        description: "Välommen till dörrarnas värld, vill du gå igenom den första dörren?",
        doors: {
            doorOne: "Röda dörren",
        }
    },

    roomOne: {
    description: "Välommen till ängen, du kan välja att antingen gå igenom den rosa dörren eller den blåa dörren",
    doors: {
        doorOne: "Rosa dörren",
        doorTwo: "Blåa dörren",
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
    description: "Välommen till träsket, du kan välja att antingen gå igenom den lila dörren eller den svarta dörren",
    doors: {
        doorOne: "Lila dörren",
        doorTwo: "Svarta dörren",
    }
},
};

window.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("Start of the program");
    setUpButtons();
    currentRoom();
}






