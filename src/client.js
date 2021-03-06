import * as sapper from '../__sapper__/client.js'
import store from './utils/store.js'

sapper.start({
  target: document.querySelector('#sapper'),
  store: () => store
})

if (process.env.NODE_ENV === 'development') {
  window.store = store
}
