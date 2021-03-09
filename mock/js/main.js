const app = Vue.createApp({
  data() {
    return {
      users: []
    }
  }
})

const vm = app.mount('#vue-container')

window.onload = () => {
  const socket = new WebSocket('ws://localhost:3001')

  socket.addEventListener('open', () => {
    console.log('Connection established')
  })

  socket.addEventListener('message', e => {
    try {
      console.log('Message from server')
      const data = JSON.parse(e.data)
      console.log(data)
      vm.$data.users = data
    } catch (error) {
      console.error(error)
    }
  })

  socket.addEventListener('close', e => {
    console.log('Connection closed', e)
  })

  socket.addEventListener('error', e => {
    console.log('Error occured', e)
  })
}