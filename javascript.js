let formList = document.getElementById('formList');
let items = ['Eliwelton' , 'Adriana', 'Maria Eduarda'];

// adding a item no array
function addItem(item) {
    items.push(item);
    printItems();
}

// Capture event click
formList.addEventListener("submit", (e) => {
    e.preventDefault();
    let item = document.getElementById('item')
    addItem(item.value)
});

// creating a item in list
function createItem(item) {
    // get element
    let list = document.getElementById('list');
    let btnList = document.createElement('button');
    let divList = document.createElement('div');
    let itemList = document.createElement('li');
    // adding values and properties
    btnList.innerHTML = 'Excluir';
    divList.setAttribute('class', 'list')
    itemList.innerHTML = item;
    divList.appendChild(itemList)
    divList.appendChild(btnList);
    list.appendChild(divList);
}

// print element in body
function printItems(){
    items.forEach(item => {
        createItem(item);
    });
}

// delete a item on array
function deleteItem(item) {
    
    items.forEach(element => {
        let findedItem;
        if (element == item) {
            findedItem = element;
            console.log(`${item} finded`);
        } else {
            console.log('item find not!')
        }
    });
}




