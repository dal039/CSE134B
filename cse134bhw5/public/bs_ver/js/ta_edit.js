$(document).ready(function(){
	updateTA();
});

function updateTA () {
	$("#submit").click(function(){
		console.log('sign in works');
	}, function(error) {
		console.log(error);
	})
	var email = document.getElementById('email').value;
};