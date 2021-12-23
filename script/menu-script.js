const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const open = document.querySelector('.open');
const menuLinks = document.querySelectorAll('.menu-link');

open.addEventListener('click', show);
close.addEventListener('click', hide);
menuLinks.forEach(item => {
  item.addEventListener('click', hide)
});

function show(){
  menu.style.display = "flex";
  menu.style.top = "0";
}

function hide(){
  menu.style.top = "-100%";
}