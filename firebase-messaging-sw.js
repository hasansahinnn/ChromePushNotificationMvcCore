importScripts("https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js");
// console.firebase.google.com get a new Register on Firebase

  var firebaseConfig = {
    apiKey: "xxx",
    authDomain: "xxx-bd3ec.firebaseapp.com",
    databaseURL: "https://xxx-bd3ec.firebaseio.com",
    projectId: "xxx-bd3ec",
    storageBucket: "xxx-bd3ec.appspot.com",
    messagingSenderId: "1111",
    appId: "1:11111:web:d5bdb68c2104670f1e6c2e",
    measurementId: "G-9WYCQ6W7N7"
  };

var defaultProject = firebase.initializeApp(firebaseConfig);

var messaging = firebase.messaging();

// Burası arkaplanda çalışan kısım aynı kodlar iki tarafta da var burayla bağımsız diğeri onmessage da  bak aynısı içerik
messaging.setBackgroundMessageHandler(function(payload){
   var notificationTitle = payload.data.title;
   var notificationOptions = {
       body: payload.data.body,
       icon: payload.data.icon,
       click_action:payload.data.click_action
   };
   return self.registration.showNotification(notificationTitle,notificationOptions);
});