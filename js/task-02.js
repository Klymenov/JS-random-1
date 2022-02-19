const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients')

ingredients.forEach(ingredient => { 
  const li = document.createElement('li')
  li.setAttribute('class', 'item')
  li.textContent = ingredient
  ul.appendChild(li)
})

