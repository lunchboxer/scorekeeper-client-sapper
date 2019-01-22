import { Store } from 'svelte/store.js'

const generateKey = () => {
  // timestamp with 4 random characters on the end
  const now = new Date()
  const randomCode = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  return now.toISOString() + randomCode
}

export class StoreWithNotifications extends Store {
  addMessage(newMessage) {
    const { notifications } = this.get()
    const newNotifications = { ...notifications, [generateKey()]: newMessage }
    this.set({ notifications: newNotifications })
  }
  removeMessage(id) {
    const { notifications } = this.get()
    const { [id]: value, ...withoutThisOne } = notifications
    this.set({ notifications: withoutThisOne })
  }
}
