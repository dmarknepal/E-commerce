window.onload= qwe();
function qwe() {

    document.getElementById('login').onclick(log());
}
function log() {
    alert();
    var em = document.getElementById('userEmail').value;
    var pa = document.getElementById('pw').value;


    document.write("<h3> Here is your data: </h3>");
    document.write("Email : " + em + "<br>");
    document.write("Password : " + pa + "<br>");
}
$.ajax({
    type: 'GET',
    url: "http://paincha.com/api/account",
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    data: {"email": em,"Password": pa},
    crossDomain: true,
    success: function (data) {
        alert(data);
        closeModal();
        var token = btoa(em + ":" + pa);
        window.localStorage.setItem("token", token);
        window.location.assign("index.html");
    },
    error: function (data) {
        closeModal();
    }
});
