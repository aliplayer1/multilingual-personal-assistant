document.getElementById('send-button').addEventListener('click', sendMessage);

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    addMessage('You', userInput);
    document.getElementById('user-input').value = '';

    const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    addMessage('Assistant', data.response);
}

function addMessage(sender, message) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message';

    const senderElement = document.createElement('strong');
    senderElement.textContent = `${sender}: `;
    messageContainer.appendChild(senderElement);

    const messageElement = document.createElement('span');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);

    document.getElementById('messages').appendChild(messageContainer);
}
