(function() {
  var config = {
    apiKey: "AIzaSyCan5sw0l48qC_VBhdpdz7vN_hVv3LYo8g",
    authDomain: "checkmyclass-22c54.firebaseapp.com",
    databaseURL: "https://checkmyclass-22c54.firebaseio.com",
    storageBucket: "checkmyclass-22c54.appspot.com",
    messagingSenderId: "754689393631"
  };
  firebase.initializeApp(config);

  var test = document.getElementById('test');

  var dbTestObj = firebase.database().ref().child('test');

  dbTestObj.on('value', snap => console.log(snap.val())); 

  var database = firebase.database();
}());