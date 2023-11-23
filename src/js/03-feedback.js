import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const localStorageKey = 'feedback-form-state';

const saveToLocalStorage = () => {
  const formSettings = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formSettings));
};
const loadFromLocalStorage = () => {
  const savedSettings = localStorage.getItem(localStorageKey);
  if (savedSettings) {
    const { email, message } = JSON.parse(savedSettings);
    emailInput.value = email;
    messageInput.value = message;
  }
};
const throttledSave = throttle(saveToLocalStorage, 500);

form.addEventListener('input', throttledSave);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  console.log({
    email: `${emailInput.value}`,
    message: `${messageInput.value}`,
  });
  evt.target.reset();
});

window.addEventListener('DOMContentLoaded', loadFromLocalStorage);
