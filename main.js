window.addEventListener("DOMContentLoaded", main);

function main() {
  console.log("Start of the program");
  loadStartScene();
}

const listOfItems = [];

function loadStartScene() {
  document.body.style.background = "linear-gradient(90deg, #b8e6a3, #4CAF50)";
  roomContainer.innerText = "";

  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till dörrarnas värld";

  const pText = document.createElement("p");
  pText.textContent =
    "I den här världen kommer du gå igenom ett antal dörrar. Vissa dörrar tar dig till helt fantastiska ställen medans andra kommer att få dig att tvivla på dina val. Tryck på den första dörren för att starta spelet";

  const button = document.createElement("button");
  button.textContent = "Börja";
  button.onclick = loadFirstRoom;

  roomContainer.append(headingText, pText, button);

  objectContainer.innerText = "";
}

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
  image1.onclick = loadSecondRoom
  const image2 = document.createElement("img");
  image2.src = "Assets/blue door.png";
  image2.onclick = loadThirdRoom
  doorContainer.append(image1, image2);

  objectContainer.innerText = "";
  const object1 = document.createElement("img");
  object1.src = "Assets/crowbar.png";
  object1.classList.add("objectItem1");
  object1.onclick = function () {
    pickUpCrowbar(object1);
  };
  objectContainer.append(object1);
}

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
  image1.onclick = loadFirstRoom;
  const image2 = document.createElement("img");
  image2.src = "Assets/pink door.png";
  image2.onclick = loadThirdRoom
  doorContainer.append(image1, image2);

  objectContainer.innerText = "";
  const object1 = document.createElement("img");
  object1.src = "Assets/Key.svg";
  object1.classList.add("objectItem2");
  object1.onclick = function () {
    pickUpKey(object1);
  };

  objectContainer.append(object1);
}

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
  image1.onclick = loadSecondRoom
  const image2 = document.createElement("img");
  image2.src = "Assets/Brown door.png";
  image2.onclick = loadFourthRoom
  doorContainer.append(image1, image2);

  objectContainer.innerText = "";
}

function loadFourthRoom() {
  document.body.style.background = "linear-gradient(90deg, #9575cd, #7e57c2)";

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
  doorContainer.append(image1);

  if (listOfItems.includes("key") && listOfItems.includes("crowbar")) {
    image1.onclick = loadFinalRoom;
  } else if (listOfItems.includes("key")) {
    image1.onclick = function () {
    const messageContainer = document.createElement("button");
      messageContainer.textContent = "Du har lyckats vrida om låset på dörren med hjälp av nyckeln. Men det verkar som att den har rostat igen och ändå inte går att öppna.. Hmm, Gå tillbaka till någon av de tidigare rummen för att se om du kan hitta något annat föremål som kan komma till hjälp för att bända upp dörren";
      messageContainer.classList.add("messageContainer");     
      document.body.appendChild(messageContainer); }
  } else if (listOfItems.includes("crowbar")) {
    image1.onclick = function () {
    const messageContainer = document.createElement("button");
      messageContainer.textContent = "Att använda en kofot är en bra ide då dörren är gammal och rostig. Men det verkar ändå som att dörren sitter fast med ett lås. Se om du också kan hitta en nyckel i någon av de andra rummen";
      messageContainer.classList.add("messageContainer");     
      document.body.appendChild(messageContainer);}
  } else {
    image1.onclick = function () {
      const messageContainer = document.createElement("button");
      messageContainer.textContent = "Hmmmm.. Dörren är låst. Det verkar som du kanske glömt något på vägen hit?";
      messageContainer.classList.add("messageContainer");     
      document.body.appendChild(messageContainer);
    };    
  }
  objectContainer.innerText = "";
}

function loadFinalRoom() {
  document.body.style.background = "linear-gradient(90deg, #ffc74c, #ff9000)";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Grattis, du tog dig i mål!";
  headingText.classList.add("headingText")
  roomContainer.append(headingText);

  doorContainer.innerText = "";
  objectContainer.innerText = "";

  console.log(listOfItems)
}

function pickUpKey(img) {
  objectContainer.removeChild(img);
  listOfItems.push("key");
}

function pickUpCrowbar(img) {
  objectContainer.removeChild(img);
  listOfItems.push("crowbar");
}