const someButton: HTMLButtonElement = document.querySelector('.some-button') as HTMLButtonElement;

export function initButton(): void {
  someButton.addEventListener('click', (): void => {
    alert('Button clicked!');
  });
}