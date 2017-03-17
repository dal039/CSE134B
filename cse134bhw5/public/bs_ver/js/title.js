var classname = sessionStorage.getItem('classname');

$(document).prop('title', classname);
$(document).ready( function() {
	if ($('#className').length) {
		console.log('yo');
		$('#className').text(classname);
	} else {
		console.log('no');
	}
});