$( document ).ready(function() {
    var appID = "9253d72026dcb5bd377bcc78b9496941";
    
    $("#search").click(function () {
        var search_param = $(this).prev().val();

        if ($(this).prev().attr("placeholder") == "City") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + search_param + "&APPID=" + appID 
            +"&units=imperial";
        } 
        
    });
});