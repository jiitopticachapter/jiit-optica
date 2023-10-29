const notesContainer = document.querySelector(".notes");
const CreateButton = document.querySelector(".button");

let notes = document.querySelectorAll(".input-box");

function displayLocalData(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
displayLocalData();

function updateStorage(){
  localStorage.setItem("notes",notesContainer.innerHTML)
}

CreateButton.addEventListener("click",()=>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable","true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
  if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }
  else if(e.target.tagName==="P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }
})

document.addEventListener("Keydown",event =>{
  if(event.key == "Enter"){
    document.execCommand('insertLineBreak');
    document.execCommand('insertBreak');
    event.preventDefault();
  }
})