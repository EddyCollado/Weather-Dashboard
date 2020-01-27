$( document ).ready(function() {
    var appID = "9253d72026dcb5bd377bcc78b9496941";
    
    $(document).keyup(function (e) {
        if ($("searchID:focus") && (e.keyCode === 13)) {
            
        var search_param = $(this).prev().val();

        if ($(this).prev().attr("placeholder") == "City") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + search_param + "&APPID=" + appID 
            +"&units=imperial";
        } 

    }

        $.getJSON(weather,function(json) {
            $("#city").html(json.name);
            $("#temperature").html(json.main.temp);
            $("#humidity").html(json.main.humidity);

            
    });
});

});