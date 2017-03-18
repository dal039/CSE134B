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

var database = "Classes";

var classRef = db.ref('/' + database );


Vue.use(VueFire);

window.addEventListener('load', function() {
	var class_vm = new Vue({
		el: '#class-form',
		data: {
			Class_Info: {
				class_name: "",
				class_quarter: "",
				class_division: ""
			},
			Class: {
				edits: {
					location: "",
					description: "",
					offering: "No"
				},
				ratings: {
					class_difficulty: "",
					class_usefulness: "",
					class_rating: ""
				}
			},
			Professor: {
				edits: {
					prof_name: "",
					prof_image:"",
					prof_email: "",
					prof_hours: "",
					prof_description: ""
				},
				ratings: {
					prof_difficulty: "",
					prof_helpfulness: "",
					prof_rating: ""
				}
			},
			TA: {
				edits: {
					ta_name: "",
					ta_image:"",
					ta_email: "",
					ta_hours: "",
					ta_description: ""
				},
				ratings: {
					ta_helpfulness: "",
					ta_rating: ""
				}
			},
			Feedback:{
				usrname: "",
				rating: "",
				comment: ""
			},
			Gifs:{
				gif_url: ""
			}

		},
  		firebase: {
		  classes: classRef
		}, 
		methods: {
			addClass: function (e) {
				var classInfo = classRef.child(this.class_name).child('Class_Info');
				var classEdits = classRef.child(this.class_name).child('Class').child('edits');
				var classRatings = classRef.child(this.class_name).child('Class').child('ratings');
				var profEdits = classRef.child(this.class_name).child('Professor').child('edits');
				var profRatings = classRef.child(this.class_name).child('Professor').child('ratings');
				var taEdits = classRef.child(this.class_name).child('TA').child('edits');
				var taRatings = classRef.child(this.class_name).child('TA').child('ratings');
				classInfo.set({
					"Class_Name": this.class_name,
					"Class_Quarter": this.class_quarter,
					"Class_Division": this.class_division
				})
				classEdits.set({
					"Class_Location": "",
					"Class_Description": "",
					"Class_Offering": ""
				}),
				classRatings.set({
					"Class_Difficulty": "",
					"Class_Usefulness": "",
					"Class_Rating": ""
				}),
				profEdits.set({
					"Prof_Name": "",
					"Prof_Image": "",
					"Prof_Email": "",
					"Prof_Hours": "",
					"Prof_Description": ""
				}),
				profRatings.set({
					"Professor_Difficulty": "",
					"Professor_Helpfulness": "",
					"Professor_Rating": ""
				}),
				taEdits.set({
					"TA_Name": "",
					"TA_Image": "",
					"TA_Email": "",
					"TA_Hours": "",
					"TA_Description": ""
				}),
				taRatings.set({
					"TA_Helpfulness": "",
					"TA_Rating": ""
				})
			},
			removeClass: function(key) {
				classRef.child(key).remove();
			}

		}
	});



});



$(document).ready(function(){
    $(document).on('click', '.courseBox', function (e) {
        if (e.target !== this)
            e.target = this;
        var className = $(e.target).find('.course-label').text();

        sessionStorage.setItem('classname', className);

    });

});


$(document).ready(function() {

	$('select').change(updateClassList);
	$('.class-search').keyup(searchFilter);

});

function updateClassList(e) {
	// Prevent following link
	//e.preventDefault();

	var quarter = $('#quarter-sel').val().toUpperCase();
	var division = $('#division-sel').val();
	var query = quarter + ' - ' + division;
	var visibleTracker;

	$('.course-item').each(function() {
		if ($(this).is(":visible")) {
			visibleTracker = 1;
		}
		else {
			visibleTracker = 0;
		}
	})

	if (visibleTracker) {
		$('.course-item').hide();
	}

	console.log(query);
	$('.course-item').each(function() {
		console.log(this);
		if (query == 'NULL - NULL'){
			$(this).show();
		} 
		else if ($(this).find('.course-text').html() == query) {
			console.log(this);
			$(this).show();
		}
		else {
			$(this).hide();
		}
	})
};

function searchFilter(e) {
	console.log("hello world");
	var input = $('.class-search').val().toUpperCase();

	$('.course-item').each(function() {
		if ($(this).find('.course-label').html().toUpperCase().indexOf(input) > -1) {
			console.log('if');
			$(this).show();
			console.log(this);
		}
		else {
			console.log('else');
			$(this).hide();
			console.log(this);
		}
	});
};
