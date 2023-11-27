(function (){
    const playerButton = document.getElementById('playerButton');
    const coachButton = document.getElementById('coachButton');
    const players = document.getElementById('players');
    const coaches = document.getElementById('coach');
    const filter = document.getElementById('filter');
    const filterRPL = document.getElementById('filterRPL');
    const filterFNL = document.getElementById('filterFNL');
    const filterFNLTWO = document.getElementById('filterFNLTWO');
    const filterYoung = document.getElementById('filterYoung');
    playerButton.classList.add('active');

    const items = document.getElementsByClassName('clients__item');
    const arrayItems = [...items];


    playerButton.onclick = showPlayers;
    coachButton.onclick = showCoach;



    filterRPL.onclick = function () {
        this.classList.add('active');
        filterFNL.classList.remove('active');
        filterFNLTWO.classList.remove('active');
        filterYoung.classList.remove('active');
        arrayItems.forEach(item => {
            item.classList.add('hidden');
            if (item.classList.contains('clients__item--rpl')) {
                item.classList.remove('hidden');
            }
        })
    }
    filterFNL.onclick = function () {
        this.classList.add('active');
        filterRPL.classList.remove('active');
        filterFNLTWO.classList.remove('active');
        filterYoung.classList.remove('active');
        arrayItems.forEach(item => {
            item.classList.add('hidden');
            if (item.classList.contains('clients__item--fnl')) {
                item.classList.remove('hidden');
            }
        })
    }
    filterFNLTWO.onclick = function () {
        this.classList.add('active')
        filterRPL.classList.remove('active');
        filterFNL.classList.remove('active');
        filterYoung.classList.remove('active');
        arrayItems.forEach(item => {
            item.classList.add('hidden');
            if (item.classList.contains('clients__item--fnl2')) {
                item.classList.remove('hidden');
            }
        })
    }
    filterYoung.onclick = function () {
        this.classList.add('active');
        filterRPL.classList.remove('active');
        filterFNL.classList.remove('active');
        filterFNLTWO.classList.remove('active');
        arrayItems.forEach(item => {
            item.classList.add('hidden');
            if (item.classList.contains('clients__item--young')) {
                item.classList.remove('hidden');
            }
        })
    }



    function showPlayers(){
        playerButton.classList.add('active');
        coaches.style.display = 'none';
        players.style.display = 'flex';
        coachButton.classList.remove('active')
        filter.style.display = 'flex';
    }
    function showCoach(){
        filter.style.display = 'none';
        playerButton.classList.remove('active')
        players.style.display = 'none';
        coaches.style.display = 'flex';
        coaches.style.marginTop = '60px';
        coachButton.classList.add('active');
        arrayItems.forEach(item => {
            item.classList.remove('hidden');
        })
    }

})();
