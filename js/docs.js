$(document).ready(function () {
    $("#docs__forms .state-toggle").click(function(){
        $("#docs__forms .state-toggle-text, #docs__forms .alert").toggleClass("hide");
        $("#docs__forms .form__group").toggleClass("has-error");
    });
});

