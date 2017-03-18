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


// Initialize database
var db = app.database();

// Initialize storage space
var storage = app.storage();

var database = sessionStorage.getItem('classname');

var gifsRef = db.ref('/Classes/' + database + '/Gifs');


Vue.use(VueFire);


window.addEventListener('load', function() {
	
	var vm = new Vue({
		el: '.wall-content',
		data: {
			gif_url:""
		},
  		firebase: {
		  gifs: gifsRef
		}, 
		methods: {
			addGif: function () {
				gifsRef.push({
					"gif_url": this.gif_url
				})
			},
			onFileChange(e) {
      			var files = e.target.files || e.dataTransfer.files;
      				if (!files.length){
        				return;
      				}
      				this.createImage(files[0]);
    		},
    		createImage(file) {
      			var gif_url = new Image();
      			var reader = new FileReader();
      			var vm = this;

      			reader.onload = (e) => {
        			vm.gif_url = e.target.result;
      			};
      			reader.readAsDataURL(file);
      		},
      		removeGif: function(key) {
				gifsRef.child(key).remove();
			}
		}
	})

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