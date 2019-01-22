import * as sapper from '../__sapper__/client.js'
import { APPNAME } from './utils/constants.js'
import { StoreWithNotifications } from './utils/storeWithNotifications.js'

sapper.start({
  target: document.querySelector('#sapper'),
  store: data => {
    // `data` is whatever was in the server-side store
    const store = new StoreWithNotifications({
      ...data,
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
    return store
  }
})
