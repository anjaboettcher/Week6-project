document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

let index = 1;
function add_link_field() {
  index++;
  let objTo = document.querySelector(".link_fields");
  let divtest = document.createElement("div");
  divtest.setAttribute("class", "form-group removeclass" + index);
  let rdiv = "removeclass" + index;
  divtest.innerHTML = '<div class="input-group md-form mt-0"><input class="form-control" name="links[]" type="text" placeholder="Type something" /></button><button class="btn btn-outline-info btn-rounded z-depth-0" type="button" onclick="remove_link_field('+index+')"><span>-<span></button></div>'
  objTo.appendChild(divtest);
}
function remove_link_field(rid) {
  $(".removeclass" + rid).remove();
}

let createFileInput = document.querySelector("#createCustomFile");
let editFileInput = document.querySelector("#editCustomFile"); 

if (createFileInput) {
  createFileInput.onchange = function() {
    if(this.value)
    { this.nextElementSibling.innerHTML=`${this.value.substring(0,40)}`}
  };
}

if (editFileInput) {
  editFileInput.onchange = function() {
      this.nextElementSibling.innerHTML=`${this.nextElementSibling.innerHTML.substring(7,40)}`;
  }
}

let searchInput = document.querySelector("#search-input");
let searchForm = document.querySelector("#search-form");
let cardBody = document.querySelectorAll(".card-body"); //all card-body elements 
let container = document.querySelector(".container");
let noResultsMessage = document.querySelector("#no-results-message")

searchForm.onkeydown = e => {
  let matches = [];

  if (e.keyCode === 13 ){
    e.preventDefault();
    
    if (searchInput.value) {
      cardBody.forEach( (element) => {
        for(let i=0; i <= element.children.length-1; i++) { //go through all children of each element
          if((element.children[i].innerText).includes(searchInput.value)) { 
            matches.push(element);
        } 
      } 
    })

    cardBody.forEach( (element) => {
        if (!matches.includes(element)) {
          element.closest('.col-md-4').style.display = "none";
        } else {
          element.closest('.col-md-4').style.display = "flex";
        }
      }
    )}
    
    if (searchInput.value && matches.length === 0) {
      noResultsMessage.style.display = "block";
    } else {
      noResultsMessage.style.display = "none";
    }
  }
}