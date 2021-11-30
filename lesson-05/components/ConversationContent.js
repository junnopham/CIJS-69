import MessageItem from './MessageItem.js'

export default class ConversationContent {
	$title;
	$content;

	constructor() {
		this.$content = new MessageItem()

		this.$title = document.createElement('div')
		this.$title.setAttribute('class', 'py-2 px-3 bg-indigo-500 flex flex-row justify-between items-center')

		const div = document.createElement('div')
		div.setAttribute('class', 'flex items-center')

		const avatar = document.createElement('img')
		avatar.setAttribute('class', 'h-10 w-10 rounded-full')
		avatar.src = 'https://ui-avatars.com/api/?background=random'

		const name = document.createElement('p')
		name.setAttribute('class', 'text-white font-semibold ml-4')
		name.textContent = 'Phạm Đình Sơn'

		div.appendChild(avatar)
		div.appendChild(name)

		this.$title.appendChild(div)
	}

	render(mainContainer) {
		const conversationContentContainer = document.createElement('div')
		conversationContentContainer.setAttribute(
			'class',
			'w-3/4 border flex flex-col'
		);

		conversationContentContainer.appendChild(this.$title)
		this.$content.render(conversationContentContainer)
	
		const replyElement = document.createElement('div')
		replyElement.setAttribute('class', 'bg-grey-lighter px-4 py-4 flex items-center')

		const reply = document.createElement('input')
		reply.setAttribute('class', 'w-full border rounded px-2 py-2')
		reply.type = 'text'
		reply.placeholder = 'Enter your message...'

		replyElement.appendChild(reply)
		conversationContentContainer.appendChild(replyElement)

		mainContainer.appendChild(conversationContentContainer)
	}
}