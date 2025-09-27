const socket = io()

socket.on('welcomeUser', () => {
    console.log("Welcome to the chat app");
})

document.querySelector('#messageForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const message = document.querySelector('message').value

    socket.emit('sendMessage', message)
})