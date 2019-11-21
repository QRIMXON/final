var $ = function (id) {
    return document.getElementById(id); 
};

function Calculate(){
var subtotal = parseInt($("subtotal").value);    
var tax_rate = parseInt($("tax_rate").value);
$("sales_tax").value = subtotal * tax_rate / 100;
$("total").value = subtotal + parseInt($("sales_tax").value);
}

