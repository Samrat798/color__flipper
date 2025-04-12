const colors = [
  'Blue ',
  'Green',
  'Red',
  'Orange',
  'Violet',
  'Indigo',
  'Yellow ',
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#4D8000',
  '#B33300',
  '#CC80CC',
  '#66664D',
  '#991AFF',
  '#E666FF',
  '#4DB3FF',
  '#1AB399',
  '#E666B3',
  '#33991A',
  '#CC9999',
  '#B3B31A',
  '#00E680',
  '#4D8066',
  '#809980',
  '#E6FF80',
  '#1AFF33',
  '#999933',
  '#FF3380',
  '#CCCC00',
  '#66E64D',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',
  '#99E6E6',
  '#6666FF',
  'rgb(120, 28, 129)',
  'rgb(72, 139, 194)',
  'rgb(107, 178, 140)',
  'rgb(159, 190, 87)',
  'rgb(210, 179, 63)',
  'rgb(231, 126, 49)',
  'rgb(217, 33, 32)',
];

const btn = document.querySelector('.btn');
const displayColor = document.querySelector('.color-code');

function randomGenerator() {
  return Math.floor(Math.random() * colors.length);
}

function showColor() {
  let color = colors[randomGenerator()];
  displayColor.textContent = color;
  document.body.style.backgroundColor = color;
}

btn.addEventListener('click', showColor);
