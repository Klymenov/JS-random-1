const increment = document.querySelector('[data-action="increment"]')
const decrement = document.querySelector('[data-action="decrement"]')
const value = document.querySelector('#value')

let counter = 0

increment.addEventListener('click', () => { 
    counter++
   value.innerHTML = counter
})

decrement.addEventListener('click', () => { 
    counter--
   value.innerHTML = counter
})