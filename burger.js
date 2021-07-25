(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header-burg');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());   