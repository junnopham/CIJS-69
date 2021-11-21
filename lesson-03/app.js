class Input {
	$container;

	constructor(name, type, placeholder, value = '') {
		this.$container = document.createElement('input')
		this.$container.type = type
		this.$container.classList.add('block', 'border', 'border-gray-300', 'w-full', 'p-3', 'rounded', 'mb-4')
		this.$container.name = name
		this.$container.id = name
		this.$container.value = value
		this.$container.placeholder = placeholder
	}

	render() {
			return this.$container
	}
}

class Button {
	$container;

	constructor(name, text, type) {
		this.$container = document.createElement('button')
		this.$container.type = type
		this.$container.classList.add('w-full', 'text-center', 'py-3', 'rounded', 'bg-indigo-600', 'text-white', 'my-1')
		this.$container.name = name
		this.$container.id = name
		this.$container.textContent = text
	}

	render() {
			return this.$container
	}
}

const container = document.createElement('div')
container.classList.add('container', 'mx-auto', 'pt-10')

const form = document.createElement('div')
form.classList.add('mx-auto', 'w-5/6', 'lg:w-1/2', 'bg-white', 'shadow-md', 'rounded-lg', 'border-2', 'px-6', 'py-8')

const title = document.createElement('h1')
title.textContent = 'Sign Up'
title.classList.add('text-center', 'text-2xl', 'font-bold', 'uppercase', 'mb-5')

const full_name = new Input('full_name', 'text', 'Full Name')
const username = new Input('username', 'text', 'Username')
const email = new Input('email', 'email', 'Email')
const password = new Input('password', 'password', 'Password')
const confirm_password = new Input('confirm_password', 'password', 'Repeat Password')
const confirm = new Button('submit', 'Sign Up', 'submit')

const term = document.createElement('div')
term.classList.add('text-center', 'text-sm', 'text-gray-500', 'mt-2')
term.textContent = 'By signing up, you agree to the Terms of Service'

form.appendChild(title)
form.appendChild(full_name.render())
form.appendChild(username.render())
form.appendChild(email.render())
form.appendChild(password.render())
form.appendChild(confirm_password.render())
form.appendChild(confirm.render())
form.appendChild(term)

container.appendChild(form)

document.body.style.backgroundImage = 'url("https://www.foootage.com/system/images/files/000/000/064/original/clouds-cloudy-cold-daylight-fog.jpg?1511042126")'
document.body.style.backgroundSize = 'cover'
document.getElementById('root').appendChild(container)