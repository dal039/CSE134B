var db = app.database();

var courseRef = db.ref('course_description');
var profRef = db.ref('prof_description')

Vue.use(VueFire);

window.addEventListener('load', function() {
	var vm = new Vue({
		el: '#edit-course',
		data: {
			location: "",
			description: "",
			offering: ""
		},
  	firebase: {
		  course_description: courseRef
		}, 
		methods: {
			editCourseDescription: function () {
				ref.update({
					"location": this.location,
					"description": this.description,
					"offering": this.offering
				})
			}
		}
	});
	
	var vm = new Vue({
		el: '#edit-prof',
		data: {
			email: "",
			oh_location: "",
			oh_time: "",
			description: ""
		},
  	firebase: {
		  course_description: profRef
		}, 
		methods: {
			editProfDescription: function () {
				ref.update({
					"email": this.email,
					"oh_location": this.oh_location,
					"oh_time": this.oh_time,
					"description": this.description
				})
			}
		}
	});
});