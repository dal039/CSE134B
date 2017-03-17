
$(document).ready(function(){
    $(document).on('click', '.courseBox', function (e) {
        e.preventDefault();
        if (e.target !== this)
            e.target = this;
        var className = $(e.target).find('.course-label').text();
        window.location = "overview.html?classname=" + className;
    });

    var vars = getUrlVars();
    document.title = 'blah';
});
