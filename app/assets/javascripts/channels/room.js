// App.room = App.cable.subscriptions.create("RoomChannel", {
//   connected: function() {},
//   disconnected: function() {},
//   received: function(data) {
//   alert(data['message']);
//   return $('#messages').append(data['message']);
//   },
//   speak: function(message) {
//     return this.perform('speak', {
//       message: message
//     });
//   }
// }
//
// // document.on('keypress', '[data-behavior~=room_speaker]', function(event) {
// //   if (event.keyCode === 13) {
// //     App.room.speak(event.target.value);
// //     event.target.value = '';
// //     return event.preventDefault();
// //   }
// // });
//
//
// // App.room = App.cable.subscriptions.create("RoomChannel", {
// //   connected: function() {
// //   },
// //
// //   disconnected: function() {
// //   },
// //
// //   received: function(post) {
// //     const posts = document.getElementById('posts')
// //     posts.insertAdjacentHTML('afterbegin', post);
// //     // posts.innerHTML += post
// //
// //   },
// //
// //   speak: function(content, music_id) {
// //     return this.perform('speak', {content: content, music_id: music_id});
// //   }
// // });
// //
// // document.addEventListener('turbolinks:load', function(){
// //   const input = document.getElementById('chat-input');
// //   const button = document.getElementById('chat-button');
// //   button.addEventListener('click', function(e){
// //     e.preventDefault();
// //     const content = input.value;
// //     const music = document.getElementById('music-id')
// //     const music_id = music.textContent;
// //     App.room.speak(content, music_id);
// //     input.value = '';
// //   })
// // });
