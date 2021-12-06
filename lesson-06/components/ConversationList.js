import { auth, conversationRef, query, where, onSnapshot} from '../constants/index.js'

import ConversationItem from './ConversationItem.js'
import Modal from './Modal.js'

export default class ConversationList {
  $conversationItem;
  $newConversationButton;
  $createConversationModal;
  $conversationListContainer;
  $conversationListContent;

  _conversationList = [];

  constructor(event) {
    this.$conversationListContainer = document.createElement('div')
    this.$conversationListContainer.setAttribute(
      'class',
      'w-1/4 border lg:flex flex-2 flex-col px-6 pt-2 h-full'
    );

    this.$conversationListContent = document.createElement('div')
    this.$conversationListContent.setAttribute('class', 'flex-1 h-full overflow-auto px-2 pt-2')

    this.$createConversationModal = new Modal();

    this.$newConversationButton = document.createElement('button')
    this.$newConversationButton.textContent = 'New conversation'
    this.$newConversationButton.setAttribute(
      'class',
      'text-white bg-indigo-500 py-2 px-4 font-semibold rounded-full mb-4 mx-5'
    );
    this.$newConversationButton.addEventListener('click', () => {
      this.$createConversationModal.openModal()
    })

    this.getConversations(event)
  }

  async getConversations(event) {
    const q = query(conversationRef, where('users', 'array-contains', auth.currentUser.email))

    onSnapshot(q, snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          const data = change.doc.data()
          const conversationItem = new ConversationItem(data, event)
          conversationItem.render(this.$conversationListContent)
        }
      })
    })
  }

  render(mainContainer) {
    this.$conversationListContainer.appendChild(this.$newConversationButton)
    this.$createConversationModal.render(this.$conversationListContainer)
    this.$conversationListContainer.appendChild(this.$conversationListContent)

    mainContainer.appendChild(this.$conversationListContainer)
  }
}