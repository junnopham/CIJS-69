export default class MessageItem {
	_messages = [{
			message: 'Hello World',
			reply: true
		},
		{
			message: 'Xin chào',
			reply: true
		},
		{
			message: 'Again?',
			reply: true
		},
		{
			message: 'Hello everyone!',
			reply: true
		},
		{
			message: 'Đây là đài tiếng nói Việt Nam, phát thanh từ thủ đô Hà Nội nước cộng hoà xã hội chủ nghĩa Việt Nam',
			reply: false
		},
		{
			message: 'Hi there!',
			reply: false
		},
	];

	constructor() {

	}

	render(container) {
		const messageContainer = document.createElement('div')
		messageContainer.setAttribute('class', 'flex-1 overflow-auto')

		const messageContent = document.createElement('div')
		messageContent.setAttribute('class', 'py-2 px-3')

		this._messages.map(item => {
			const containerItem = document.createElement('div')
			containerItem.setAttribute('class', 'flex mb-2')

			const content = document.createElement('div')
			content.setAttribute('class', 'rounded py-2 px-3 bg-indigo-200')

			const message = document.createElement('p')
			message.setAttribute('class', 'text-sm mt-1')
			message.textContent = item.message

			if (!item.reply)
				containerItem.classList.add('justify-end')

			content.appendChild(message)
			containerItem.appendChild(content)
			messageContent.appendChild(containerItem)
		})

		messageContainer.appendChild(messageContent)

		container.appendChild(messageContainer)
	}
}