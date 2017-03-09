var db = app.database();

var database = document.getElementById('database').innerHTML;

var TA = "TA";
var Prof = "Professor";
var Class = "Class";
var taratingRef = db.ref('/' + database + '/' + TA + '/ratings');

var profratingRef = db.ref('/' + database + '/' + Prof + '/ratings');

var classratingRef = db.ref('/' + database + '/' + Class + '/ratings');


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
				ratingRef.update({
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
				ratingRef.update({
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
				ratingRef.update({
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
