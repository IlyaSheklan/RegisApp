'use strict'

localStorage.setItem('admin', 'admin123');

const authoHtml = `
    <div class="authorizastion-block">
        <div class="autho-title title">Log in</div>
        <form class="autho-form action="#"">
            <div class="login-block">
                <input class="login-inp" placeholder="Введите логин..." pattern="[^ а-яёА-ЯЁ]+"/>
            </div>
            <div class="password-block">
                <input class="pass-inp" type="password" placeholder="Введите пароль..." pattern="[^ а-яёА-ЯЁ]+"/>
            </div>
            <div class="btn-block">
                <button class="btn-enter btn-form" type="reset" onclick="enterToAcc();">Войти</button>
            </div>
            <div class="forgot-block">
                <a class="forgot-pass-link" href="#" onclick="openResetPassword();">Забыли пароль?</a>
            </div>
        </form>
    </div>
`;

// авторизация пользователя
const enterToAcc = () => {
    const inputLogin = document.querySelector(".login-inp").value;
    const inputPass = document.querySelector(".pass-inp").value;
    let flag = false;


    for(let key in localStorage){
        if(key === inputLogin && localStorage.getItem(key) === inputPass){
            flag = true;

            authoBlock.innerHTML = personalHtml(inputLogin, inputPass);
            menu.style.display = 'none';
        } 
        
        else if(inputLogin === 'admin' && inputPass === localStorage.getItem('admin')) {
            flag = true;

            authoBlock.innerHTML = adminPanel(inputLogin, inputPass);
            menu.style.display = 'none';
        }
    }

    if(!flag){
        blockForError.innerHTML = errorBlock("Пароль или логин введен неверно!");
    }
}

const closeErrorBlock = () => {
    blockForError.innerHTML = '';
}

const openResetPassword = () => {
    authoBlock.innerHTML = forgotHtml;
}

btnLink.addEventListener('click', () => {
    authoBlock.innerHTML = authoHtml;
});




