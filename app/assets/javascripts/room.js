App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    console.log("success to connect!")
  },

  disconnected: function() {
  },

  received: function(post) {
    console.log(post)
  },

  speak: function(text) {
    return this.perform('speak', {message:text});
  }
});
