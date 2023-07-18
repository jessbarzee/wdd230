// const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
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
      
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      fruit_name.textContent = `${fruit.name}`;
      
  
      // Build the image portrait by setting all the relevant attribute
      // logo.setAttribute('src', business.logo);
      // logo.setAttribute('alt', `Logo for ${business.businessName}`);
      // logo.setAttribute('loading', 'lazy');
      // logo.setAttribute('width', '300');
      // logo.setAttribute('height', 'auto');
      

      fruit_name.setAttribute('class', 'sbs');
      fruit_name.setAttribute('type', 'radio')
      fruit_name.setAttribute('name', fruit.name)
      fruit_name.setAttribute('value', 'yes')

  
      // Append the section(card) with the created elements
      element.appendChild(fruit_name);
      
  
      elements.appendChild(element);
    }) // end of forEach loop
})