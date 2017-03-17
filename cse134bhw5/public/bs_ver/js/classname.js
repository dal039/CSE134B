
$(document).ready(function(){
    $(document).on('click', '.courseBox', function (e) {
        if (e.target !== this)
            e.target = this;
        var className = $(e.target).find('.course-label').text();

        sessionStorage.setItem('classname', className);

    });

});
