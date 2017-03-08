$(function() {
	var db = firebase.database()
	var ref = db.ref('ratings');

	$(document).ready(function() {
		$('#ta-rating-form').on('submit', function(event) {
			var helpfulness = $('.help').val();
			var rating = $('.rating').val();

			console.log(helpfulness,rating);
			ref.update({TA_Helpfulness: helpfulness, TA_Rating: rating});
		});	
		$('#professor-rating-form').on('submit', function(event) {

			var difficulty = $('.difficulty').find(":selected").text();
			var helpfulness = $('.help').val();
			var rating = $('.rating').val();

			console.log(difficulty, helpfulness,rating);
			ref.update({Professor_Difficulty: difficulty, Professor_Helpfulness: helpfulness, Professor_Rating: rating});
		});	
		$('#class-rating-form').on('submit', function(event) {
			var difficulty = $('.difficulty').find(":selected").text();
			var usefulness = $('.use').val();
			var rating = $('.rating').val();

			console.log(difficulty, usefulness,rating);
			ref.update({Class_Difficulty: difficulty, Class_Usefulness: usefulness, Class_Rating: rating});
		});	

		ref.on('child_added', function(data) {
        		var newPost = data.val();
        		console.log(": " + newPost.author);
        		console.log("Title: " + newPost.title);
        		console.log("Previous Post ID: " + prevChildKey);
    		}

    		function onChildChanged(DataSnapshot dataSnapshot, String prevChildKey) {
        		Post changedPost = dataSnapshot.getValue(Post.class);
        		console.log("The updated post title is: " + changedPost.title);
    		}

    		function onChildRemoved(DataSnapshot dataSnapshot) {
        		Post removedPost = dataSnapshot.getValue(Post.class);
		        console.log("The blog post titled " + removedPost.title + " has been deleted");
    		}
		});
	});
});
