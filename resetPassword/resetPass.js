'use strict';

const forgotHtml = `
    <div class="forgot-pass-block">
        <div class="forgot-title title">Изменение пароля</div>
        <form class="forgot-form" action="#">
            <div class="login-block">
                <input class="login-inp" placeholder="Введите логин..." pattern="[^ а-яёА-ЯЁ]+"/>
            </div>
            <div class="password-block">
                <input class="pass-inp" type="password" placeholder="Введите новый пароль..." pattern="[^ а-яёА-ЯЁ]+"/>
            </div>
            <div class="new-pass-block">
                <input class="pass-new-inp" type="password" placeholder="Повторите новый пароль..." pattern="[^ а-яёА-ЯЁ]+"/>
            </div>
            <div class="btn-block">
                <button class="btn-drop btn-form" type="reset" onclick="resetPassword();">Изменить пароль</button>
            </div>
        </form>
    </div>
`;

// Функция изменения пароля
const resetPassword = () => {
    const login = document.querySelector('.login-inp').value;
    const lastPass = document.querySelector('.pass-inp').value;
    const newPass = document.querySelector('.pass-new-inp').value;

    for(let key in localStorage){
        if(login === key){
            if(lastPass === newPass){
                localStorage.setItem(key, newPass);
                blockForError.innerHTML = successRegis("Пароль изменен");
            }
        }
    }
}