let input = document.querySelector("input");
let form = document.querySelector("form");
let ul = document.querySelector(".list-group");

const AddTask =(event) =>{
  event.preventDefault();
  
  let li = document.createElement("li");
  li.innerText = input.value;
  li.className ="list-group-item";
  let delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.className = "del-btn";
  li.appendChild(delbtn);
  ul.appendChild(li);
  form.reset();
}

form.addEventListener("submit",AddTask);

const deleteTask = (event) =>{
    if(event.target.className === "del-btn"){
        // event.target.parentElement.remove();
        // OR
        ul.removeChild(event.target.parentElement);
    }
}

ul.addEventListener("click",deleteTask);