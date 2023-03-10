const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
 
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = function (prophets) {
  const cards = document.querySelector("div.cards");

  prophets.forEach((prophet) => {
    let section = document.createElement('section');
    let header = document.createElement('h2');
    let img = document.createElement('img');
    let birthday = document.createElement('p');
    let placeOfBirth = document.createElement('p');

  
    header.textContent = `${prophet.name} ${prophet.lastname}`;

    birthday.textContent = `Birthdate: ${prophet.birthdate}`;
    placeOfBirth.textContent = `Place of birth: ${prophet.birthplace}`;

 

    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day Saint Prophet`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '340');
    img.setAttribute('height', '440');

  
    section.appendChild(header);
    section.appendChild(birthday);
    section.appendChild(placeOfBirth);
    section.appendChild(img);

    cards.appendChild(section);
  });
}