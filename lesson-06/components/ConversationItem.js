import conversationContent from './ConversationContent.js'

export default class ConversationItem {
  $name;
  $avatar;
  $infoConversation;

  _conversation;
  _active = null;

    constructor(conversation) {
      this._conversation = conversation
      this.$infoConversation = document.createElement('div')
      this.$infoConversation.setAttribute('class', 'conversation entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md hover:bg-indigo-200')

      this.$infoConversation.addEventListener('click', this.onClick)

      this.$name = document.createElement('span')
      this.$name.setAttribute('class', 'font-semibold text-gray-800')
      this.$name.textContent = conversation.name

      this.$avatar = document.createElement('img')
      this.$avatar.setAttribute('class', 'h-12 w-12 rounded-full')
      this.$avatar.src = 'https://ui-avatars.com/api/?name=PH&background=0D8ABC&color=fff'
    }

    onClick = (event) => {
      conversationContent.setConversation(this._conversation)
      const items = document.querySelectorAll('.conversation')
      items.forEach(item => item.classList.remove('bg-indigo-200'))
      event.currentTarget.classList.add('bg-indigo-200')
    }

    setActivate() {
      this.$infoConversation.classList.add('bg-indigo-200')
    }

    setDeactivate() {
      this.$infoConversation.classList.remove('bg-indigo-200')
    }
  
    render(conversationsContainer) {
      const container = document.createElement('div')
      container.setAttribute('class', 'flex-1 px-2')

      const info = document.createElement('div')
      info.setAttribute('class', 'flex items-bottom justify-between')    

      const time = document.createElement('p')
      time.setAttribute('class', 'text-xs text-gray-500')
      time.textContent = '12:45 pm'

      const message = document.createElement('p')
      message.setAttribute('class', 'text-gray-600 mt-1 text-sm')
      message.textContent = 'Tin nhắn'

      info.appendChild(this.$name)
      info.appendChild(time)

      container.appendChild(info)
      container.appendChild(message)

      this.$infoConversation.appendChild(this.$avatar)
      this.$infoConversation.appendChild(container)

      conversationsContainer.appendChild(this.$infoConversation)
    }
  }