var db = app.database();

var database = "Classes";

var classRef = db.ref('/' + database );


Vue.use(VueFire);

window.addEventListener('load', function() {
	var class_vm = new Vue({
		el: '#class-form',
		data: {
			class_name: "",
			class_quarter: "",
			class_division: ""
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
				})
			},
			removeClass: function(key) {
				classRef.child(key).remove();
			}

		}
	});



});