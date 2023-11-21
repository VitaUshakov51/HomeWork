   const headerMenuButton = document.getElementById('headerMenu');
   const menu = document.getElementById('menu');
   const closeMenuButton = document.getElementById('closeMenu');

   function showMenu() {
           menu.classList.add('active');
   };

   function closeMenu() {
       menu.classList.remove('active');
   };

   headerMenuButton.addEventListener('click', showMenu);
   closeMenuButton.addEventListener('click', closeMenu);







