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

let fileInput = document.querySelector("#createCustomFile");
fileInput.onchange = function() {
  if(this.value)
    { this.nextElementSibling.innerHTML=`${this.value.substring(0,40)}`}
  console.log(this)
};
