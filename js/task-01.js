const el = document.querySelector('#categories')

const categLength = el.children.length
console.log('Number of categories:', categLength)

const sects = el.querySelectorAll('.item')

sects.forEach(es => { 
    console.log('Category: ', es.querySelector('h2').textContent)
    console.log('Elements: ', es.querySelector('ul').children.length)
})
