"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initButton = initButton;
var someButton = document.querySelector('.some-button');
function initButton() {
    someButton.addEventListener('click', function () {
        alert('Button clicked!');
    });
}
