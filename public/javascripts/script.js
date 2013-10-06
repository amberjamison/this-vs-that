$(function() {
    var socket = io.connect(window.location.hostname);
    
    socket.on('data', function(data) {

        var quality = $("#quality");
        var quantity = $("#quantity");

        var apples = $("#apples");
        var oranges = $("#oranges");

        var good = $("#good");
        var bad = $("#bad");

        var day = $("#day");
        var night = $("#night");

        var left = $("#left");
        var right = $("#right");

        /* updates the width per selector */
        var qleft = ( data.symbols.quality * 100 / ( data.symbols.quality + data.symbols.quantity) );
        if (qleft > 80) { qleft = 80; }
        var qright = ( 100 - qleft );
        quality.css({'right': qright + '%'});
        quantity.css({'left': qleft + '%'});

        var aleft = ( data.symbols.apples * 100 / ( data.symbols.apples + data.symbols.oranges) );
        if (aleft > 75) { aleft = 75; }
        var oright = ( 100 - aleft );
        apples.css({'right': oright + '%'});
        oranges.css({'left': aleft + '%'});

        var gleft = ( data.symbols.good * 100 / ( data.symbols.good + data.symbols.bad) );
        if (gleft > 70) { gleft = 70; }
        var bright = ( 100 - gleft );
        good.css({'right': bright + '%'});
        bad.css({'left': gleft + '%'});

        var dleft = ( data.symbols.day * 100 / ( data.symbols.day + data.symbols.night) );
        if (dleft > 70) { dleft = 70; }
        var nright = ( 100 - dleft );
        day.css({'right': nright + '%'});
        night.css({'left': dleft + '%'});

        var lleft = ( data.symbols.left * 100 / ( data.symbols.left + data.symbols.right) );
        if (lleft > 70) { lleft = 70; }
        var rright = ( 100 - lleft );
        left.css({'right': rright + '%'});
        right.css({'left': lleft + '%'});




        /* updates the number of tweets per selector */
        quality.find("h2").text(data.symbols.quality);
        quantity.find("h2").text(data.symbols.quantity);

        apples.find("h2").text(data.symbols.apples);
        oranges.find("h2").text(data.symbols.oranges);

        good.find("h2").text(data.symbols.good);
        bad.find("h2").text(data.symbols.bad);

        day.find("h2").text(data.symbols.day);
        night.find("h2").text(data.symbols.night);

        left.find("h2").text(data.symbols.left);
        right.find("h2").text(data.symbols.right);

        /* updates the time since last update */
        $('#last-update').text(new Date().toTimeString());
    });
})