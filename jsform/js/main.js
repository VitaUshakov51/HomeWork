window.onload = function () {
    console.log('JavaScript успешно загружен');


    let inputFullName = document.getElementById('fullName');
    let regex = /[0-9]/g;
    inputFullName.oninput = function () {
        this.value = this.value.replace(regex, '');
    };


    let inputYourUsername = document.getElementById('yourUsername');
    inputYourUsername.oninput = function () {
        this.value = this.value.replace(regex, '');
        this.value = this.value.replace(',', '');
        this.value = this.value.replace('.', '');
    };


    function clickCheckbox() {
        let checkBox = document.getElementById('checkbox');
        if (checkBox.checked) {
            console.log('Чекбокс выбран - "Согласен"');
        } else {
            console.log('Чекбокс не выбран - "Не согласен"');
        }
    };
    document.getElementById('checkbox').onclick = clickCheckbox;


    let form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (e.target[0].value.length < 1) {
            alert('Заполните поле Full Name');
        } else if (e.target[1].value.length < 1) {
            alert('Заполните поле Your Username');
        } else if (e.target[2].value.length < 1) {
            alert('Заполните поле E-mail');
        } else if (e.target[3].value.length < 8) {
            alert('Введите пароль не менее 8 символов');
        } else if (e.target[4].value.length < 1) {
            alert('Пароли на совпадают');
        } else if (!e.target[5].checked) {
            alert('Вы не поставили галочку в поле согласие на обработку персональных данных');
        } else {
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
        document.getElementById('mainLink').remove();
        document.getElementById('main__button').innerText = 'Sign In';
        authForm();
    }

    document.getElementById('mainLink').addEventListener("click", ev => closeModal())


    let loginBtn = document.querySelector('.main__button');

    function authForm() {
        loginBtn.onclick = (e) => {
            e.preventDefault();
            if (form[0].value.length < 1) {
                alert('Заполните поле Your Username')
            } else if (form[1].value.length < 8) {
                alert('Пароль менее 8 символов');
            } else {
                alert('Добро пожаловать, ' + form[0].value + '!');
                window.location.reload();
            }
        }
    }

};

