const btn = document.querySelector('.btn');
const displayColor = document.querySelector('.color-code');
const inputColor = document.querySelector('.input-color');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  let color = inputColor.value;
  document.body.style.backgroundColor = color;
  displayColor.textContent = color;
  inputColor.value = '';
  inputColor.focus();
});
