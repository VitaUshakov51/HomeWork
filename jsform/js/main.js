window.onload = function () {
    console.log('JavaScript успешно загружен');


    function clickCheckbox() {
        let checkBox = document.getElementById('checkbox');
        if (checkBox.checked) {
            console.log('Чекбокс выбран - "Согласен"');
        } else {
            console.log('Чекбокс не выбран - "Не согласен"');
        }
    };
    document.getElementById('checkbox').onclick = clickCheckbox;

    let error = document.getElementsByClassName('error');
    let mainItem = document.getElementsByClassName('main__item');


    let person = {};

    let form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        for (let i = 0; i < error.length; i++) {
            error[i].style.display = 'none';
        }
        for (let i = 0; i < mainItem.length; i++) {
            mainItem[i].style.borderColor = '#C6C6C4';
        }
        if (!e.target[0].value.match(/^[А-Я][а-я]+\s*[А-Я][а-я]+$/)) {
            error[0].style.display = 'block';
            mainItem[0].style.borderColor = 'red';
        } else if (!e.target[1].value.match(/^[\w]+$/)) {
            error[1].style.display = 'block';
            mainItem[1].style.borderColor = 'red';
        } else if (!e.target[2].value.match(/^\w+@[a-z]+\.[a-z]+$/)) {
            error[2].style.display = 'block';
            mainItem[2].style.borderColor = 'red';
        } else if (!e.target[3].value.match(/^[A-Za-z0-9].{8,15}$/)) {
            error[3].style.display = 'block';
            mainItem[3].style.borderColor = 'red';
        } else if (e.target[4].value !== e.target[3].value) {
            error[4].style.display = 'block';
            mainItem[4].style.borderColor = 'red';
        } else if (!e.target[5].checked) {
            error[5].style.display = 'block';
        } else {
            person = {
                fullName: e.target[0].value,
                yourUserName: e.target[1].value,
                eMail: e.target[2].value,
                password: e.target[3].value,
                repeatPassword: e.target[4].value,
                accept: e.target[5].checked,
            };


            let clientsArray = [];
            let clients = localStorage.getItem('clients');

            if (clients) {
                clientsArray = JSON.parse(clients)
            }

            clientsArray.push(person);
            localStorage.setItem('clients', JSON.stringify(clientsArray));
            // console.log(localStorage);
            form.reset();
            openModal();
        }
    })


    let modalButton = document.getElementById('modalButton');
    modalButton.addEventListener('click', function (e) {
        closeModal();
    })


    function openModal() {
        document.getElementById('modal').style.transform = 'translateY(0%)';
    }


    function closeModal() {
        document.getElementById("modal").style.transform = "translateY(-100%)";
        document.getElementById('mainTitle').innerText = 'Log in to the system';
        document.getElementById('itemName').remove();
        document.getElementById('itemEmail').remove();
        document.getElementById('itemRepeatPassword').remove();
        document.getElementById('itemCheckBox').remove();
        document.getElementById('mainLink').innerText = 'Registration';
        document.getElementById('main__button').innerText = 'Sign In';
        document.getElementById('mainLink').addEventListener("click", ev => window.location.reload())
        form.reset();
        authForm();
    }

    document.getElementById('mainLink').addEventListener("click", ev => closeModal())


    let loginBtn = document.querySelector('.main__button');

    function authForm() {
        loginBtn.onclick = (e) => {
            e.preventDefault();
            for (let i = 0; i < error.length; i++) {
                error[i].style.display = 'none';
            }
            for (let i = 0; i < mainItem.length; i++) {
                mainItem[i].style.borderColor = '#C6C6C4';
            }
            if (form[0].value.length < 1) {
                error[0].innerText = 'Поле на заполнено'
                error[0].style.display = 'block';
                mainItem[0].style.borderColor = 'red';

            } else if (form[1].value.length < 8) {
                error[1].innerText = 'Пароль менее 8 символов'
                error[1].style.display = 'block';
                mainItem[1].style.borderColor = 'red';
            } else {
                userCheck();
            }
        }
    }



    function userCheck() {
        let clientsArray = JSON.parse(localStorage.getItem('clients'));
        let userName = document.getElementById('yourUsername').value;
        let password = document.getElementById('password').value;
        if (!clientsArray.find((el) => el.yourUserName === userName)) {
            error[0].innerText = 'Такой пользователь не найден';
            error[0].style.display = 'block';
            mainItem[0].style.borderColor = 'red';
        } else if (!clientsArray.find((el) => el.password === password)) {
            error[1].innerText = 'Неверный пароль'
            error[1].style.display = 'block';
            mainItem[1].style.borderColor = 'red';
        } else {
            document.getElementById('itemUserName').remove();
            document.getElementById('itemPassword').remove();
            document.getElementById('mainTitle').innerText = 'Welcome, ' + userName  + ' !';
            document.getElementById('main__button').innerText = 'Exit';
            document.getElementById('mainLink').remove();
            loginBtn.addEventListener('click', function (event) {
                window.location.reload();
            })
        }
    }

};

let test = JSON.parse(localStorage.getItem('clients'));
