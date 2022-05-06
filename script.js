const addButton = document.querySelector(".add");
const toDoListContainerHTML = document.querySelector(".containerLists");
const toDoInput = document.querySelector(".textType");

addButton.addEventListener("click",addElement);
const toDoList = document.querySelector(".toDoList");
let toDoListData  = [];

// toDoElement = { id: 0, title: '', status: 'c' | 'u' }

document.addEventListener("click", (e) => {
  const clickedElement = e.target;
  
  // handles the status change of totoItem
  if (clickedElement.classList.contains("toDoButtonCheck")) {
    const buttoncheckFather =  clickedElement.closest('.toDoDiv');
    const todoId = buttoncheckFather.getAttribute('id');

    toggleElementStatus(+todoId, toDoListData[todoId].status)
  }

  // delete element on click
  if (clickedElement.classList.contains('toDoButton')) {
    const deletedButtonFather =  clickedElement.closest('.toDoDiv');
    const todoId = deletedButtonFather.getAttribute('id');

    removeElement(+todoId);
  }
});

const createUiToDoElement = ({ id, title, status }) => {
  const toDoList = document.querySelector(".toDoList");

  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add("toDoDiv");
  toDoDiv.setAttribute("id", id);

  const toDoButton = document.createElement('button');
  toDoButton.classList.add("toDoButton");
  toDoButton.innerText = '-';

  const toDoButtonCheck = document.createElement('button');
  toDoButtonCheck.classList.add("toDoButtonCheck");
  toDoButtonCheck.innerText = 'C';

  
  const toDoLi = document.createElement('li');
  toDoLi.classList.add("toDoLi");

  if (status === 'c') {
    toDoDiv.classList.add('completed');
  }

  toDoLi.innerText = title;
  toDoDiv.appendChild(toDoLi);
  toDoDiv.appendChild(toDoButtonCheck);
  toDoDiv.appendChild(toDoButton);
  toDoList.appendChild(toDoDiv);
}; 

const reDrawList = (elementsToShow = toDoListData) => {
  // delete todoList from UI
  toDoListContainerHTML.removeChild(document.querySelector('.toDoList'));
  
  // create new ul .toDoList
  const htmlList = document.createElement('ul');
  htmlList.classList.add('toDoList');

  toDoListContainerHTML.appendChild(htmlList);

  elementsToShow.forEach((item) => {
    createUiToDoElement(item);
  })
};  

function addElement() {
  if (!toDoInput.value){
    return;
  }

  toDoListData.push({ id:  toDoListData.length, title: toDoInput.value, status: 'u' });

  reDrawList();

  toDoInput.value = '';
}

function removeElement (toDoId) {
  toDoListData = toDoListData.filter(({ id }) => id !== toDoId);
  reDrawList();
}

function toggleElementStatus (todoId, status) {
  toDoListData[todoId].status = status === 'u' ? 'c' : 'u';
  reDrawList();
}

function filterAll() {
  return reDrawList();
}

function filterOptionUncompleted () {
  reDrawList(toDoListData.filter(({ status }) => status === 'u'));
}

function filterOptionCompleted() {
  reDrawList(toDoListData.filter(({ status }) => status === 'c'));
}

// Dropdown menu
const dropdownButton = document.querySelector('.dropdownButton');
const dropdownMenu = document.querySelector('.dropdownMenu');

dropdownButton.addEventListener('click',openMenu)
dropdownMenu.style.display = 'none';

function openMenu () {
  if (dropdownMenu.style.display === 'none'){
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
}

// sort dropdown list
const dropdownList = document.querySelector('.dropdownList');
const filterAllElement = document.querySelector('.filterAll');
const filterCompleted = document.querySelector('.filterCompleted');
const filterUncompleted = document.querySelector('.filterUncompleted');

filterAllElement.addEventListener('click', filterAll);
filterCompleted.addEventListener('click', filterOptionCompleted);
filterUncompleted.addEventListener('click', filterOptionUncompleted);
