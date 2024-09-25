var modal = document.querySelector('.modal');
var openBtn = document.querySelector('.open-modal-btn');
var closeBtn = document.querySelector('.close-modal-btn');
openBtn.addEventListener('click', function () {
    modal.classList.add('open');
});
closeBtn.addEventListener('click', function () {
    modal.classList.remove('open');
});
window.addEventListener('scroll', function () {
    console.log('Scrolling...');
});
var someButton = document.querySelector('.some-button');
someButton.addEventListener('click', function () {
    alert('Button clicked!');
});
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
