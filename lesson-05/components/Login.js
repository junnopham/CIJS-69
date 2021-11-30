import {
	getAuth,
	signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js'

import Input from './Input.js'

const auth = getAuth()

class Login {
	$email;
	$password;
	$confirm;
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
				alert(`Welcome, ${user.displayName}`)
			})
			.catch((error) => {
				console.log('Code:', error.code)
				console.log('Message:', error.message)
			});
	}

	render() {
		this.$form.appendChild(this.$title)
		this.$form.appendChild(this.$email.render())
		this.$form.appendChild(this.$password.render())
		this.$form.appendChild(this.$confirm)

		return this.$form
	}
}

export default Login