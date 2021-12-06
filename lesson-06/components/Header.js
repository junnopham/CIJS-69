class Header {
	$container;
	$header;
	$nav;
	$logo;
	$login;
	$register;

	constructor() {
		this.$container = document.createElement('header')
		this.$container.setAttribute('class', 'body-font')

		this.$header = document.createElement('div')
		this.$header.setAttribute('class', 'container mx-auto flex flex-wrap p-5 flex-col items-center')

		this.$logo = document.createElement('a')
		this.$logo.setAttribute('class', 'flex title-font font-medium items-center text-gray-900 mb-4')
		this.$logo.textContent = 'App'

		this.$nav = document.createElement('nav')
		this.$nav.setAttribute('class', 'flex flex-wrap items-center text-base justify-center')


		this.$login = document.createElement('a')
		this.$login.textContent = 'Login'

		this.$register = document.createElement('a')
		this.$register.textContent = 'Register'
	}

	render() {
		this.$nav.appendChild(this.$login)
		this.$nav.appendChild(this.$register)
		this.$header.appendChild(this.$logo)
		this.$header.appendChild(this.$nav)
		this.$container.appendChild(this.$header)
		return this.$container
	}
}

export default Header