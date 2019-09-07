

window.onload = function(){
  console.log("i'm  alive")
  // animate leave on scroll
  document.querySelector("body").classList.add("loaded")
  var leaves = document.querySelector("#leaves")
  function rotate(){
    console.log(window.pageYOffset)
    var n = window.pageYOffset/20;
    leaves.setAttribute("style", "transform: rotate("+-n+"deg) translate("+-2*n+"px",+n+"px)")}
  window.addEventListener('scroll', function(){
    rotate();
  }) 
}