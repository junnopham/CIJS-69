import {
	getAuth
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js'

import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js'

import Input from './Input.js'

const auth = getAuth()
const db = getFirestore()
const conversationRef = collection(db, 'conversations')

export default class CreateNewConversationModal {
	$modalContainer;
	$email;
	$name;
	_visible = false;

	constructor() {
		this.$modalContainer = document.createElement('div');
		this.$modalContainer.setAttribute(
			'class',
			'min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover invisible'
		);

		const container = document.createElement('form')
		container.setAttribute('class', 'w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white')
		container.addEventListener('submit', this.submitHandle)

		const title = document.createElement('h3')
		title.setAttribute('class', 'text-center text-xl font-semibold')
		title.textContent = 'New conversation'

		this.$name = new Input('name', 'Name', 'text', 'Name')
		this.$email = new Input('email', 'Email', 'email', 'Email')

		const content = document.createElement('div')
		content.appendChild(title)
		content.appendChild(this.$name.render())
		content.appendChild(this.$email.render())

		const submitBtn = document.createElement('button')
		submitBtn.setAttribute('class', 'mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600')
		submitBtn.type = 'submit'
		submitBtn.textContent = 'Submit'

		const cancelBtn = document.createElement('button')
		cancelBtn.setAttribute('class', 'mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100')
		cancelBtn.textContent = 'Cancel'
		cancelBtn.type = 'button'
		cancelBtn.addEventListener('click', this.hideModal)

		const button = document.createElement('div')
		button.setAttribute('class', 'p-3 mt-2 text-center space-x-4 md:block')
		button.appendChild(submitBtn)
		button.appendChild(cancelBtn)

		container.appendChild(content)
		container.appendChild(button)

		this.$modalContainer.appendChild(container)
	}

	submitHandle = (e) => {
		e.preventDefault()
		const newConversation = {
			name: this.$name.getInputValue(),
			creator: auth.currentUser.uid,
			users: [auth.currentUser.email, this.$email.getInputValue()]
		}
		console.log(newConversation)
		addDoc(conversationRef, newConversation)
		this.hideModal()
		this.clear()
	}

	clear = () => {
		this.$name.clearValue()
		this.$email.clearValue()
	}

	openModal = () => {
		this.clear()
		this.$modalContainer.classList.remove('invisible')
		this.$modalContainer.classList.add('visible')
	}

	hideModal = () => {
		this.$modalContainer.classList.remove('visible')
		this.$modalContainer.classList.add('invisible')
		this.clear()
	}

	render(conversationListContainer) {
		conversationListContainer.appendChild(this.$modalContainer);
	}
}