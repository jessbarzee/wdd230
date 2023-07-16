const url = 'https://jessbarzee.github.io/wdd230/bountiful/json/fruit.json';

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.fruits);  // note that we reference the prophet array of the data object given the structure of the json file
    displayData(data.fruits);
  }
  
  getFruitData();

const displayData = ((fruits) => {
     const elements = document.querySelector('div.elements'); // select the output container element
  
    fruits.forEach((fruit) => {
      // Create elements to add to the div.cards element
      let element = document.createElement('fieldset');
      let fruit_name = document.createElement('input');
      // let p = document.createElement('p');
      // let p2 = document.createElement('p');
      // let a = document.createElement('a');
      // let logo = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      fruit_name.textContent = `${fruit.name}`;
      // p.textContent =`${business.address}`;
      // p2.textContent =`Membership Level: ${business.membership_lvl}`;
      // a.textContent=`Website: ${business.websiteurl}`;
      
  
      // Build the image portrait by setting all the relevant attribute
      // logo.setAttribute('src', business.logo);
      // logo.setAttribute('alt', `Logo for ${business.businessName}`);
      // logo.setAttribute('loading', 'lazy');
      // logo.setAttribute('width', '300');
      // logo.setAttribute('height', 'auto');
      

      // a.setAttribute('href', directory.websiteurl);
  
      // Append the section(card) with the created elements
      element.appendChild(fruit_name);
      // element.appendChild(h3);
      // element.appendChild(p2);
      // element.appendChild(p);
      // element.appendChild(a)
      
  
      elements.appendChild(element);
    }) // end of forEach loop
})