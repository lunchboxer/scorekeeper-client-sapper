import { APPNAME } from './constants.js'
import { StoreWithNotifications } from './storeWithNotifications.js'

const store = new StoreWithNotifications({
  APPNAME,
  notifications: {},
  user: null,
  login: null,
  groups: [],
  session: {},
  attendances: [],
  activeStudents: [],
  recentPoint: null
})

store.compute('activeGroup', ['session', 'groups'], (session, groups) => {
  return groups.find(group => group.id === session.studentGroupId)
})

export default store
