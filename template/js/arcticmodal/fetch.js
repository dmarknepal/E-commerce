window.onload= result();
function result() {

    document.getElementById('register').onclick(results());
}

function results() {
    alert();
    var em = document.getElementById('email').value;
    var un = document.getElementById('user').value;
    var pa = document.getElementById('pass').value;
    var cpa = document.getElementById('confirm').value;
    var mob = document.getElementById('mobile').value;


    document.write("<h3> Here is your data: </h3>");
    document.write("userName :" + un + "<br>");
    document.write("Email : " + em + "<br>");
    document.write("Password : " + pa + "<br>");
    document.write("Contact Number :" + mob + "<br>");
}
        $.ajax({
            type: 'GET',
            url: "http://paincha.com/api/account",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: {"email": em, "userName": un, "Password": pa, "confirmPassword": cpa, "mobile": mob},
            crossDomain: true,
            success: function (data) {
                alert(data);
                closeModal();
                var token = btoa(un + ":" + pa);
                window.localStorage.setItem("token", token);
                window.location.assign("index.html");
            },
            error: function (data) {
                closeModal();
            }
        });
