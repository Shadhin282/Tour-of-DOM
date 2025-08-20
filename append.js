// console.log("amake k ki dekha jai naki vaya")
// 1. Parent Node
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

// 2. Create child
const placeSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1');
h1.innerText = 'places i want to visit';
placeSection.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'bandor bon e jabo';

const li2 = document.createElement('li');
li2.innerText = 'Sundor bon e jabo';

ul.appendChild(li2)
placeSection.appendChild(ul);

ul.appendChild(li1);


// 3. append placeSection to the main Container 
mainContainer.appendChild(placeSection)


// Easy way to add create HTML

const bookSection = document.createElement('section');
bookSection.innerHTML = `
    <h1>Books i need to read </h1>
    <ul>
        <li>Physics </li>
        <li>Chemistry </li>
        <li>Mathematics </li>
    </ul>
`
mainContainer.appendChild(bookSection);