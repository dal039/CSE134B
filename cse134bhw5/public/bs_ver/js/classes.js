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