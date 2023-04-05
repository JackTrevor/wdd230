const jsonFile = 'json/data.json';

async function getCoastalData() {
    const response = await fetch(jsonFile);
    const data = await response.json();
    
    displayCoastal(data.coastal);
}

getCoastalData();

const displayCoastal = function (coastal) {
    const cards = document.querySelector('div#coastal');

    // Filter the list for location
    const filteredLocation = coastal.filter((coastal) => {
        return coastal.location === 'South Coast'
    });

    // Use Math.random to randomly select location
    const randomCoastal = filteredLocation.sort(() => Math.random() - 0.5)
    
  
    const displayThreeCoastal = randomCoastal.slice(0, 4);

    displayThreeCoastal.forEach((coastal, index) => {

        if (coastal.location == 'South Coast')
        {
            let section = document.createElement('section');
            section.classList.add(`coastal-${index}`);
            let name = document.createElement('h3');
            let img = document.createElement('img');
            let description = document.createElement('p');
            let location = document.createElement('p');

        
            img.setAttribute('src', coastal.image);
            img.setAttribute('alt', `img of the coastal area`);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', '100');
            img.setAttribute('height', '100');

        
            name.textContent = `${coastal.name}`;
            description.textContent = `${coastal.description}`;
            location.textContent = `${coastal.location}`;


            section.appendChild(name);
            section.appendChild(img);
            section.appendChild(description);

            cards.appendChild(section);
        }      
    });

}

