$(function(){
    $("#login-button").click(function(){
        $("#login-overlay").css("z-index", "30");
        $("#login-overlay").css("opacity", "1");
        $("#login-container").css("top", "10vw");
    });
    
    $(".cross-button").click(function (){
        $("#login-overlay").css("opacity", "0");;
        $("#login-container").css("top", "-30vw");
        setTimeout(e => $("#login-overlay").css("z-index", "5"), 2000)
    });

    $(".login-credentials").click(function (){
        $(this).css("border-color", "#90C317");
        $(this.children[0]).css("color", "#90C317");
    });

    $(window).click(e => {
        if($(e.target).attr("id") != "login-credentials-username"){
            $("#login-box-username").css("border-color", "rgba(0, 0, 0, 0.1)");
            $("#login-credentials-username-icon").css("color", "rgba(0, 0, 0, 0.5)");
        }
        if($(e.target).attr("id") != "login-credentials-password"){
            $("#login-box-password").css("border-color", "rgba(0, 0, 0, 0.1)");
            $("#login-credentials-password-icon").css("color", "rgba(0, 0, 0, 0.5)");
        }
    });

    $("#signup-button").click(function(){
        
    })

    $("#signup-credentials-birthday").datepicker({
        changeMonth: true,
        changeYear: true
      });
});