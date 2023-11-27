(function (){
    const headerMenuButton = document.getElementById('headerMenu');
    const menu = document.getElementById('menu');
    const closeMenuButton = document.getElementById('closeMenu');
    const body = document.getElementById('body');

    function showMenu() {
        menu.classList.add('active');
        body.style.overflow = 'hidden';

    };

    function closeMenu() {
        menu.classList.remove('active');
        body.style.removeProperty('overflow');
    };

    headerMenuButton.addEventListener('click', showMenu);
    closeMenuButton.addEventListener('click', closeMenu);

})();








