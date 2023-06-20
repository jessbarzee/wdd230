const url = 'https://jessbarzee.github.io/wdd230/chamber/json/data.json';

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayData(data.directory);
  }
  
  getDirectoryData();

const displayData = ((directory) => {
    const cards = document.querySelector('div.directory_cards'); // select the output container element
  
    directory.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
    //   let p4 = document.createElement('p');
    //   let p5 = document.createElement('p');
      let logo = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${business.businessName}`;
      p.textContent =`${business.address}`;
      p2.textContent =`Membership Level: ${business.membership_lvl}`;
      p3.textContent =`Person of Contact: ${business.contactName}`
      
  
      // Build the image portrait by setting all the relevant attribute
      logo.setAttribute('src', business.logo);
      logo.setAttribute('alt', `Logo for ${business.businessName}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '300');
      logo.setAttribute('height', 'auto');
      

    //   p2.setAttribute('a', 'href');
    //   p2.setAttribute('src', directory.websiteurl);
  
      // Append the section(card) with the created elements
      card.appendChild(logo);
      card.appendChild(h2);
      card.appendChild(p2);
      card.appendChild(p3)
      card.appendChild(p);
      
  
      cards.appendChild(card);
    }) // end of forEach loop
})