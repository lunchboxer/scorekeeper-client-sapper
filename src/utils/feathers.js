import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import rx from 'feathers-reactive'

const socket = io('http://192.168.1.9:3050')
const client = feathers()

client.configure(socketio(socket))
client.configure(rx({ idField: '_id' }))
if (typeof window !== 'undefined') { // for ssr to not freak out
  client.configure(auth({ storage: window.localStorage }))
} else {
  client.configure(auth())
}

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  window.client = client
}
export default client
