const input = document.querySelector('#validation-input')
const VALID_INPUT_LENGTH = 6
input.addEventListener('blur', (event) => { 
    const value = event.target.value
    if (value && value.length === VALID_INPUT_LENGTH) {
        input.setAttribute('class', 'valid')
    } else { 
        input.setAttribute('class', 'invalid')
    }
})
