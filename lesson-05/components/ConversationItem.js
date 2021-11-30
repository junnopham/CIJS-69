export default class ConversationItem {
    constructor() {}
  
    render(conversationsContainer) {
      const conversation = document.createElement('div')
      conversation.setAttribute('class', 'px-3 flex items-center bg-indigo-200 cursor-pointer')

      const avatar = document.createElement('img')
      avatar.setAttribute('class', 'h-12 w-12 rounded-full')
      avatar.src = 'https://ui-avatars.com/api/?background=random'

      const container = document.createElement('div')
      container.setAttribute('class', 'ml-4 flex-1 py-4')

      const info = document.createElement('div')
      info.setAttribute('class', 'flex items-bottom justify-between')

      const name = document.createElement('p')
      name.setAttribute('class', 'font-semibold')
      name.textContent = 'Phạm Đình Sơn'

      const time = document.createElement('p')
      time.setAttribute('class', 'text-xs text-grey-darkest')
      time.textContent = '12:45 pm'

      const message = document.createElement('p')
      message.setAttribute('class', 'text-grey-dark mt-1 text-sm')
      message.textContent = 'Tin nhắn'

      info.appendChild(name)
      info.appendChild(time)

      container.appendChild(info)
      container.appendChild(message)

      conversation.appendChild(avatar)
      conversation.appendChild(container)

      conversationsContainer.appendChild(conversation)
    }
  }