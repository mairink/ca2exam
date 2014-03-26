
window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

$(document).ready(function() {
    $("#convertbutton").click(function() {
        var metricValue = $("#metricinput").val();
        var imperialValue = $("#imperialinput").val();


        if (((metricValue.length !=0) && (imperialValue.length !=0))
            || ((metricValue.length == 0) && imperialValue.length == 0)) {
            alert("Please set one field to convert")
        }
        if (metricValue.length != 0) {
            $("#imperialinput").val(Converter.convertFromPoundsToKIlo(metricValue));
        }
        else if (imperialValue.length != 0) {
            $("#metricinput").val(Converter.convertFromMetricToImperial(imperialValue));
        }
    });
    $("#clearbutton").click(function() {
        $("#imperialinput").val('');
        $("#metricinput").val('');
    });

});


    $(document).ready(function() {
        $("#convertbutton3").click(function() {
            var metricValue3= $("#metricinput3").val();
            var imperialValue3= $("#imperialinput3").val();
            var result3= $('#result3').val();


            if (metricValue3.length = 0) {
                $("#result3").val(Converter.subTwoNumbers  (metricValue3,imperialValue3));
            }
            else if (imperialValue3.length != 0) {
                $("#result3").val(Converter.subTwoNumbers(imperialValue3,metricValue3));
            }
        });
        $("#clearbutton3").click(function() {
            $("#imperialinput3").val('');
            $("#metricinput3").val('');
            $("#result3").val('');
        });

    });

$(document).ready(function() {
    $("#convertbutton1").click(function() {
        var metricValue = $("#metricinput1").val();
        var imperialValue = $("#imperialinput1").val();
        var result = $('#result').val();


        if (metricValue.length != 0) {
            $("#result").val(Converter.multiplyTwoNumbers(metricValue,imperialValue));
        }
        else if (imperialValue.length != 0) {
            $("#result").val(Converter.multiplyTwoNumbers(imperialValue,metricValue));
        }
    });
    $("#clearbutton1").click(function() {
        $("#imperialinput1").val('');
        $("#metricinput1").val('');
        $("#result").val('');
    });

});

$(document).ready(function() {
    $("#convertbutton5").click(function() {
        var metricValue5= $("#metricinput5").val();
        var imperialValue5= $("#imperialinput5").val();
        var result5= $('#result5').val();


        if (metricValue5.length = 0) {
            $("#result5").val(Converter.divideTwoNumbers  (metricValue5,imperialValue5));
        }
        else if (imperialValue5.length != 0) {
            $("#result5").val(Converter.divideTwoNumbers(imperialValue5,metricValue5));
        }
    });
    $("#clearbutton5").click(function() {
        $("#imperialinput5").val('');
        $("#metricinput5").val('');
        $("#result5").val('');
    });

});
$(document).ready(function() {
    $("#convertbutton4").click(function() {
        var metricValue4=$("#metricinput4").val();
        var imperialValue4= $("#imperialinput4").val();
        var result4= $('#result4').val();


        if (metricValue4.length = 0) {
            $("#result4").val(Converter.addTwoNumbers  (metricValue4,imperialValue4));
        }
        else if (imperialValue4.length != 0) {
            $("#result4").val(Converter.addTwoNumbers(imperialValue4,metricValue4));
        }
    });
    $("#clearbutton4").click(function() {
        $("#imperialinput4").val('');
        $("#metricinput4").val('');
        $("#result4").val('');
    });

});






