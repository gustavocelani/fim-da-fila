
var food_data_json = [
    {
        "id" : 0,
        "nome" : "Entrada",
        "orderSuffix" : " ................ $",
        "preco" : 8.85
    },

    {
        "id" : 1,
        "nome" : "Prato Principal",
        "orderSuffix" : " ........ $",
        "preco" : 29.99
    },

    {
        "id" : 2,
        "nome" : "Vegano",
        "orderSuffix" : " ................. $",
        "preco" : 13.45
    },

    {
        "id" : 3,
        "nome" : "Sobremesa",
        "orderSuffix" : " .............. $",
        "preco" : 11.95
    },

    {
        "id" : 4,
        "nome" : "Suco",
        "orderSuffix" : " ................... $",
        "preco" : 3.85
    },

    {
        "id" : 5,
        "nome" : "Refrigerante",
        "orderSuffix" : " ........... $",
        "preco" : 2.95
    },

    {
        "id" : 6,
        "nome" : "Combo",
        "orderSuffix" : " .................. $",
        "preco" : 5.23
    }
]

jQuery(function($){
    
    window.onload = function () {
        url = new URL(window.location);
        orderNumber = url.searchParams.get("order");
        tableNumber = url.searchParams.get("table");
        consumption = url.searchParams.getAll("consumption[]");

        if (orderNumber == null) {
            orderNumber = 1;
        }

        if (tableNumber == null) {
            tableNumber = 10;
        }

        //console.log("page loaded with orderNumber=" + orderNumber + ", tableNumber=" + tableNumber + ", consumption = " + consumption);
        
        // Slide Section
        document.getElementById("order-slider-text").innerHTML = "Comanda: " + orderNumber;
        document.getElementById("table-slider-text").innerHTML = "Mesa: " + tableNumber;

        // Consumption Section
        consumptionHtml = "<li>Couver Artístico ....... $9.99</li>";
        total = 9.99;

        if (consumption != null) {
            consumption.sort();

            for (i in consumption) {
                total += food_data_json[consumption[i]].preco;
                
                consumptionHtml += 
                    "\n<li>"
                    + food_data_json[consumption[i]].nome
                    + food_data_json[consumption[i]].orderSuffix
                    + food_data_json[consumption[i]].preco
                    + "</li>";
            }
        }

        document.getElementById("consumption_list").innerHTML = consumptionHtml;
        document.getElementById("total_text").innerHTML = "Total até o momento: $" + (Math.round(total * 100) / 100).toFixed(2);
    }
});

function addConsumption(food_id) {
    //console.log("addConsumption " + food_id);

    url = new URL(window.location);
    consumption = url.searchParams.getAll("consumption[]");

    redirect_url = window.location.href
    if (!consumption.includes(food_id)) {
        redirect_url += "&consumption[]=" + food_id;
    }
    
    //console.log("Redirecting to = " + redirect_url);
    window.location = redirect_url;
}

function showLoyaltyPoints() {
    //console.log("Show loyalty points");
    document.getElementById("loalty-points-div").style = "display: block;"
}

function payment() {
    //console.log("Payment");

    redirect_url =
        window.location.protocol
        + "//"
        + window.location.hostname;

    if (window.location.port != null && window.location.port != "") {
        redirect_url += ":" + window.location.port;
    }

    redirect_url +=
        "/order/payment.html"
        + window.location.search.substr(0);

    //console.log("Redirecting to = " + redirect_url);
    window.location = redirect_url;
}
