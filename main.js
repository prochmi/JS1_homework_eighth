const obr = document.querySelector(".auto")

const pressButton = (event) => {
    if (event.key === "ArrowRight") {
        obr.classList.add("auto")
    } else if (event.key === "ArrowLeft") {
        obr.classList.remove("auto")
    }
}
document.addEventListener("keydown", pressButton)



const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

const handleSubmit = (event) => {
    event.preventDefault()

    const email = document.querySelector('.email-input')
    const password = document.querySelector('.password-input')
    const container = document.querySelector('.container')
    const status = document.querySelector('.status')

    if(email.value === user.email && password.value === user.password) {
        container.innerHTML = `<h1>Přihlášený uživatel: ${user.name}</h1>`
    } else {
        status.textContent = 'Neplatné přihlašovací údaje'
        password.value = ''
    }
}

document.querySelector(".formular").addEventListener("submit", handleSubmit)



const formalar = document.querySelector('.form')
const input = document.querySelector('.input')

const odebirat = (event) => {
    event.preventDefault()

    const input = document.querySelector('.input')
	const email = input.value
	formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}

const kontrolaPolicka = (event) => {
	if (input.value === '' || !input.value.includes('@')) {
		input.classList.add('alert')
	} else {
		input.classList.remove('alert')
	}
}
