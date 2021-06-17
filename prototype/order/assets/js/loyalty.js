
jQuery(function($){
    
    window.onload = function () {
        $('#survey-div').hide();
    }
});

function thankyou() {
    //console.log("Thank You");

    redirect_url =
        window.location.protocol
        + "//"
        + window.location.hostname;

    if (window.location.port != null && window.location.port != "") {
        redirect_url += ":" + window.location.port;
    }

    redirect_url +=
        "/order/thankyou.html"
        + window.location.search.substr(0);

    //console.log("Redirecting to = " + redirect_url);
    window.location = redirect_url;
}

function stars(number) {
    //console.log("Starts: " + number);

    starsHtml = "<a href=\"javascript:stars(1)\"><i class=\"fa fa-star\"></i> </a>";

    starsHtml += number < 2
        ? "<a href=\"javascript:stars(2)\"><i class=\"fa fa-star-o\"></i> </a>"
        : "<a href=\"javascript:stars(2)\"><i class=\"fa fa-star\"></i> </a>";

    starsHtml += number < 3
        ? "<a href=\"javascript:stars(3)\"><i class=\"fa fa-star-o\"></i> </a>"
        : "<a href=\"javascript:stars(3)\"><i class=\"fa fa-star\"></i> </a>";
    
    starsHtml += number < 4
        ? "<a href=\"javascript:stars(4)\"><i class=\"fa fa-star-o\"></i> </a>"
        : "<a href=\"javascript:stars(4)\"><i class=\"fa fa-star\"></i> </a>";

    starsHtml += number < 5
        ? "<a href=\"javascript:stars(5)\"><i class=\"fa fa-star-o\"></i> </a>"
        : "<a href=\"javascript:stars(5)\"><i class=\"fa fa-star\"></i> </a>";

    $('#stars-h1').html(starsHtml);
}
