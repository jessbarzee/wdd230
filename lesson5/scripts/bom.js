const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const scripture = input.value;

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteBtn = document.createElement('button');

    if (scripture != "" ) {
        listItem.appendChild(listText);
        listText.textContent = scripture;
        listItem.appendChild(deleteBtn);
        input.value = ''
        deleteBtn.textContent = '❌';
        list.appendChild(listItem);

        deleteBtn.addEventListener('click', () => {
            list.removeChild(listItem);

        });
    }
    else {
        alert('Please enter a scriptre')
    }
    
    input.focus();
});