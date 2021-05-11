import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    csrftoken: null,
    roomName: '',
    rooms: [],
    room: null,
    messages: [],
    username: 'wand',
    message: {
      "id": '',
      "username": '',
      "message": '',
      "sent": '',
    },
  },
  mutations: {
    setRoomName(state, payload){
      state.roomName = payload
    },
    setRooms(state, payload){
      state.rooms = payload
    },
    connectRoom(state, payload){
      state.room = payload
    },
    loadMessages(state, payload){
      state.messages.push(JSON.parse(payload))
    },
    sendMessage(state, payload){
      state.room.send(JSON.stringify(payload))
    },
    closeSocket(state){
      state.room.close()
      state.room = null
      state.messages = []
    },
    setCsrftoken(state, payload){
      state.csrftoken = payload
    }
  },
  getters: {
    roomNames(state){
      return state.rooms.filter(room => room.name)
    },
    getMessages(state){
      return state.messages
    }
  },
  actions: {
    fetchRooms (context) {
      axios.get('/api/v1/room/rooms')
      .then(resp=>{context.commit('setRooms', resp.data)})
      .catch(error=>console.log(error))
    },
    connectToRoom (context, payload){
      let room = null
      if (context.state.room !== null ){
        context.commit('closeSocket')
      }
      room = new WebSocket("ws://localhost:8000/ws/chat/"+payload+"/")
      context.commit('connectRoom', room)
      room.onmessage = (event) => {
        context.commit('loadMessages', event.data)
      }
    //TODO: change localhost to be an env var with the django backend address
      //change room.onmessage to be async
    },
    createRoom(context, payload){
      const headers = {"X-CSRFTOKEN": context.state.csrftoken}
      axios.post('/api/v1/room/rooms', payload, {headers: headers})
        .then(()=>context.dispatch('fetchRooms'))
    }
  },
  modules: {
  }
})
