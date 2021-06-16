
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
