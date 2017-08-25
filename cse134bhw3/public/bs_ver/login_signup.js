(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCan5sw0l48qC_VBhdpdz7vN_hVv3LYo8g",
    authDomain: "checkmyclass-22c54.firebaseapp.com",
    databaseURL: "https://checkmyclass-22c54.firebaseio.com",
    storageBucket: "checkmyclass-22c54.appspot.com",
    messagingSenderId: "754689393631"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('inputEmail');
  const txtPassword = document.getElementById('inputPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');

  btnLogin.addEventListener('click', e => { 
    //Get Email and Password
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    //Sign In
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch(e => console.log(e.message));
  });

}());