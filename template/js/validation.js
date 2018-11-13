function validation() {

    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var confirm = document.getElementById('confirm').value;
    var mobile = document.getElementById('mobile').value;



    if (email == "") {
        document.getElementById('emailadd').innerHTML = "Please fill this field";
        return false;
    }
    if (user == "") {
        document.getElementById('username').innerHTML = "Please fill this field";
        return false;
    }
    if (user.length <= 2 || user.length > 20) {
        document.getElementById('username').innerHTML = "Username should be between 3 to 20 characters only.";
        return false;

    }



    if (pass == "") {
        document.getElementById('password').innerHTML = "Please fill this field";
        return false;


    }
    if (pass.length <= 6 || pass.length > 20) {
        document.getElementById('pw').innerHTML = "Password should be between 8 to 20 characters only.";
        return false;

    }
    if (confirm == "") {
        document.getElementById('cpw').innerHTML = "Please fill this field";
        return false;
    }
    if (pass != confirm) {
        document.getElementById('cpw').innerHTML = "Password do not match";
    }

    if (mobile == "") {
        document.getElementById('mnumber').innerHTML = "Please fill this field";
        return false;
    }
    if (isNaN(mobile)) {
        document.getElementById('mnumber').innerHTML = "Please enter valid mobile number";
    }
    if (mobile.length != 10) {
        document.getElementById('mnumber').innerHTML = "Please enter valid mobile number";
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('emailadd').innerHTML = "Please enter valid email address";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('emailadd').innerHTML = "Please enter valid email address";
        return false;

    }

}

function signIn() {
    var pw = document.getElementById('pw').value;
    var userEmail = document.getElementById('userEmail').value;

    if (userEmail == "") {
        document.getElementById('ue').innerHTML = "Please fill this field";
        return false;
    }
    if (pw == "") {
        document.getElementById('pw1').innerHTML = "Please fill this field";
        return false;
    }

    if (pw.length <= 6 || pw.length > 20) {
        document.getElementById('pw1').innerHTML = "Password should be between 8 to 20 characters only.";
        return false;

    }
}
