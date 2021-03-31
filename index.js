// const todoLabelSpan = document.querySelector(".todo-label span");
//
// // for(let i=0; i<todoLabel.textContent.length; i++){
//   console.log(todoLabelSpan);
//   todoLabelSpan.style.fontSize = "60px";
// // }

const addBtn = document.querySelector(".add-btn");
const todoSearch = document.querySelector(".todo");
const ourTasks = document.querySelector(".list-of-todo");
const counter = document.querySelector(".counter");

counter.textContent = 0;

//add new task
const addLi = function(text) {
  let li = document.createElement('li');
  li.textContent = text;
  const btnRemove = document.createElement('button');
  const btnCheck = document.createElement('button');
  const iconCheck = document.createElement('i');
  btnRemove.setAttribute('class', 'remove-btn btn');
  btnRemove.setAttribute('type', 'button');
  btnCheck.setAttribute('class', 'check-btn btn');
  btnCheck.setAttribute('type', 'button');
  iconCheck.setAttribute('class', 'fas fa-check')
  btnCheck.appendChild(iconCheck);
  li.appendChild(btnRemove);
  li.appendChild(btnCheck);
  return li;
}

function sendToBtn() {
  ourTasks.appendChild(addLi(todoSearch.value));
  todoSearch.value = "";
  counter.textContent++;
}
addBtn.addEventListener("click", sendToBtn);


//Remove and Check tasks
ourTasks.addEventListener('click', function(e){

  if(e.target.className === "remove-btn btn"){
    ourTasks.removeChild(e.target.parentNode);
    if(e.target.parentNode.style.backgroundColor !== "rgb(163, 163, 163)"){
      counter.textContent--;
    }
  }
  else if(e.target.className === "check-btn btn"){
    if(e.target.parentNode.style.backgroundColor == "rgb(163, 163, 163)"){
      e.target.parentNode.style.backgroundColor = "#f0f0f0";
      e.target.parentNode.removeChild(e.target.parentNode.lastChild);
      counter.textContent++;
    }
    else{
      const checkLine = document.createElement('div');
      checkLine.setAttribute('class', 'checked-line');
      e.target.parentNode.style.backgroundColor = "#a3a3a3";
      e.target.parentNode.appendChild(checkLine);
      counter.textContent--;
    }
  }
  else if (e.target.className === 'fas fa-check') {
    if(e.target.parentNode.parentNode.style.backgroundColor == "rgb(163, 163, 163)"){
      e.target.parentNode.parentNode.style.backgroundColor = "#f0f0f0";
      e.target.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.lastChild);
      counter.textContent++;
    }
    else{
      console.log(e.target.parentNode);
      const checkLine = document.createElement('div');
      checkLine.setAttribute('class', 'checked-line');
      e.target.parentNode.parentNode.style.backgroundColor = "#a3a3a3";
      e.target.parentNode.parentNode.appendChild(checkLine);
      counter.textContent--;
    }
  }
});
