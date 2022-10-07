const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

window.onload = function changeBg() {

  const images = [
    'url("1.jpg")',
    'url("2.jpg")',
    'url("3.jpg")',
  ];
  const music = []

  const section = document.querySelector('section')
  const bg = images[Math.floor(Math.random() * images.length)];
  section.style.backgroundImage = bg;
}

const section = document.querySelector('section')

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 1) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

function botao() {
  window.location.href = "https://www.youtube.com/watch?v=KUrWlP9Bwt8&ab_channel=gabrielsoares";
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

function handleEnterKeyPress() {
  console.log('Enter key pressed')
}

window.addEventListener('keyup', event => {
  console.log(event.code, event.key);

  if (event.code === 'NumpadEnter' || event.code === 'Enter')
    handleEnterKeyPress();
});