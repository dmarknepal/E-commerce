window.onload= productAdd();
function productAdd() {

    document.getElementById('padd').onclick(padd());
}
function padd() {
    alert();
    var paname = document.getElementById('paname').value;
    var pamp = document.getElementById('pamp').value;
    var pasp = document.getElementById('pasp').value;
    var pades = document.getElementById('pades').value;
    var pastock = document.getElementById('pastock').value;
    var paav = document.getElementById('paav').value;
    var paimg= document.getElementById('paimg').value;

    document.write("<h3> Here is your data: </h3>");
    document.write("Product Name : " + paname + "<br>");
    document.write("Marked Price : " + pamp + "<br>");
    document.write("Selling Price : " + pasp + "<br>");
    document.write("Product Description : " + pades + "<br>");
    document.write("Stock : " +pastock + "<br>" );
    document.write("Availability : " + paav + "<br>");
    document.write("Image : " + paimg );
}
$.ajax({
    type: 'GET',
    url: "http://paincha.com/api/account",
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    data: {"productName":paname ,"markedPrice": pamp,"salePrice": pasp,"productDescription":pades, "Stock" : pastock,"Availability" :paav, "productImage" : paimg},
    crossDomain: true,
    success: function (data) {
        alert(data);
        closeModal();
    },
    error: function (data) {
        closeModal();
    }
});

window.onload= productEdit();
function productEdit() {

    document.getElementById('pupdate').onclick(pedit());
}
function pedit() {
    alert();
    var pename = document.getElementById('pename').value;
    var pemp = document.getElementById('pemp').value;
    var pesp = document.getElementById('pesp').value;
    var pedes = document.getElementById('pedes').value;
    var pestock = document.getElementById('pestock').value;
    var peav = document.getElementById('peav').value;
    var peimg= document.getElementById('peimg').value;

    document.write("<h3> Here is your data: </h3>");
    document.write("Product Name : " + pename + "<br>");
    document.write("Marked Price : " + pemp + "<br>");
    document.write("Selling Price : " + pesp + "<br>");
    document.write("Product Description : " + pedes + "<br>");
    document.write("Stock : " +pestock + "<br>" );
    document.write("Availability : " + peav + "<br>");
    document.write("Image : " + peimg );
}
$.ajax({
    type: 'GET',
    url: "http://paincha.com/api/account",
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    data: {"productName":pename ,"markedPrice": pemp,"salePrice": pesp,"productDescription":pedes, "Stock" : pestock,"Availability":peav, "productImage" : peimg},
    crossDomain: true,
    success: function (data) {
        alert(data);
        closeModal();
        },
    error: function (data) {
        closeModal();
    }
});
