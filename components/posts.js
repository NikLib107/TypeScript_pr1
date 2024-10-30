"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPosts = loadPosts;
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var postsContainer = document.querySelector('.posts');
        data.forEach(function (post) {
            var postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = "<h3>".concat(post.title, "</h3><p>").concat(post.body, "</p>");
            postsContainer.appendChild(postElement);
        });
    });
}
