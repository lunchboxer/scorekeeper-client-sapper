import { Store } from 'svelte/store.js'
import { APPNAME } from './constants.js'

const store = new Store({
  APPNAME,
  notifications: {},
  user: null,
  login: null,
  groups: [],
  session: {},
  attendances: [],
  activeStudents: []
})

store.compute('activeGroup', ['session', 'groups'], (session, groups) => {
  return groups.find(group => group.id === session.studentGroupId)
})

export default store
