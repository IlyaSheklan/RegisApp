'use strict';

const regisHtml = `
    <div class="registration-block">
        <div class="regis-title title">Sign Up</div>
        <form class="regis-form" action="#">
            <div class="login-block">
                <input class="login-inp" placeholder="Введите логин..." pattern="[^ а-яёА-ЯЁ]+"/>
            </div>
            <div class="password-block">
                <input class="pass-inp" type="password" placeholder="Введите пароль..." pattern="[^ а-яёА-ЯЁ]+"/>
            </div>
            <div class="password-again-block">
                <input class="pass-again-inp" type="password" placeholder="Повторите пароль..." pattern="[^ а-яёА-ЯЁ]+"/>
            </div>
            <div class="btn-block">
                <button class="btn-regis btn-form" type="reset" onclick="doRegis();">Зарегистрироваться</button>
            </div>
        </form>
    </div>
`;

const successRegis = (text) => {
    return(`
        <div class="success-block error-succes">
            <div class="title-success error-succes__title">Успешно!</div>
            <div class="text-success error-succes__text">
                ${text}
            </div>
            <div class="block-btn-success error-succes__btn-block">
                <a class="seccess-btn-close error-succes__btn" href="#" onclick="closeErrorBlock();">Ок</a>
            </div>
        </div>
    `);
}

let flag = true;

// регистрация пользователя
const doRegis = () => {
    const inputLogin = document.querySelector(".login-inp").value;
    const pass = document.querySelector(".pass-inp").value;
    const passAgain = document.querySelector(".pass-again-inp").value;

    checkLogin(inputLogin);

    if(flag === true){
        if(pass){
            if(pass === passAgain){
                localStorage.setItem(inputLogin, pass);
                blockForError.innerHTML = successRegis('Вы успешно создали аккаунт');
                
            } else{
                blockForError.innerHTML = errorBlock('Пароли не совпадают');
            }
        } 
        else{
            blockForError.innerHTML = errorBlock('Пароль или логин введен неверно!');
        }
    } else{
        blockForError.innerHTML = errorBlock('Такой логин уже занят');
    }
}

// проверка логина
const checkLogin = (login) => {
    for(let key in localStorage){
        if(login === key){
            flag = false;
        }
    }
}

btnSignUp.addEventListener('click', () => {
    authoBlock.innerHTML = regisHtml;
});




