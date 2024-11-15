window.addEventListener("DOMContentLoaded", main);

/**
 * Huvudfunktionen som körs när dokumentet laddats.
 * Ansvarar för att starta programmet genom att ladda startsidan.
 */

function main() {
  console.log("Start of the program");
  loadStartScene();
}

const listOfItems = [];

/**
 * Laddar startsidan med instruktioner och startknappen.
 */
function loadStartScene() {
  document.body.style.background = "linear-gradient(90deg, #b8e6a3, #4CAF50)";
  roomContainer.innerText = "";

  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till dörrarnas värld";
  headingText.style.color = "#454545"
  headingText.style.fontSize = "50px"

  const pText = document.createElement("p");
  pText.textContent =
    "I den här världen kommer du gå igenom ett antal dörrar som leder till olika rum. Målet är att ta sig till sista dörren och öppna den . Tryck på knappen för att starta spelet";

  const button = document.createElement("button");
  button.textContent = "Börja";
  button.style.boxShadow = "2px 2px 2px black";
  button.style.width = "50px"
  button.style.height = "30px"
  button.onclick = loadFirstRoom;

  roomContainer.append(headingText, pText, button);

  objectContainer.innerText = "";
  doorContainer.innerText = "";
  returnBtnContainer.innerText = "";
}

/**
 * Laddar det första rummet där vi har två alternativa vägval som representeras som dörrar.
 */
function loadFirstRoom() {
  document.body.style.background = "linear-gradient(90deg, #FFf104, #fffc7c)";
  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det gula rummet";

  const pText = document.createElement("p");
  pText.textContent = "Vilken dörr ska du gå igenom härnäst?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Red door.png";
  image1.style.boxShadow = "2px 1px 3px black";
  image1.onclick = loadSecondRoom;
  const image2 = document.createElement("img");
  image2.src = "Assets/blue door.png";
  image2.style.boxShadow = "2px 1px 3px black";
  image2.onclick = loadThirdRoom;
  doorContainer.append(image1, image2);

  objectContainer.innerText = "";
  const object1 = document.createElement("img");
  object1.src = "Assets/crowbar.png";
  object1.classList.add("objectItem1");
  object1.onclick = function () {
    pickUpCrowbar(object1);
    saveObjectsToLocalStorage();
  };
  objectContainer.append(object1);
}

/**
 * Laddar det andra rummet där vi har två alternativa vägval som representeras som dörrar.
 */
function loadSecondRoom() {
  document.body.style.background = "linear-gradient(90deg, #f34336, #a32f2f)";
  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det röda rummet";

  const pText = document.createElement("p");
  pText.textContent = "Vilken dörr ska du gå igenom härnäst?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Green door.png";
  image1.style.boxShadow = "2px 1px 3px black";
  image1.onclick = loadFirstRoom;
  const image2 = document.createElement("img");
  image2.src = "Assets/pink door.png";
  image2.style.boxShadow = "2px 1px 3px black";
  image2.onclick = loadThirdRoom;
  doorContainer.append(image1, image2);

  objectContainer.innerText = "";
  const object1 = document.createElement("img");
  object1.src = "Assets/Key.svg";
  object1.classList.add("objectItem2");
  object1.onclick = function () {
    pickUpKey(object1);
    saveObjectsToLocalStorage();
  };
  objectContainer.append(object1);
}

/**
 * Laddar det tredje rummet där vi har två alternativa vägval som representeras som dörrar.
 */
function loadThirdRoom() {
  document.body.style.background = "linear-gradient(90deg, #f48fb1, #e91e63)";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det rosa rummet";

  const pText = document.createElement("p");
  pText.textContent = "Vilken dörr ska du gå igenom härnäst?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Purple door.png";
  image1.style.boxShadow = "2px 1px 3px black";
  image1.onclick = loadSecondRoom;
  const image2 = document.createElement("img");
  image2.src = "Assets/Brown door.png";
  image2.style.boxShadow = "2px 1px 3px black";
  image2.onclick = loadFourthRoom;
  doorContainer.append(image1, image2);

  objectContainer.innerText = "";
}

/**
 * Laddar det fjärde rummet.
 * Hanterar olika meddelanden beroende på vilka objekt spelaren har samlat på sig.
 */
function loadFourthRoom() {
  document.body.style.background = "linear-gradient(90deg, #7775cd, #9e57c2)";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det lila rummet";

  const pText = document.createElement("p");
  pText.textContent =
    "Du är nu i vid sista dörren. Men har du nyckeln för att kunna gå igenom?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Yellow door.png";
  image1.style.boxShadow = "2px 1px 3px black";
  doorContainer.append(image1);

  returnBtnContainer.innerText = "";
  const returnBtn = document.createElement("button");
  returnBtn.textContent = "Börja om";
  returnBtn.style.boxShadow = "2px 2px 2px black";
  returnBtn.style.width = "80px"
  returnBtn.style.height = "30px"
  returnBtn.onclick = loadStartScene;
  returnBtnContainer.append(returnBtn);

  if (listOfItems.includes("key") && listOfItems.includes("crowbar")) {
    image1.onclick = loadFifthRoom;
  } else if (listOfItems.includes("key")) {
    image1.onclick = function () {
      alert("Du har lyckats vrida om låset på dörren med hjälp av en nyckeln. Men det verkar ändå som att den har rostat igen och ändå inte går att öppna.. Gå tillbaka till någon av de tidigare rummen för att se om du kan hitta något annat föremål som kan hjälpa dig att bända upp dörren")
    };
  } else if (listOfItems.includes("crowbar")) {
    image1.onclick = function () {
    alert("Att använda en kofot är en bra ide då dörren är gammal och rostig. Men det verkar ändå som att dörren sitter fast med ett lås. Se om du också kan hitta en nyckel i någon av de andra rummen");
    };
  } else {
    image1.onclick = function () {
      alert("Hmmmm.. Dörren är låst. Det verkar som du kanske glömt något på vägen hit? Gå tillbaka till någon av de tidigare rummen för att se om du kan hitta något föremål som hjälper dig att öppna dörren");
    };
  }
  objectContainer.innerText = "";
}

/**
 * Laddar det femte rummet.
 * Erbjuder spelaren två val och hanterar olika meddelande beroende på valet.
 */
function loadFifthRoom() {
  document.body.style.backgroundImage = "url('Assets/cave.webp')";
  document.body.style.backgroundSize = "cover";

roomContainer.innerText = ""
const headingText = document.createElement("h1")
headingText.textContent = "Du har öppnat den sista dörren men där gömde sig ett farligt troll. Använd antingen nyckeln eller kofoten för att besegra trollet"
headingText.style.backgroundColor = "green"
roomContainer.append(headingText);

lastChoiceButtons.innerText = ""
const button1 = document.createElement("button");
  button1.textContent = "Nyckeln";
  button1.style.boxShadow = "2px 2px 2px black";
  button1.style.width = "80px"
  button1.style.height = "30px"
  const button2 = document.createElement("button");
  button2.textContent = "Kofoten";
  button2.style.boxShadow = "2px 2px 2px black";
  button2.style.width = "80px"
  button2.style.height = "30px"
lastChoiceButtons.append(button1, button2)

if (button2) {
  button2.onclick = loadFinalRoom
} if (button1) {
  button1.onclick = function () {
    alert("En nyckel är bra till mycket. Men för att besegra ett troll så behöver du välja ett annat objekt")
  }
};

doorContainer.innerText = "";
objectContainer.innerText = "";
returnBtnContainer.innerText = "";
}

/**
 * Laddar det sista rummet och visar ett gratulationsmeddelande till spelaren.
 */
function loadFinalRoom() {
  document.body.style.background = "linear-gradient(90deg, #ffc74c, #ff9000)";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Grattis! Du tog dig igenom alla dörrar och besegrade det farliga trollet";
  headingText.style.fontSize = "50px"
  headingText.classList.add("headingText");


  roomContainer.append(headingText);

  doorContainer.innerText = "";
  objectContainer.innerText = "";
  returnBtnContainer.innerText = "";
  lastChoiceButtons.innerText = ""

  console.log(listOfItems);
}

/**
 * Lägger till nyckeln i listan över insamlade föremål och sparar till localstorage.
 * @param {HTMLImageElement} img - Bilden för nyckeln som plockas upp.
 */
function pickUpKey(img) {
  objectContainer.removeChild(img);
  listOfItems.push("key");
  saveObjectsToLocalStorage();
}

/**
 * Lägger till nyckeln i listan över insamlade föremål och sparar till localstorage.
 * @param {HTMLImageElement} img - Bilden för nyckeln som plockas upp.
 */
function pickUpCrowbar(img) {
  objectContainer.removeChild(img);
  listOfItems.push("crowbar");
  saveObjectsToLocalStorage();
}

/**
 * Sparar listan över insamlade föremål till lokal lagring.
 */
function saveObjectsToLocalStorage() {
  localStorage.setItem("listOfItems", JSON.stringify(listOfItems));
}

/**
 * Laddar listan över insamlade föremål från lokal lagring.
 */
function loadObjectsFromLocalStorage() {
  const savedItems = localStorage.getItem("listOfItems");
  if (savedItems) {
    listOfItems = JSON.parse(savedItems);
  } else {
    listOfItems = [];
  }
}
