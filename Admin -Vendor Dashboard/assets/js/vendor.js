window.onload= vendorAdd();
function vendorAdd() {

    document.getElementById('vadd').onclick(venda());
}
function venda() {
    alert();
    var vana = document.getElementById('vaname').value;
    var vaem = document.getElementById('vaemail').value;
    var vapa = document.getElementById('vapw').value;
    var vaad = document.getElementById('vaaddress').value;
    var vaco = document.getElementById('vacontact').value;
    var vase = document.getElementById('vatypeOfVendor').value;


    document.write("<h3> Here is your data: </h3>");
    document.write("Name : " + vana + "<br>");
    document.write("Email : " + vaem + "<br>");
    document.write("Password : " + vapa + "<br>");
    document.write("Address : " + vaad + "<br>");
    document.write("Contact : " +vaco );
}
$.ajax({
    type: 'GET',
    url: "http://paincha.com/api/account",
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    data: {"name":vana ,"email": vaem,"Password": vapa,"Address":vaad, "Contact" : vaco,"Type of vendor":vase},
    crossDomain: true,
    success: function (data) {
        alert(data);
        closeModal();
        var token = btoa(vaem + ":" + vapa);
        window.localStorage.setItem("token", token);
        window.location.assign("index.html");
    },
    error: function (data) {
        closeModal();
    }
});
window.onload= vendorEdit();
function vendorEdit() {

    document.getElementById('vupdate').onclick(vend());
}
function vend() {
    alert();
    var vena = document.getElementById('vname').value;
    var veem = document.getElementById('vemail').value;
    var vepa = document.getElementById('vpw').value;
    var vead = document.getElementById('vaddress').value;
    var veco = document.getElementById('vcontact').value;
    var vese = document.getElementById('typeOfVendor1').value;


    document.write("<h3> Here is your data: </h3>");
    document.write("Name : " + vena + "<br>");
    document.write("Email : " + veem + "<br>");
    document.write("Password : " + vepa + "<br>");
    document.write("Address : " + vead + "<br>");
    document.write("Contact : " +veco );
}
$.ajax({
    type: 'GET',
    url: "http://paincha.com/api/account",
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    data: {"name":vena ,"email": veem,"Password": vepa,"Address":vead, "Contact" : veco,"Type of vendor":vese},
    crossDomain: true,
    success: function (data) {
        alert(data);
        closeModal();
        var token = btoa(veem + ":" + vepa);
        window.localStorage.setItem("token", token);
        window.location.assign("index.html");
    },
    error: function (data) {
        closeModal();
    }
});
