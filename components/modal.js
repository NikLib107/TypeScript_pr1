"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModal = initModal;
var modal = document.querySelector('.modal');
var openBtn = document.querySelector('.open-modal-btn');
var closeBtn = document.querySelector('.close-modal-btn');
function initModal() {
    openBtn.addEventListener('click', function () {
        modal.classList.add('open');
    });
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('open');
    });
}
