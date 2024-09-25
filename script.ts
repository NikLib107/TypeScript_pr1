const modal: HTMLElement = document.querySelector('.modal') as HTMLElement;
const openBtn: HTMLButtonElement = document.querySelector('.open-modal-btn') as HTMLButtonElement;
const closeBtn: HTMLButtonElement = document.querySelector('.close-modal-btn') as HTMLButtonElement;

openBtn.addEventListener('click', (): void => {
  modal.classList.add('open');
});

closeBtn.addEventListener('click', (): void => {
  modal.classList.remove('open');
});

window.addEventListener('scroll', (): void => {
  console.log('Scrolling...');
});

const someButton: HTMLButtonElement = document.querySelector('.some-button') as HTMLButtonElement;
someButton.addEventListener('click', (): void => {
  alert('Button clicked!');
});

interface Post {
  title: string;
  body: string;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response: Response): Promise<Post[]> => response.json())
  .then((data: Post[]): void => {
    const postsContainer: HTMLElement = document.querySelector('.posts') as HTMLElement;
    data.forEach((post: Post): void => {
      const postElement: HTMLDivElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postsContainer.appendChild(postElement);
    });
  });