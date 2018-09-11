import { Store } from 'svelte/store.js'
import { APPNAME } from './constants.js'

const store = new Store({
  APPNAME,
  notifications: {},
  user: null,
  login: null,
  groups: []
})

export default store
