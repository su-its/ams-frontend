function main(divElem, listElem) {
  const socket = new WebSocket('ws://localhost:3001')

  socket.addEventListener('open', () => {
    console.log('Connection established')
  })

  socket.addEventListener('message', e => {
    try {
      console.log('Message from server')
      const data = JSON.parse(e.data)
      const list = createUserList(data)
      divElem.innerText = `${data.length}人`
      listElem.innerHTML = '' // 以前の値をクリア
      listElem.appendChild(list)
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

window.onload = () => {
  const userCount = document.getElementById('user-count')
  const userList = document.getElementById('user-list')
  main(userCount, userList)
}

function createUserList(obj) {
  const ul = document.createElement('ul')
  // Arrayじゃなかったら変な値を出す
  if(!Array.isArray(obj)) {
    ul.innerHTML = '<li>0</li>'
    return ul
  }

  obj.forEach(user => {
    ul.innerHTML += `<li>${user.user_id}</li>`
  })
  return ul
}