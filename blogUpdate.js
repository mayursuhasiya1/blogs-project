document.getElementById("demo").innerHTML = "Hello external JavaScript!";

var form = document.getElementsByClassName("form");

form.onsubmit = function(e){
  e.preventDefault();
  var name = document.form.blog_name.value;
  var body = document.form.blog_body.value
  console.log(name,body);
}