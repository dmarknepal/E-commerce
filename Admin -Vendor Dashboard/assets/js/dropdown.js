$(document).ready(function () {

    //Creates Slug
    function slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }

    $('.sidebar-wrapper ul li.dropdown > a').on('click', function (e) {
        e.preventDefault();
        $(this.nextElementSibling).slideToggle(300);
    });

    $('#categories').select2();

    $('#title').keyup(function () {
        var value = $(this).val();
        $('#slug').val(slugify(value));

    });

    $('#date').datetimepicker({
        format: 'YYYY-MM-DD HH:mm'
    });


});