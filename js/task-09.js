const body = document.querySelector('body')
const button = document.querySelector('.change-color')
const div = document.querySelector('.widget')
const span = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnClick() {
  const color = getRandomHexColor()
  body.style.backgroundColor = color
  span.textContent = color
}
button.addEventListener('click', onBtnClick)