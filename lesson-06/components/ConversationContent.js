import MessageItem from './MessageItem.js'

class ConversationContent {
	$title;
	$name;
	$avatar;
	$content;

	_name = '';

	constructor() {
		this.$content = new MessageItem()

		this.$title = document.createElement('div')
		this.$title.setAttribute('class', 'py-2 px-3 bg-indigo-500 flex flex-row justify-between items-center')

		const div = document.createElement('div')
		div.setAttribute('class', 'flex items-center')

		this.$avatar = document.createElement('img')
		this.$avatar.setAttribute('class', 'h-10 w-10 rounded-full')
		this.$avatar.src = 'https://ui-avatars.com/api/?name=PH&background=0D8ABC&color=fff'

		this.$name = document.createElement('p')
		this.$name.setAttribute('class', 'text-white font-semibold ml-4')
		this.$name.textContent = 'No conversation'

		div.appendChild(this.$avatar)
		div.appendChild(this.$name)

		this.$title.appendChild(div)
	}

	setConversation(data) {
		this.$name.textContent = data.name
	}

	render() {
		const conversationContentContainer = document.createElement('div')
		conversationContentContainer.setAttribute(
			'class',
			'w-full flex-1 overflow-auto'
		);

		conversationContentContainer.appendChild(this.$title)
		// this.$content.render(conversationContentContainer)
	
		// const replyElement = document.createElement('div')
		// replyElement.setAttribute('class', 'bg-grey-lighter px-4 py-4 flex-2')

		// const reply = document.createElement('input')
		// reply.setAttribute('class', 'w-full border rounded px-2 py-2 bottom-0')
		// reply.type = 'text'
		// reply.placeholder = 'Enter your message...'

		// replyElement.appendChild(reply)
		// conversationContentContainer.appendChild(replyElement)

		return conversationContentContainer
	}
}

const conversationContent = new ConversationContent()

export default conversationContent