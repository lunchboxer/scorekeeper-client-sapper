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
  recentPoint: null,
  authStatus: null,
  viewer: null,
  semesters: []
})

store.compute('activeGroup', ['session', 'groups'], (session, groups) => {
  return groups.find(group => group.id === session.studentGroupId)
})
store.compute('currentSemester', ['semesters'], (semesters) => {
  if (!semesters || !semesters.length) return null
  const now = new Date()
  return semesters.filter(semester => {
    const startDate = new Date(semester.startDate)
    const endDate = new Date(semester.startDate)
    return (startDate < now && now < endDate)
  })
})

export default store
