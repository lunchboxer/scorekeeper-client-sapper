import store from '../utils/store.js'

const generateKey = () => {
  // timestamp with 4 random characters on the end
  const now = new Date()
  const randomCode = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  return now.toISOString() + randomCode
}
export const addMessage = newMessage => {
  const { notifications } = store.get()
  const newNotifications = { ...notifications, [generateKey()]: newMessage }
  store.set({ notifications: newNotifications })
}

export const removeMessage = id => {
  const { notifications } = store.get()
  const { [id]: value, ...withoutThisOne } = notifications
  store.set({ notifications: withoutThisOne })
}
