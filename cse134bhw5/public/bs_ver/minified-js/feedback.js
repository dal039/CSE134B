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


/*var db = app.database();

$(document).ready(function() {


	function writeFeedback() {
	var className = document.getElementById("className").innerHTML
	console.log(className);

	var feedback ={
		name: document.getElementById("usrname").value,
		rating: document.getElementById("rating").value,
		feedback: document.getElementById("comments").value
	}

	console.log(feedback);

	firebase.database().ref(className).set({
		feedback: feedback
	});
}


$("#submit-feedback").click(writeFeedback);

});
*/


checkAuthStateChange();

$(document).ready(function(){
	logOut();
});

function logOut () {
	$('#logout-btn').click(function(e){
		e.preventDefault();
		firebase.auth().signOut().then(function(user){
			//checkAuthStateChange();
			console.log(user);
			console.log("foobar");
			//window.location = '../views/index.html';
		}, function(error) {
			console.log(error);
		})
	});
};

function checkAuthStateChange () {
	//var user = firebase.auth().currentUser;
	firebase.auth().onAuthStateChanged(function(user) {
		console.log(user);
		if (user) {
			console.log('User is logged in');
		} else {
			window.location = '../views/index.html';
		}
	});
};

var db = app.database();

var database = sessionStorage.getItem('classname');

var ref = db.ref('/Classes/' + database + '/Feedback/');


/*$(document).ready(function() {
	function writeFeedback() {
		console.log(className);

		var feedback ={
			name: document.getElementById("usrname").value,
			rating: document.getElementById("rating").value,
			feedback: document.getElementById("comments").value
		}

		console.log(feedback);

		firebase.database().ref(className).set({
			feedback: feedback
		});
	}

	$("#submit-feedback").click(writeFeedback);
});*/

Vue.use(VueFire);

window.addEventListener('load', function() {
	var vm = new Vue({
		el: '#feed',
		data: {
			usrname: "",
			rating: "",
			comment: ""
		},
  	firebase: {
		  feedbackList: ref
		}, 
		methods: {
			addFeedback: function (e) {
				ref.push({
					"name": this.usrname,
					"rating": this.rating,
					"comment": this.comment
				})

				this.name = ""
	    		this.rating = ""
	    		this.comment = ""
			},

			removeFeedback: function(key) {
				ref.child(key).remove();
			}
		}
	});
});


var classname = sessionStorage.getItem('classname');

$(document).prop('title', classname + ' - CheckMyClass');

$(document).ready( function() {
	if ($('#className').length) {
		console.log('yo');
		$('#className').text(classname);
	} else {
		console.log('no');
	}
});