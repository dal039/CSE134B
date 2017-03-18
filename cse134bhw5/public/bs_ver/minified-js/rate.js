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

var TA = "TA";
var Prof = "Professor";
var Class = "Class";
var taratingRef = db.ref('/Classes/' + database + '/' + TA + '/ratings');

var profratingRef = db.ref('/Classes/' + database + '/' + Prof + '/ratings');

var classratingRef = db.ref('/Classes/' + database + '/' + Class + '/ratings');


Vue.use(VueFire);

window.addEventListener('load', function() {
	var ta_vm = new Vue({
		el: '#ta-rating-form',
		data: {
			ta_helpfulness: "",
			ta_rating: ""
		},
  		firebase: {
		  ta_ratings: taratingRef
		}, 
		methods: {
			rateTA: function () {
				taratingRef.update({
					"TA_Helpfulness": this.ta_helpfulness,
					"TA_Rating": this.ta_rating
				})
			}


		}
	});

	var prof_vm = new Vue({
		el: '#prof-rating-form',
		data: {
			prof_difficulty: "",
			prof_helpfulness: "",
			prof_rating: ""
		},
  		firebase: {
		  prof_ratings: profratingRef
		}, 
		methods: {
			rateProf: function () {
				profratingRef.update({
					"Professor_Difficulty": this.prof_difficulty,
					"Professor_Helpfulness": this.prof_helpfulness,
					"Professor_Rating": this.prof_rating
				})
			}
		}
	});

	var class_vm = new Vue({
		el: '#class-rating-form',
		data: {
			class_difficulty: "",
			class_usefulness: "",
			class_rating: ""
		},
  		firebase: {
		  class_ratings: classratingRef
		}, 
		methods: {
			rateClass: function () {
				classratingRef.update({
					"Class_Difficulty": this.class_difficulty,
					"Class_Usefulness": this.class_usefulness,
					"Class_Rating": this.class_rating
				})
			}
		}
	});



});



// $(function() {
// 	var db = firebase.database()
// 	var ref = db.ref('ratings');

// 	$(document).ready(function() {
// 		$('#ta-rating-form').on('submit', function(event) {
// 			var helpfulness = $('.help').val();
// 			var rating = $('.rating').val();

// 			console.log(helpfulness,rating);
// 			ref.update({TA_Helpfulness: helpfulness, TA_Rating: rating});
// 		});	
// 		$('#professor-rating-form').on('submit', function(event) {

// 			var difficulty = $('.difficulty').find(":selected").text();
// 			var helpfulness = $('.help').val();
// 			var rating = $('.rating').val();

// 			console.log(difficulty, helpfulness,rating);
// 			ref.update({Professor_Difficulty: difficulty, Professor_Helpfulness: helpfulness, Professor_Rating: rating});
// 		});	
// 		$('#class-rating-form').on('submit', function(event) {
// 			var difficulty = $('.difficulty').find(":selected").text();
// 			var usefulness = $('.use').val();
// 			var rating = $('.rating').val();

// 			console.log(difficulty, usefulness,rating);
// 			ref.update({Class_Difficulty: difficulty, Class_Usefulness: usefulness, Class_Rating: rating});
// 		});	

// 		ref.on('child_added', function(data) {
//         		var newPost = data.val();
//         		console.log(": " + newPost.author);
//         		console.log("Title: " + newPost.title);
//         		console.log("Previous Post ID: " + prevChildKey);
//     		}

//     		function onChildChanged(DataSnapshot dataSnapshot, String prevChildKey) {
//         		Post changedPost = dataSnapshot.getValue(Post.class);
//         		console.log("The updated post title is: " + changedPost.title);
//     		}

//     		function onChildRemoved(DataSnapshot dataSnapshot) {
//         		Post removedPost = dataSnapshot.getValue(Post.class);
// 		        console.log("The blog post titled " + removedPost.title + " has been deleted");
//     		}
// 		});
// 	});
// });
