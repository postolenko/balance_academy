jQuery(document).ready(function($) {
	
	function validateEmail(form_id) {
        var email = $("#" + form_id + " input[name=email]").val(),
            emailPattern = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;
        if (emailPattern.test(email)) {
            $("#" + form_id + " input[name=email]").removeClass('error_input');
            return true;
        }
        $("#" + form_id + " input[name=email]").addClass('error_input');
        return false;
    }

    function validateName(form_id) {
        var name = $("#" + form_id + " input[name=name]").val(),
            patt =  /^[а-яА-Яa-zA-Z\s\.]{3,30}$/;
        if (patt.test(name)) {
            $("#" + form_id + " input[name=name]").removeClass('error_input');
            return true;
        }
        $("#" + form_id + " input[name=name]").addClass('error_input');
        return false;
    }
    function validateForm(form_id) {
        var a = validateEmail(form_id),
            c = validateName(form_id);
        return a && c;
    }

    function ajaxFormRequest(result_id, form_id, url) {
        if (validateForm(form_id)) {
            $.ajax({
                url:    url,
                type:     "POST",
                dataType: "html",
                data: $("#" + form_id).serialize(),
                beforeSend: function () {
                    $("#" + result_id).html("Send...");
                },
                success: function (response) {
                    $("#" + result_id).html(response);
                    $("#" + form_id).trigger("reset");
                },
                error: function () {
                    $("#" + result_id).html("ERROR");
                }
            });
        } else { return false; }
    }

    $('#feedback_form').submit(function (e) {
        e.preventDefault();
        ajaxFormRequest('sendresult1', 'feedback_form', 'processform.php');
    });
	
	 $('#feedback_form2').submit(function (e) {
        e.preventDefault();
        ajaxFormRequest('sendresult2', 'feedback_form2', 'processform.php');
    });

});
