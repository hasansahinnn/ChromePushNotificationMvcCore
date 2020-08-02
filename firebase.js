// Your web app's Firebase configuration77
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

// Initialize Firebase
var defaultProject = firebase.initializeApp(firebaseConfig);
firebase.analytics();
var messaging = firebase.messaging();


// !!! leave firebase and message js  on wwwroot

var _token;
messaging.requestPermission()
    .then(function() {
        return messaging.getToken();
    })
    .then(function (token) {
        _token = token;
        $.ajax({
            url: '/Saglikcim/setNotifyToken',
            data: { token: token},
            type: 'post',
            dataType: 'json',
            success: function (data) {
                console.log("Success");
            }
        });
		console.log(token);
    })
	.catch(function(err) {  
		console.log('Unable to get permission to notify.', err);
	});

// front-side site aktif olduğunda
messaging.onMessage(function(payload) {
    var notification = new Notification(payload.data.title, {
        body: payload.data.body,
        icon: payload.data.icon,
        click_action:payload.data.click_action
    });
});


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}


// notification.onclick = function() {
//     window.open(payload.data.url);
// };