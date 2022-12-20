var hamburger = document.querySelectorAll(".hamburger")[0];
var menu = document.querySelectorAll(".menu")[0];

hamburger.addEventListener("click", function(){
    menu.classList.add("click")
})