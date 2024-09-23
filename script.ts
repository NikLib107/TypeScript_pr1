const modal = document.querySelector('.modal') as HTMLElement;
const openBtn = document.querySelector('.open-modal-btn') as HTMLButtonElement;
const closeBtn = document.querySelector('.close-modal-btn') as HTMLButtonElement;

openBtn.addEventListener('click', () => {
  modal.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});

window.addEventListener('scroll', () => {
  console.log('Scrolling...');
});

const someButton = document.querySelector('.some-button') as HTMLButtonElement;
someButton.addEventListener('click', () => {
  alert('Button clicked!');
});

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data: { title: string, body: string }[]) => {
    const postsContainer = document.querySelector('.posts') as HTMLElement;
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postsContainer.appendChild(postElement);
    });
  });