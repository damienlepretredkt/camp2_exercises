import store from './store'

const websocket = new WebSocket(`ws://${window.location.hostname}:8080`);

websocket.addEventListener("message", event => {
  const message = JSON.parse(event.data);
  console.log("Message from server ", message);
  switch (message.type) {
    case "CONNECTION_START":
    default:
      return;
    case "MESSAGES":
      store.dispatch({type: "INCOMINGMESSAGES", messages: message.data})
      return;
  }
});

function sendLogin(username) {
  websocket.send(
    JSON.stringify({
      type: "LOGIN",
      userName: username
    })
  );
}

function sendMessage(username, channel, message) {
  websocket.send(
    JSON.stringify({
      type: "NEW_MESSAGE",
      userName: username,
      channel: channel,
      message: message
    })
  );
}


export default sendLogin;

export {sendMessage};
