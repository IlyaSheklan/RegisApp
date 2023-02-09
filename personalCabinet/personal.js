'use strict';

let htmlUsers = '';

for(let key in localStorage){
    if(localStorage.getItem(key) !== null && key !== 'admin'){
        htmlUsers += `<li class="user">Login: ${key}</li>`;
    }
}

const personalHtml = (login, pass) => { 
    return(`
    <div class="cabinet">
        <div class="cabinet-welcome">
            <div class="welcome-title">Привет, ${login}</div>
        </div>
        <hr>
        <div class="cabinet-login">Ваш логин: ${login}</div>
        <div class="cabinet-passwod">Ваш пароль: ${pass}</div>
        <div class="cabionet-btn btn-block">
            <a href="#" class="cabinet-log-out btn-form" onclick="logOut();">Log out</a>
        </div>
    </div>
    `);
}

const adminPanel = (login, pass) => {
    return(
        `
        <div class="cabinet">
            <div class="cabinet-welcome">
                <div class="welcome-title">Привет, Админ</div>
            </div>

            <hr>

            <div class="cabinet-login">Ваш логин: ${login}</div>
            <div class="cabinet-passwod">Ваш пароль: ${pass}</div>

            <div class="cabinet-admin-vis">
                <div class="cabinet-admin__title">Пользователи:</div>
                <ul class="user-list">
                    ${htmlUsers}
                </ul>
            </div>

            <div class="cabionet-btn btn-block">
                <a href="#" class="cabinet-log-out btn-form" onclick="logOut();">Log out</a>
            </div>
        </div>
        `
    )
}

const logOut = () => {
    authoBlock.innerHTML = authoHtml;
    menu.style.display = 'block';
}