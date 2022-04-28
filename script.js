const addButton = document.querySelector(".add");
const toDoListContainerHTML = document.querySelector(".containerLists");
const toDoInput = document.querySelector(".textType");
const toDoList = document.querySelector(".toDoList");

addButton.addEventListener("click",addElement);

function addElement() {
   
  if (!toDoInput.value){
    return;
  }

  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add("toDoDiv");

  const toDoButton = document.createElement('button');
  toDoButton.classList.add("toDoButton");
  toDoButton.innerText = '-';

  const toDoButtonCheck = document.createElement('button');
  toDoButtonCheck.classList.add("toDoButtonCheck");
  toDoButtonCheck.innerText = 'C';

  const toDoLi = document.createElement('li');
  toDoLi.classList.add("toDoLi");

  toDoLi.innerText =  toDoInput.value;
  toDoDiv.appendChild(toDoLi);
  toDoDiv.appendChild(toDoButtonCheck);
  toDoDiv.appendChild(toDoButton);
  toDoList.appendChild(toDoDiv);

  toDoInput.value = '';

}

toDoList.addEventListener("click", removeList);

function removeList(e) {
  
  const item = e.target;
  if (item.classList[0] === 'toDoButton'){
    const parent = item.parentElement;
    parent.remove();
  }

  if(item.classList[0] === 'toDoButtonCheck'){
    const parent = item.parentElement;
    parent.classList.toggle('completed');
  }
}
//Dropdown menu
const dropdownButton = document.querySelector('.dropdownButton');
const dropdownMenu = document.querySelector('.dropdownMenu');

dropdownButton.addEventListener('click',openMenu)

dropdownMenu.style.display = 'none';
function openMenu ()
{
  if (dropdownMenu.style.display == 'none'){
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
}

//sort dropdown list
const dropdownList = document.querySelector('.dropdownList');
const filterAll = document.querySelector('.filterAll');
const filterCompleted = document.querySelector('.filterCompleted');
const filtrUncompleted = document.querySelector('.filterUncompleted');

filterAll.addEventListener('click', filterOptionAll);
filterCompleted.addEventListener('click', filterOptionCompleted);
filterUncompleted.addEventListener('click', filterOptionUncompleted);

// function filterAll() {
//   toDoList.filter(function(value){
//       if (value.classList.contains("completed")){
//       return value;
//      }  } else {
//       value.style.display = "none";
//     }
//   })
// }

function filterOptionCompleted() {
  console.log(1);

}

//FILTRAREA CU NICU TREBUIE