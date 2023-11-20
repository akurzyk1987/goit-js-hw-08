import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener(
  'input',
  throttle(evt => {
    localStorage.setItem(localStorageKey, evt.target.value);
  }, 500)
);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});
