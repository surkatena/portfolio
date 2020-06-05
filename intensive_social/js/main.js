const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');


menuBtn.addEventListener('click', function(){
  console.log('1');
  menu.classList.toggle('active');
});