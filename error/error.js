'use strict';

const errorBlock = (text) => {
    return(`
        <div class="error-block error-succes">
            <div class="title-error error-succes__title">Ошибка!</div>
            <div class="text-error error-succes__text">
                ${text}
            </div>
            <div class="block-btn-error error-succes__btn-block">
                <a class="error-btn-close error-succes__btn" href="#" onclick="closeErrorBlock();">Ок</a>
            </div>
        </div>
    `);
}
