const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')
const DEFAULT_PLACEHOLDER = 'Anonymous'
input.addEventListener('input', (event) => { 
    // console.log(event.target.value)
    const value = event.target.value
    if (value) {
        span.innerHTML = value
    } else { 
        span.innerHTML = DEFAULT_PLACEHOLDER
    }
})
