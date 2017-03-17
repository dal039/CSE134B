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
			addClass: function () {
				classRef.child(this.class_name).child('Class_Info').set({
					"Class_Name": this.class_name,
					"Class_Quarter": this.class_quarter,
					"Class_Division": this.class_division
				}),
				classRef.child(this.class_name).child('Class').child('edits').set({
					"Class_Location": "",
					"Class_Description": "",
					"Class_Offering": ""
				}),
				classRef.child(this.class_name).child('Class').child('ratings').set({
					"Class_Difficulty": "",
					"Class_Usefulness": "",
					"Class_Rating": ""
				}),
				classRef.child(this.class_name).child('Professor').child('edits').set({
					"Prof_Image": "",
					"Prof_Email": "",
					"Prof_Hours": "",
					"Prof_Description": ""
				}),
				classRef.child(this.class_name).child('Professor').child('ratings').set({
					"Professor_Difficulty": "",
					"Professor_Helpfulness": "",
					"Professor_Rating": ""
				}),
				classRef.child(this.class_name).child('TA').child('edits').set({
					"TA_Image": "",
					"TA_Email": "",
					"TA_Hours": "",
					"TA_Description": ""
				}),
				classRef.child(this.class_name).child('TA').child('ratings').set({
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