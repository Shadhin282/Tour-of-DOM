// first create element and set inner text

const newChild = document.createElement('li');
newChild.innerText = "new born bay footballer"

// find the parent element where you will add child
const playerList = document.getElementById('player-list');

// append the child to the parent
playerList.appendChild(newChild);