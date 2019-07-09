document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

var index = 1;
function add_link_field() {
  index++;
  var objTo = document.querySelector(".link_fields");
  var divtest = document.createElement("div");
  divtest.setAttribute("class", "form-group removeclass" + index);
  var rdiv = "removeclass" + index;
  divtest.innerHTML = '<div class="input-group md-form mt-0"><input class="form-control" name="links[]" type="text" placeholder="Type something" /><button class="btn btn-success btn-add" type="button" onclick="add_link_field()"><span>+</span></button><button class="btn btn-danger btn-add" type="button" onclick="remove_link_field('+index+')"><span>-<span></button></div>'
  
  objTo.appendChild(divtest);
}
function remove_link_field(rid) {
  $(".removeclass" + rid).remove();
}
