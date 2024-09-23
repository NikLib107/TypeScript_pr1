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
document.querySelector('.some-button').addEventListener('click', function () {
    alert('Button clicked!');
});
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) { return response.json(); })
    .then(function (json) { return console.log(json); });
