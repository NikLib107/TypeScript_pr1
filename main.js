"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modal_js_1 = require("./components/modal.js");
var button_js_1 = require("./components/button.js");
var posts_js_1 = require("./components/posts.js");
(0, modal_js_1.initModal)();
(0, button_js_1.initButton)();
(0, posts_js_1.loadPosts)();
window.addEventListener('scroll', function () {
    console.log('Scrolling...');
});
