import consumer from "channels/consumer"

const roomId = document.querySelector("#room").getAttribute("data-room-id")

consumer.subscriptions.create({ channel: "RoomChannel", room_id: roomId }, {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to channel room " + roomId)
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data)
  }
});
