import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import { CookieStorage } from 'cookie-storage'
import rx from 'feathers-reactive'

const socket = io('http://192.168.1.9:3030')
const client = feathers()

client.configure(socketio(socket))
client.configure(rx({ idField: 'id' }))
client.configure(auth({ storage: new CookieStorage() }))

export default client
