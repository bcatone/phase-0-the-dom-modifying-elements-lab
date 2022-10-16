// Write your code here!
const element = document.getElementById("main");
document.body.removeChild(element);

const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent = "Brittany is the champion"
document.body.append(newHeader);
