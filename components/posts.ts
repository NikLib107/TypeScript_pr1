import { Post } from '../types/post';

export function loadPosts(): void {
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
}