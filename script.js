const emailInput = document.querySelector('.input-email')
const form = document.getElementById('form')
const errorMessage = document.querySelector('.input-error')

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {
    if(emailInput.value === ''){
        e.preventDefault()
        errorMessage.classList.remove('hidden')
    }else if(!validateEmail(emailInput.value)){
        e.preventDefault()
        errorMessage.classList.remove('hidden')
    }
})