//Select the elements into variables
var input = document.getElementById("userinput");
var boton = document.getElementsByTagName("button")[0];
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var i = document.querySelectorAll("i");

function inputLength(){
  return input.value.length;
}

function createListElement(){
  // var li = document.createElement("li");
  // var i = document.createElement("i");
  // i.className = "close fas fa-times has-text-danger"
  // li.appendChild(document.createTextNode(input.value));
  // li.appendChild(i);

  let template = `
    <li>
      ${input.value}
      <i class="close fas fa-times has-text-danger" onclick></i>
    </li>
  `
  ul.innerHTML  += template;
  removeEvent(ul.lastElementChild)
  input.value = "";
}

function addListAfterClick(){
  if(inputLength() > 0 ){
    createListElement();
  }
}

function addListAfterKeypress(event){
  if(inputLength() > 0 && event.keyCode === 13){
    createListElement();
  }
}

// Add a "checked" symbol when clicking on a list item
function checkedItem(ev){
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  } false;
}

//
function removeEvent(el){
  el.onclick = () => {el.parentNode.remove(el)}
}
i.forEach(function(item){
  removeEvent(item)
})


//Listerners
boton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener('click', checkedItem);
