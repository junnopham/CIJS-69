import ConversationList from './ConversationList.js'
import conversationContent from './ConversationContent.js'

export default class Main {
	$conversationList;
	$conversationContainer;
	$conversationContent;

	_active;
	_listConversation;

	constructor() {
		this.$conversationContainer = document.createElement('div')
		this.$conversationContainer.setAttribute('class', 'w-3/4 flex-1 flex flex-col h-full')

		this.$conversationList = new ConversationList(this.setConversation)

		this.$conversationContainer.appendChild(conversationContent.render())
	}

	setConversation = (e) => {
		if (this.$conversationContent !== undefined)
			this.$conversationContainer.innerHTML = ''
		this.$conversationContent = new ConversationContent('a')
		this.$conversationContent.render(this.$conversationContainer)
	}

	render(container) {
		const mainContainer = document.createElement('div')
		mainContainer.setAttribute('class', 'mx-auto h-screen flex')

		// const content = document.createElement('div')
		// content.setAttribute('class', 'w-full h-full px-24 bg-white')
		// content.textContent = 'Content'

		this.$conversationList.render(mainContainer)
		mainContainer.appendChild(this.$conversationContainer)

		// mainContainer.appendChild(content)

		container.appendChild(mainContainer)
	}
}