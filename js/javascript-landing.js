
$("#check").click(function(e) {
    e.preventDefault();
    var code = $("#code").val();
    if(code == "")
    {
        $(".error_codigo").addClass("error_show");
    } else {
        $("#myform").submit();
    }


    var email = $("#email").val();
    if(email == "")
    {
        $(".error_mail").addClass("error_show");
    } else {
        $("#myform").submit();
    }


    var fullname = $("#full_name").val();
    if(fullname == "")
    {
        $(".error_fullname").addClass("error_show");
    } else {
        $("#myform").submit();
    }


   

});
