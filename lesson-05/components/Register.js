import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js'


import Input from './Input.js'
import Login from './Login.js'
import app from '../app.js'

const auth = getAuth();

class Register {
	$title;
	$fullName;
	$username;
	$email;
	$password;
	$confirm_password;
	$term;
	$confirm;
	$form;
	$login;
	constructor() {
		this.$form = document.createElement('form')
		this.$form.classList.add('mx-auto', 'w-5/6', 'lg:w-1/2', 'bg-white', 'shadow-md', 'rounded-lg', 'border-2', 'px-6', 'py-8')
		this.$form.addEventListener('submit', this.onSubmit)

		this.$title = document.createElement('h1')
		this.$title.textContent = 'Sign Up'
		this.$title.classList.add('text-center', 'text-2xl', 'font-bold', 'uppercase', 'mb-5')

		this.$fullName = new Input('full_name', 'Full Name', 'text', 'Full Name')
		this.$email = new Input('email', 'Email', 'email', 'Email')
		this.$password = new Input('password', 'Password', 'password', 'Password')
		this.$confirm_password = new Input('confirm_password', 'Confirm Password', 'password', 'Repeat Password')

		this.$confirm = document.createElement('button')
		this.$confirm.type = 'submit'
		this.$confirm.classList.add('w-full', 'text-center', 'py-3', 'rounded', 'bg-indigo-600', 'text-white', 'my-1')
		this.$confirm.textContent = 'Sign Up'

		this.$term = document.createElement('div')
		this.$term.classList.add('text-center', 'text-sm', 'text-gray-500', 'mt-2')
		this.$term.textContent = 'By signing up, you agree to the Terms of Service. If you have account, '

		this.$login = document.createElement('a')
		this.$login.setAttribute('class', 'text-blue-600 uppercase italic font-medium cursor-pointer')
		this.$login.textContent = 'login here'
		this.$login.addEventListener('click', () => {
			app.setActiveScreen(new Login())
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		const validated = this.validation()

		if (validated !== null) {
			createUserWithEmailAndPassword(auth, validated.email, validated.password)
				.then((user) => {
					console.log(user.user);
					updateProfile(auth.currentUser, {
						displayName: validated.displayName,
					});
					sendEmailVerification(auth.currentUser);
				})
				.catch((error) => {
					console.log(error);
					alert(error.message);
				});
		}
	}

	validation() {
		const displayName = this.$fullName.getInputValue();
		const email = this.$email.getInputValue();
		const password = this.$password.getInputValue();
		const confirmPassword = this.$confirm_password.getInputValue();

		let flag = true;

		if (displayName.trim().length === 0) {
			this.$fullName.setError('Full name can not empty')
			flag = false
		} else {
			this.$fullName.setError('')
		}

		if (email.trim().length === 0) {
			this.$email.setError('Email can not empty')
			flag = false;
		} else {
			this.$email.setError('');
		}

		if (password.trim().length === 0) {
			this.$password.setError('Password can not empty')
			flag = false
		} else {
			this.$password.setError('')
		}

		if (confirmPassword.trim().length === 0) {
			this.$confirm_password.setError('Confirm password can not empty')
			flag = false;
		} else {
			this.$confirm_password.setError('')
		}

		if (password !== confirmPassword) {
			this.$confirm_password.setError('Password does not match')
			flag = false;
			this.$password.setError('')
		}

		if (flag === true) {
			return {
				displayName: displayName,
				email: email,
				password: password,
				confirmPassword: confirmPassword,
			};
		}
		return null;
	}

	render(container) {
		this.$term.appendChild(this.$login)

		this.$form.appendChild(this.$title)
		this.$form.appendChild(this.$fullName.render())
		this.$form.appendChild(this.$email.render())
		this.$form.appendChild(this.$password.render())
		this.$form.appendChild(this.$confirm_password.render())
		this.$form.appendChild(this.$confirm)
		this.$form.appendChild(this.$term)

		container.appendChild(this.$form)
	}
}

export default Register