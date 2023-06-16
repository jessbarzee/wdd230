const url = 'https://jessbarzee.github.io/wdd230/chamber/json/data.json';

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayData(data.directory);
  }
  
  getDirectoryData();

const displayData = ((directorys) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    directorys.forEach((directory) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
    //   let p = document.createElement('p');
    //   let p2 = document.createElement('p');
    //   let p3 = document.createElement('p');
    //   let p4 = document.createElement('p');
    //   let p5 = document.createElement('p');
      let logo = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${directory.name}`;
    //   p.textContent = `Birthdate: ${prophet.birthdate}`;
      
    
  
      // Build the image portrait by setting all the relevant attribute
      logo.setAttribute('src', directory.logo);
      logo.setAttribute('alt', `Logo for ${directory.businessName}`);
      logo.setAttribute('loading', 'lazy');
    //   portrait.setAttribute('width', '340');
    //   portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
    //   card.appendChild(p);
      card.appendChild(logo);
  
      cards.appendChild(card);
    }) // end of forEach loop
})