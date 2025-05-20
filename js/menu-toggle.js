const botao = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav_menu');

botao.addEventListener('click', function() {
    menu.classList.toggle('menu-ativo');
});
