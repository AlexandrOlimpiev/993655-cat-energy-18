var menu = document.querySelector('.menu');
var toggle = document.querySelector('.toggle-burger');
menu.classList.remove('menu--no-js');
toggle.classList.remove('toggle-burger--no-js');
toggle.addEventListener("click", function(){
menu.classList.toggle('menu--open');
toggle.classList.toggle('toggle-burger--open');
});
