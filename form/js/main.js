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


    let buttonSignIn = document.getElementById('main__button');

    buttonSignIn.addEventListener('click', function (event) {
        event.preventDefault();
    })

    buttonSignIn.onclick = clickSignUp;

    function clickSignUp() {

        function checkingForEmptyFields() {
            let inputs = document.querySelectorAll('.main__input');
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[0].value === '') {
                    alert('Заполните поле Full name');
                    return;
                } else if (inputs[1].value === '') {
                    alert('Заполните поле Your username');
                    return;
                } else if (inputs[2].value === '') {
                    alert('Заполните поле E-mail');
                    return;
                } else if (inputs[3].value === '') {
                    alert('Заполните поле Password');
                    return;
                } else if (inputs[4].value === '') {
                    alert('Заполните поле Repeat Password');
                    return;
                } else {
                    return;
                }
            }
        }

        checkingForEmptyFields();

        function checkingForLenghtPassword() {
            let password = document.getElementById('password');
            if (password.value.length < 8) {
                alert('Пароль должен быть не короче 8-ми символов');
                return;
            } else {
                return;
            }
        };
        checkingForLenghtPassword();

        function passwordMatchCheck() {
            let password = document.getElementById('password').value;
            let repeatPassword = document.getElementById('repeatPassword').value;
            if (password !== repeatPassword) {
                alert('Пароли не совпадают');
            } else if (password && repeatPassword === '') {
                console.log('Пароли пустые');
            } else {
                return;
            }
            ;
        }

        passwordMatchCheck();

        function accept() {
            let checkBox = document.getElementById('checkbox');
            if (!checkBox.checked) {
                alert('Примите условия соглашения, поставьте галочку');
                return;
            } else {
                document.getElementById("modal").style.transform = "translateY(0%)";
            }
            ;
        }

        accept();


    };


    function closeModal() {
        document.getElementById("modal").style.transform = "translateY(-100%)";
        let inputs = document.querySelectorAll('.main__input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        ;
        document.getElementById('mainTitle').innerText = 'Log in to the system';
        //Циклом не получилось найти айтемы
        // let items = document.querySelectorAll('.main__item');
        // for (let i = 1; i < items.length; i++) {
        //     console.log(items[i]);
        //     if (items[i] === 1) {
        //         let item = items[i];
        //         item.remove();
        //     }
        // }
        document.getElementById('itemName').remove();
        document.getElementById('itemEmail').remove();
        document.getElementById('itemRepeatPassword').remove();
        document.getElementById('itemCheckBox').remove();
        document.getElementById('mainLink').remove();
        buttonSignIn.innerText = 'Sign In';
    }
    // function checkRegistr() {
    //     let name = document.getElementById('yourUsername').value;
    //     let password = document.getElementById('password').value;
    //     if (name === '') {
    //         alert('Заполните поле Your username');
    //     } else if ( password === '') {
    //         alert('Заполните поле Password');
    //     } else  {
    //         alert('Добро пожаловать ' + name + ' !')
    //     }
    // }

    document.getElementById('mainLink').addEventListener("click", ev => closeModal())

    let modalButton = document.getElementById('modalButton');
    modalButton.addEventListener("click", ev => closeModal())





};

