var db = app.database();

var database = "CSE 123 - CheckMyClass";


var TA = "TA";
var Prof = "Professor";
var Class = "Class";

var taeditRef = db.ref('/' + database + '/' + TA + '/edits');

var profeditRef = db.ref('/' + database + '/' + Prof + '/edits');

var classeditRef = db.ref('/' + database + '/' + Class + '/edits');

Vue.use(VueFire);

window.addEventListener('load', function() {
	var ta_edit_vm = new Vue({
		el: '#ta-edit-form-1',
		data: {
			ta_image:"",
			ta_email: "",
			ta_hours: "",
			ta_description: ""
		},
  		firebase: {
		  ta_edits: taeditRef
		}, 
		methods: {
			editTA: function () {
				taeditRef.update({
					"TA_Image": this.ta_image,
					"TA_Email": this.ta_email,
					"TA_Hours": this.ta_hours,
					"TA_Description": this.ta_description
				})
			}


		}
	});

	var ta_edit_vm = new Vue({
		el: '#ta-edit-form-2',
		data: {
			ta_image:"",
			ta_email: "",
			ta_hours: "",
			ta_description: ""
		},
  		firebase: {
		  ta_edits: taeditRef
		}, 
		methods: {
			editTA: function () {
				taeditRef.update({
					"TA_Image": this.ta_image,
					"TA_Email": this.ta_email,
					"TA_Hours": this.ta_hours,
					"TA_Description": this.ta_description
				})
			}


		}
	});

	var prof_edit_vm = new Vue({
		el: '#prof-edit-form-1',
		data: {
			prof_image:"",
			prof_email: "",
			prof_hours: "",
			prof_description: ""
		},
  		firebase: {
		  prof_edits: profeditRef
		}, 
		methods: {
			editProf: function (event) {
				profeditRef.update({
					"Prof_Image": this.prof_image,
					"Prof_Email": this.prof_email,
					"Prof_Hours": this.prof_hours,
					"Prof_Description": this.prof_description
				})
			}
		}
	});

	var prof_edit_vm = new Vue({
		el: '#prof-edit-form-2',
		data: {
			prof_image:"",
			prof_email: "",
			prof_hours: "",
			prof_description: ""
		},
  		firebase: {
		  prof_edits: profeditRef
		}, 
		methods: {
			editProf: function (event) {
				profeditRef.update({
					"Prof_Image": this.prof_image,
					"Prof_Email": this.prof_email,
					"Prof_Hours": this.prof_hours,
					"Prof_Description": this.prof_description
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
		  class_edits: classeditRef
		}, 
		methods: {
			editClass: function () {
				classeditRef.update({
					"Class_Location": this.location,
					"Class_Description": this.description,
					"Class_Offering": this.offering
				})
			}
		}
	});

});
