$(document).ready(function() {

	$('select').change(updateClassList);
	$('.class-search').keyup(searchFilter);

});

function updateClassList(e) {
	// Prevent following link
	//e.preventDefault();

	var quarter = $('#quarter-sel').val().toUpperCase();
	var division = $('#division-sel').val();
	var query = quarter + ' - ' + division;
	var visibleTracker;

	$('.course-item').each(function() {
		if ($(this).is(":visible")) {
			visibleTracker = 1;
		}
		else {
			visibleTracker = 0;
		}
	})

	if (visibleTracker) {
		$('.course-item').hide();
	}

	console.log(query);
	$('.course-item').each(function() {
		console.log(this);
		if (query == 'NULL - NULL'){
			$(this).show();
		} 
		else if ($(this).find('.course-text').html() == query) {
			console.log(this);
			$(this).show();
		}
		else {
			$(this).hide();
		}
	})
};

function searchFilter(e) {
	console.log("hello world");
	var input = $('.class-search').val().toUpperCase();

	$('.course-item').each(function() {
		if ($(this).find('.course-label').html().toUpperCase().indexOf(input) > -1) {
			console.log('if');
			$(this).show();
			console.log(this);
		}
		else {
			console.log('else');
			$(this).hide();
			console.log(this);
		}
	});
};
