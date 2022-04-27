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
