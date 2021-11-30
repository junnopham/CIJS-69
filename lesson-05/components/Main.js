import ConversationList from './ConversationList.js'
import ConversationContent from './ConversationContent.js'

export default class Main {
	$conversationList;
	$conversationContent;

	constructor() {
		this.$conversationList = new ConversationList()
		this.$conversationContent = new ConversationContent()
	}

	render(container) {
		const mainContainer = document.createElement('div')
		mainContainer.setAttribute('class', 'container mx-auto h-screen flex')

		// const content = document.createElement('div')
		// content.setAttribute('class', 'w-full h-full px-24 bg-white')
		// content.textContent = 'Content'

		this.$conversationList.render(mainContainer)
		this.$conversationContent.render(mainContainer)

		// mainContainer.appendChild(content)

		container.appendChild(mainContainer)
	}
}