import ConversationItem from './ConversationItem.js'
import Modal from './Modal.js'

export default class ConversationList {
  $conversationItem;
  $newConversationButton;
  $createConversationModal;

  constructor() {
    this.$conversationItem = new ConversationItem();
    this.$createConversationModal = new Modal();

    this.$newConversationButton = document.createElement('button')
    this.$newConversationButton.textContent = 'New conversation'
    this.$newConversationButton.setAttribute(
      'class',
      'text-white bg-indigo-500 py-2 px-4 font-semibold rounded-full mb-4 mx-5'
    );
    this.$newConversationButton.addEventListener('click', () => {
      this.$createConversationModal.openModal()
    });
  }

  render(mainContainer) {
    const conversationListContainer = document.createElement('div')
    conversationListContainer.setAttribute(
      'class',
      'w-1/4 border flex flex-col h-full py-4 bg-white'
    );
    conversationListContainer.appendChild(this.$newConversationButton)
    this.$createConversationModal.render(conversationListContainer)

    this.$conversationItem.render(conversationListContainer)
    mainContainer.appendChild(conversationListContainer)
  }
}