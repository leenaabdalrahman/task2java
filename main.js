var body=document.querySelector("body");
var bigbtn=document.querySelector(".bigbt");
var smallbtn=document.querySelector(".smallbt");

function big(){
  body.classList.remove("small");
  body.classList.add("big");
}
function small(){
  body.classList.remove("big");
  body.classList.add("small");
}
bigbtn.onclick=big;
smallbtn.onclick=small;