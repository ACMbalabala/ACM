var signUpButton = document.getElementById('signUp')
var signInButton = document.getElementById('signIn')
var container = document.getElementById('dowebok')

signUpButton.addEventListener('click', function () {
  container.classList.add('right-panel-active')
})

signInButton.addEventListener('click', function () {
  container.classList.remove('right-panel-active')
})

const slider = document.querySelector('[data-slider]');
var timer = 300;

slider.addEventListener('input', e => {
  timer = 500 - slider.value;
});

addCircles();

function addCircles() {
  setTimeout(() => {
    addCircle(...randomPosition());
    addCircles();
  }, timer);
}

function addCircle(x, y) {
  var circle = document.createElement('div');
  var animationTime = Math.round(Math.random() * 10);
  circle.classList.add('circle');
  circle.style.left = x + 'vw';
  circle.style.top = y + 'vh';
  circle.style.backgroundColor = randomColor();
  circle.style.setProperty('--grow-time', `${animationTime}s`);

  requestAnimationFrame(() => {
    document.body.appendChild(circle);
    setTimeout(removeCircle.bind(this, circle), animationTime * 1000);
  });
}

function removeCircle(circle) {
  document.body.removeChild(circle);
}

function randomPosition() {
  return [
    Math.random() * 100 + 1,
    Math.random() * 100 + 1];

}

function randomColor() {
  const colors = [
    '#81ecec',
    '#74b9ff',
    '#a29bfe',
    '#ffeaa7',
    '#fab1a0',
    '#ff7675',
    '#fd79a8'];


  return colors[Math.round(Math.random() * colors.length)];
}

$(function () {
  $(".btn1").click(function () {
    var usernameText = $("#username").val();
    var usernamePat = /^[0-9]{10}$/;
    if (usernameText == "") {
      $(".errorMsg").text("请输入用户名！");
      $("#username").css("border-color", "red");
      return false;
    } else if (!usernamePat.test(usernameText)) {
      $(".errorMsg").text("用户名不合法");
      $("#username").css("border-color", "red");
      return false;
    } else {
      $("#username").css("border-color", "aquamarine");
    }

    var passwordText = $("#password").val();
    if (passwordText == "") {
      $(".errorMsg").text("请输入密码！");
      $("#password").css("border-color", "red");
      return false;
    } else {
      $("#password").css("border-color", "aquamarine");
    }

    $(".errorMsg").text("");
    axios({
      method: 'POST',
      url: 'http://localhost:3000/posts',
      data: {
        username: $("input#username").val(),
        password:$("input#password").val(),
        csrf_token:$("input[name='csrfmiddlewaretoken']").val()
      }
    }).then(response=>{
      console.log(response);
    })
  })

  $(".btn2").click(function(){
    var studentID = $("#StuID").val();
    var studentIDPat = /^[0-9]{10}$/;
    if (studentID == "") {
      $(".errorMsg2").text("请输入用户名！");
      $("#StuID").css("border-color", "red");
      return false;
    } else if (!studentIDPat.test(studentID)) {
      $(".errorMsg2").text("学号命名不合法");
      $("#StuID").css("border-color", "red");
      return false;
    } else {
      $("#StuID").css("border-color", "aquamarine");
    }

    var studentName = $("#Username").val();
    var studentNamePat = /^[\u4E00-\u9FA5A-Za-z]+$/;
    if (studentName == "") {
      $(".errorMsg2").text("请输入姓名！");
      $("#Username").css("border-color", "red");
      return false;
    } else if (!studentNamePat.test(studentName)) {
      $(".errorMsg2").text("姓名不合法");
      $("#Username").css("border-color", "red");
      return false;
    } else {
      $("#Username").css("border-color", "aquamarine");
    }

    var email = $("#Email").val();
    var studentNamePat = /^[\u4E00-\u9FA5A-Za-z]+$/;
    if (studentName == "") {
      $(".errorMsg2").text("请输入姓名！");
      $("#Username").css("border-color", "red");
      return false;
    } else if (!studentNamePat.test(studentName)) {
      $(".errorMsg2").text("姓名不合法");
      $("#Username").css("border-color", "red");
      return false;
    } else {
      $("#Username").css("border-color", "aquamarine");
    }



    $(".errorMsg2").text("");
    return false;
  })
})

