const urlSpotlights = 'https://jessbarzee.github.io/wdd230/chamber/json/data.json';

async function getDirectoryData() {
    const response = await fetch(urlSpotlights);
    const data = await response.json();
    console.log(data)
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    let filterSpotlights = []
    filterSpotlights = data.directory.filter(item => item.membership_lvl === "Gold" || item.membership_lvl === "Silver")
    
    let spotlights = []
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * filterSpotlights.length)
        console.log(filterSpotlights)
        spotlights.push(filterSpotlights.splice(random, 1))
    }
    console.log(spotlights)
    displayData(spotlights);
  }
  
  getDirectoryData();

//   For Home page Spotlight section

const displayData = ((directory) => {
  const cards = document.querySelector('div.spotlights'); // select the output container element

  directory.forEach((business) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let a = document.createElement('a');
    let logo = document.createElement('img');

    // Build content 
    h3.textContent = `${business[0].businessName}`;
    p.textContent =`${business[0].description}`;
    a.textContent =`Website: ${business[0].websiteurl}`;
    

    // Build the logo image by setting all the relevant attribute
    logo.setAttribute('src', business[0].logo);
    logo.setAttribute('alt', `Logo for ${business[0].businessName}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '300');
    logo.setAttribute('height', 'auto');
    

    a.setAttribute('href',directory.websiteurl);

    // Append the section(card) with the created elements
    card.appendChild(logo);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(a)
    

    cards.appendChild(card);
  }) // end of forEach loop
})