var signUpButton = document.getElementById('signUp')
var signInButton = document.getElementById('signIn')
var container = document.getElementById('dowebok')

signUpButton.addEventListener('click', function () {
    container.classList.add('right-panel-active')
})

signInButton.addEventListener('click', function () {
    container.classList.remove('right-panel-active')
})

$(function(){
    $(".btn1").click(function(){
        var usernameText = $("#username").val();
        var usernamePat = /^\w{10,11}$/;
        if(usernameText==""){
            $(".errorMsg").text("请输入用户名！");
            $("#username").css("border-color","red");
            return false;
        }else if (!usernamePat.test(usernameText)) {
            $(".errorMsg").text("用户名不合法");
            $("#username").css("border-color","red");
            return false;
        }else{
            $("#username").css("border-color","aquamarine");
        }

        var passwordText = $("#password").val();
        if(passwordText==""){
            $(".errorMsg").text("请输入密码！");
            $("#password").css("border-color","red");
            return false;
        }else{
            $("#password").css("border-color","aquamarine");
        }

        $(".errorMsg").text("");
        return false;
    })
})