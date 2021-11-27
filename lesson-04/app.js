import Register from './components/Register.js'
import Login from './components/Login.js'

const container = document.createElement('div')
container.classList.add('container', 'mx-auto', 'pt-16')

const login = new Login()
const register = new Register()

const divForm = document.createElement('div')
divForm.id = 'form'


const loginButton = document.createElement('button')
loginButton.setAttribute('class', 'bg-indigo-600 text-white py-2 px-4 rounded mr-2')
loginButton.textContent = 'Login'
loginButton.addEventListener('click', () => {
	divForm.innerHTML = ''
	divForm.appendChild(login.render())
})

const registerButton = document.createElement('button')
registerButton.setAttribute('class', 'bg-indigo-600 text-white py-2 px-4 rounded ml-2')
registerButton.textContent = 'Sign Up'
registerButton.addEventListener('click', () => {
	divForm.innerHTML = ''
	divForm.appendChild(register.render())
})

const header = document.createElement('div')
header.setAttribute('class', 'flex justify-center mb-5')

header.appendChild(loginButton)
header.appendChild(registerButton)

divForm.appendChild(register.render())

container.appendChild(header)
container.appendChild(divForm)

document.getElementById('root').appendChild(container)

document.body.style.backgroundImage = 'url("https://www.foootage.com/system/images/files/000/000/064/original/clouds-cloudy-cold-daylight-fog.jpg?1511042126")'
document.body.style.backgroundSize = 'cover'
