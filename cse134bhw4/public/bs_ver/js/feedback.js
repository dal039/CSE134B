var db = app.database();

var className = document.getElementById("className").innerHTML

var ref = db.ref('/' + className + '/feedback/');


$(document).ready(function() {
	function writeFeedback() {
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

Vue.use(VueFire);

window.addEventListener('load', function() {
	var vm = new Vue({
		el: '#feedback',
		data: {
			name: "",
			rating: "",
			feedback: ""
		},
  	firebase: {
		  feedback: ref
		}, 
		methods: {
			addFeedback: function () {
				ref.set({
					"name": this.name,
					"rating": this.rating,
					"feedback": this.feedback
				})
			}
		}
	});
});


