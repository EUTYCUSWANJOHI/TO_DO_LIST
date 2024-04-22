// state variables
let toDOlistArray = [];

//variables

const form = document.querySelector('.form');
const input = document.querySelector('.form_input');
const ul = document.querySelector('.toDoList');

//event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let itemId = String(Date.now());
    let toDoItem = input.value;


    addItemToDOM(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);
    input.value = '';
});

ul.addEventListener('click', (e) => {
    let id = e.target.getAttribute('data-id');
    if (!id) return; // user clicked in something else
    // pass id through to functions
    removeItemFromDOM(id);
    removeItemFromArray(id);
  });


  function addItemToDOM(itemId, toDoItem) {
    // create an li
    const li = document.createElement('li');
    li.setAttribute('data-id', itemId);
    // add toDoItem text to li
    li.innerText = toDoItem;
    // add li to the DOM
    ul.appendChild(li);
  }

  function addItemToArray(itemId, toDoItem) {
    // add item to array as an object with an ID so we can find and delete it later
    toDoListArray.push({ itemId, toDoItem });
    console.log(toDoListArray);
  }

  function removeItemFromDOM(id) {
    // get the list item by data ID
    var li = document.querySelector('[data-id="' + id + '"]');
    // remove list item
    ul.removeChild(li);
  }

  function removeItemFromArray(id) {
    // create a new toDoListArray with all li's that don't match the ID
    toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
    console.log(toDoListArray);
  };
 

