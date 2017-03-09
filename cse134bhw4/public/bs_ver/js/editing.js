var db = app.database();

var database = document.getElementById("database").innerHTML;

var editRef = db.ref('/' + database + '/edits');

Vue.use(VueFire);

window.addEventListener('load', function() {
	var ta_edit_vm = new Vue({
		el: '#ta-edit-form',
		data: {
			ta_image:"",
			ta_email: "",
			ta_hours: "",
			ta_description: ""
		},
  		firebase: {
		  ta_edits: editRef
		}, 
		methods: {
			editTA: function () {
				editRef.update({
					"TA_Image": this.ta_image,
					"TA_Email": this.ta_email,
					"TA_Hours": this.ta_hours,
					"TA_Helpfulness": this.ta_description
				})
			}


		}
	});

	var prof_edit_vm = new Vue({
		el: '#prof-edit-form',
		data: {
			prof_image:"",
			prof_email: "",
			prof_hours: "",
			prof_description: ""
		},
  		firebase: {
		  prof_edits: editRef
		}, 
		methods: {
			editProf: function (event) {
				editRef.update({
					"Prof_Image": this.prof_image,
					"Prof_Email": this.prof_email,
					"Prof_Hours": this.prof_hours,
					"Prof_Helpfulness": this.prof_description
				})
			}
		}
	});

	var class_edit_vm = new Vue({
		el: '#class-edit-form',
		data: {
			location: "",
			description: "",
			offering: "No"
		},
  		firebase: {
		  class_edits: editRef
		}, 
		methods: {
			editClass: function () {
				editRef.update({
					"Class_Location": this.location,
					"Class_Description": this.description,
					"Class_Offering": this.offering
				})
			}
		}
	});

});
