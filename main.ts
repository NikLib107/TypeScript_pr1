import { initModal } from './components/modal.js';
import { initButton } from './components/button.js';
import { loadPosts } from './components/posts.js';

initModal();
initButton();
loadPosts();

window.addEventListener('scroll', (): void => {
  console.log('Scrolling...');
});