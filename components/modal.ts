const modal: HTMLElement = document.querySelector('.modal') as HTMLElement;
const openBtn: HTMLButtonElement = document.querySelector('.open-modal-btn') as HTMLButtonElement;
const closeBtn: HTMLButtonElement = document.querySelector('.close-modal-btn') as HTMLButtonElement;

export function initModal(): void {
  openBtn.addEventListener('click', (): void => {
    modal.classList.add('open');
  });

  closeBtn.addEventListener('click', (): void => {
    modal.classList.remove('open');
  });
}