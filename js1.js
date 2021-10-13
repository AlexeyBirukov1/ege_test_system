jQuery(function () {
    jQuery('.sub_obj_edit input').keypress(function (event) {
        if (event.which == '13') {
            event.preventDefault();
        }
    })
});
$(document).ready(function() {

    $(document).keypress(function(event) {
        if(event.keyCode==13){
            $(event.target).parent().next().find('input').focus();
            event.preventDefault();
        }
    });

});