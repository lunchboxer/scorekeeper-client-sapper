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
  return groups.find(group => group._id === session.studentGroupId)
})

store.compute('currentSemester', ['semesters'], (semesters) => {
  if (!semesters || !semesters.length) return null
  const now = new Date()
  return semesters.find(semester => {
    const startDate = new Date(semester.startDate)
    const endDate = new Date(semester.startDate)
    return (startDate < now && now < endDate)
  })
})

store.compute('nextSemester', ['semesters'], (semesters) => {
  if (!semesters || !semesters.length) return null
  const now = new Date()
  return semesters.find(semester => {
    const startDate = new Date(semester.startDate)
    return startDate > now
  })
})

export default store
