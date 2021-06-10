
var orderNumber = 0;

jQuery(function($){
    
    window.onload = function () {
        url = new URL(window.location);
        orderNumber = url.searchParams.get("order");

        if (orderNumber == null) {
            window.location = "http://localhost/order/association.html?order=1";
        }

        //console.log("page loaded with order " + orderNumber);

        document.getElementById("order_text").innerHTML = "Você está utilizando a comanda " + orderNumber +"<br>Está comanda está livre!";
    }
});

function associateOrderToTable() {
    url = new URL(window.location);
    orderNumber = url.searchParams.get("order");
    tableNumber = document.getElementById("tables").value;
    
    //console.log("associateOrderToTable called to associate order " + orderNumber + " with table " + tableNumber);

    window.location = "http://localhost/order/home.html?order=" + orderNumber + "&table=" + tableNumber;
}
