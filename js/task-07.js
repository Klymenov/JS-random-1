const inputFontEl = document.querySelector('#font-size-control');
const spanFontEl = document.querySelector('#text');

const onInputChange = function (ev) {
    spanFontEl.style.fontSize = `${ev.currentTarget.value}px`;
};

inputFontEl.addEventListener('input', onInputChange);