const arr = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

const btn = document.querySelector('.btn');
const displayColor = document.querySelector('.color-code');

function randomGenerator() {
  return Math.floor(Math.random() * arr.length);
}

function colorGenerator() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += arr[randomGenerator()];
  }

  document.body.style.backgroundColor = color;
  displayColor.textContent = color;
}

btn.addEventListener('click', colorGenerator);
