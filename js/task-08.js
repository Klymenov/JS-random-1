const form = document.querySelector(".login-form");
const email = form.elements.email;
const password = form.elements.password;


const onFormSubmit = (event) => {
    event.preventDefault();
    if (email.value.length === 0) {
        alert('Все поля должны быть заполнены.')
    } else if (password.value.length === 0) {
        alert('Все поля должны быть заполнены.')
    }
    else {
        const object = {
            userEmail: event.currentTarget.elements.email.value,
            userPassword: event.currentTarget.elements.password.value,
         }
        console.log(object)
    };
    event.currentTarget.reset();
}
form.addEventListener('submit', onFormSubmit)