App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    console.log("success to connect!")
  },
  disconnected: function() {
  },

  received: function(data) {
  alert(data['message']);
  return $('#messages').append(data['message']);
  },

  speak: function(message) {
    return this.perform('speak', {message: message});
  }
})
