let formList = document.getElementById('formList');


formList.addEventListener("submit", (e) => {
    e.preventDefault();
    let item = document.getElementById('item')
    createItem(item.value);
    item.value = "";
});

// adding a item in list
function createItem(item) {
    let list = document.getElementById('list');
    let btnList = document.createElement('button');
    btnList.innerHTML = 'Excluir';
    let divList = document.createElement('div');
    divList.setAttribute('class', 'list')
    let itemList = document.createElement('li');
    itemList.innerHTML = item;
    divList.appendChild(itemList)
    divList.appendChild(btnList);
    list.appendChild(divList);
}



