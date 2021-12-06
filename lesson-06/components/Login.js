import { auth, signInWithEmailAndPassword } from '../constants/index.js'

import Input from './Input.js'
import Register from './Register.js'
import Main from './Main.js'
import app from '../app.js'

class Login {
	$email;
	$password;
	$confirm;
	$registerEl;
	$form;
	constructor() {
		this.$form = document.createElement('form')
		this.$form.classList.add('mx-auto', 'w-5/6', 'lg:w-1/2', 'bg-white', 'shadow-md', 'rounded-lg', 'border-2', 'px-6', 'py-8')
		this.$form.addEventListener('submit', this.onSubmit)

		this.$title = document.createElement('h1')
		this.$title.textContent = 'Login'
		this.$title.classList.add('text-center', 'text-2xl', 'font-bold', 'uppercase', 'mb-5')

		this.$email = new Input('email', 'Email', 'email', 'Email')
		this.$password = new Input('password', 'Password', 'password', 'Password')

		this.$confirm = document.createElement('button')
		this.$confirm.classList.add('w-full', 'text-center', 'py-3', 'rounded', 'bg-indigo-600', 'text-white', 'my-1')
		this.$confirm.textContent = 'Login'

		this.$registerEl = document.createElement('p')
		this.$registerEl.classList.add('text-center', 'text-sm', 'text-gray-500', 'mt-2')
		this.$registerEl.textContent = 'Don\'t have a account? '

		const register = document.createElement('a')
		register.textContent = 'Register here!'
		register.setAttribute('class', 'text-blue-600 uppercase italic font-medium cursor-pointer')
		register.addEventListener('click', () => {
			app.setActiveScreen(new Register())
		})

		this.$registerEl.appendChild(register)
	}

	onSubmit = (e) => {
		e.preventDefault()

		const email = this.$email.getInputValue()
		const password = this.$password.getInputValue()

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user)
				app.setActiveScreen(new Main())
			})
			.catch((error) => {
				console.log('Code:', error.code)
				console.log('Message:', error.message)
			});
	}

	render(container) {
		this.$form.appendChild(this.$title)
		this.$form.appendChild(this.$email.render())
		this.$form.appendChild(this.$password.render())
		this.$form.appendChild(this.$confirm)
		this.$form.appendChild(this.$registerEl)

		container.appendChild(this.$form)
	}
}

export default Login