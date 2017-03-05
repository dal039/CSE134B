
checkAuthStateChange();

$(document).ready(function(){
	emailLogInAuth();
	emailSignUpAuth();
});

function checkAuthStateChange () {
	//var user = firebase.auth().currentUser;
	firebase.auth().onAuthStateChanged(function(user) {
		console.log(user);
		if (user) {
			window.location = '../views/class_finder.html';
		} else {
			console.log('User is not logged in.');
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

		  //console.log(error);
		});

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
		
	});
};

