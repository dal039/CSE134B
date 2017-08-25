var db = app.database();

var ref = db.ref('/course_description');

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
		  course_description: ref
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
});