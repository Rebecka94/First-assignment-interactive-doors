window.addEventListener("DOMContentLoaded", main);

function main() {
  console.log("Start of the program");
  loadStartScene();
}

function loadStartScene() {
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
}

function loadFirstRoom() {
  document.body.style.backgroundColor = "pink";
  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det rosa rummet";

  const pText = document.createElement("p");
  pText.textContent = "Vilken dörr ska du gå igenom härnäst?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Red door.png";
  const image2 = document.createElement("img");
  image2.src = "Assets/blue door.png";
  doorContainer.append(image1, image2);

  buttonContainer.innerText = "";
  const button1 = document.createElement("button");
  button1.textContent = "Röda dörren";
  button1.onclick = loadSecondRoom;

  const button2 = document.createElement("button");
  button2.textContent = "Blåa dörren";
  button2.onclick = loadThirdRoom;
  buttonContainer.append(button1, button2);
}

function loadSecondRoom() {
  document.body.style.backgroundColor = "yellow";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det gula rummet";

  const pText = document.createElement("p");
  pText.textContent = "Vilken dörr ska du gå igenom härnäst?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Green door.png";
  const image2 = document.createElement("img");
  image2.src = "Assets/pink door.png";
  doorContainer.append(image1, image2);

  buttonContainer.innerText = "";
  const button1 = document.createElement("button");
  button1.textContent = "Gröna dörren";
  button1.onclick = loadFirstRoom;

  const button2 = document.createElement("button");
  button2.textContent = "Rosa dörren";
  button2.onclick = loadThirdRoom;

  buttonContainer.append(button1, button2);
}

function loadThirdRoom() {
  document.body.style.backgroundColor = "red";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det röda rummet";

  const pText = document.createElement("p");
  pText.textContent = "Vilken dörr ska du gå igenom härnäst?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Purple door.png";
  const image2 = document.createElement("img");
  image2.src = "Assets/Brown door.png";
  doorContainer.append(image1, image2);

  buttonContainer.innerText = "";
  const button1 = document.createElement("button");
  button1.textContent = "Lila dörren";
  button1.onclick = loadSecondRoom;

  const button2 = document.createElement("button");
  button2.textContent = "Bruna dörren";
  button2.onclick = loadFourthRoom;
  buttonContainer.append(button1, button2);
}

function loadFourthRoom() {
  document.body.style.backgroundColor = "purple";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det lila rummet";

  const pText = document.createElement("p");
  pText.textContent = "Du är nu i vid sista dörren. Men har du nyckeln för att kunna gå igenom?";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  const image1 = document.createElement("img");
  image1.src = "Assets/Yellow door.png";
  doorContainer.append(image1);

  buttonContainer.innerText = "";
  const button1 = document.createElement("button");
  button1.textContent = "Gula dörren";
  button1.onclick = loadFinalRoom;
  buttonContainer.append(button1);
}

function loadFinalRoom() {
  document.body.style.backgroundColor = "orange";

  roomContainer.innerText = "";
  const headingText = document.createElement("h1");
  headingText.textContent = "Välkommen till det sista rummet";

  const pText = document.createElement("p");
  pText.textContent = "Grattis, du tog dig i mål!";
  roomContainer.append(headingText, pText);

  doorContainer.innerText = "";
  buttonContainer.innerText = "";
}
