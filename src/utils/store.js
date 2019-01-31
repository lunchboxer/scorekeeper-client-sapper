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
  semesters: [],
  classSessions: []
})

store.compute('activeGroup', ['session', 'groups'], (session, groups) => {
  return groups.find(group => group._id === session.group)
})

store.compute('currentSemester', ['semesters'], (semesters) => {
  if (!semesters || !semesters.length) return null
  const now = new Date()
  return semesters.find(semester => {
    const startDate = new Date(semester.startDate)
    const endDate = new Date(semester.endDate)
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

store.compute('semester',
  ['chosenSemester', 'currentSemester', 'nextSemester', 'semesters'],
  (chosenSemester, currentSemester, nextSemester, semesters) => {
    return chosenSemester || currentSemester || nextSemester || semesters[0]
  })

export default store
