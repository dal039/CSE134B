
$(document).ready(function(){
	authenticate();
	emailLogInAuth();
	emailSignUpAuth();
	logOut();
	/*checkAuthStateChange();*/
});

function logOut () {
	$('#logout-btn').click(function(){
		firebase.auth().signOut().then(function(){
			/*indow.location = '../views/index.html'*/
		}, function(error) {
			console.log(error);
		})
	});
};

function checkAuthStateChange () {
	var user = firebase.auth().currentUser;
	console.log(user);
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			window.location = '../views/class_finder.html';
		} else {
			window.location = '../views/index.html';
		}
	});
};

function emailLogInAuth () {
	$('.btn-login').click(function(e){
	  e.preventDefault();
	  console.log('sign in works');
	
		var email = $('#inputEmail').val();
		var password = $('#inputPassword').val();

		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			var errorCode = error.code;
		  var errorMessage = error.message;

		  if (errorCode == 'auth/invalid-email') {
		    alert('This email is invalid.');
		  } else if (errorCode == 'auth/user-disabled') {
		    alert('This user is disabled.');
		  } else if (errorCode == 'auth/user-not-found') {
		  	alert('This user is not found.');
		  } else if (errorCode == 'auth/wrong-password') {
		  	alert('Password is invalid.');
		  }		  

		  console.log(error);
		});

		checkAuthStateChange();
	});
};

function emailSignUpAuth () {
	$('.btn-signup').click(function(e) {
		e.preventDefault();
		console.log('submitted');
		
		var email = $('#inputEmail').val();
		var password = $('#inputPassword').val();
		
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			var errorCode = error.code;
		  var errorMessage = error.message;

		  if (errorCode == 'auth/weak-password') {
		    alert('The password is too weak.');
		  } else if (errorCode == 'auth/email-already-in-use') {
		    alert('The email is already in use.');
		  } else if (errorCode == 'auth/invalid-email') {
		  	alert('The email is invalid');
		  } else if (errorCode == 'auth/operation-not-allowed') {
		  	alert('Sorry, sign up is currently disabled.');
		  }

		  console.log(error);
		});
		
		checkAuthStateChange();
	});
};

function authenticate () {
	// FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: '../views/class_finder.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
  };
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  console.log('boo');
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);

  console.log('booboo');


};