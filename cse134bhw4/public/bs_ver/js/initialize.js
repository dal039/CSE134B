
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCan5sw0l48qC_VBhdpdz7vN_hVv3LYo8g",
  authDomain: "checkmyclass-22c54.firebaseapp.com",
  databaseURL: "https://checkmyclass-22c54.firebaseio.com",
  storageBucket: "checkmyclass-22c54.appspot.com",
  messagingSenderId: "754689393631"
};

// Initialize Firebase App
var app = firebase.initializeApp(config);

// Get a reference to the database service
var database = app.database();