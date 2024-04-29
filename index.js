const container = document.querySelector("#container");

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";

const blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";

const newDiv = document.createElement("div");
newDiv.style = "border: 2px solid black; background-color: pink";

const divHeader = document.createElement("h1");
divHeader.textContent = "I'm in a div!";

const divParagraph = document.createElement("p");
divParagraph.textContent = "Me too!";

container.appendChild(redParagraph);
container.appendChild(blueHeader);
container.appendChild(newDiv);
newDiv.appendChild(divHeader);
newDiv.appendChild(divParagraph);
