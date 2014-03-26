var Converter;
Converter = function () {



    // Private stuff up here
    var converterValue = 2.2;


    // Public methods here
    return {
        convertFromPoundsToKIlo: function(weight) {
            var num = parseInt(weight);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = num / converterValue;
            return Math.round(num);
        },

        convertFromMetricToImperial: function(weight) {
            return weight * converterValue;
        },

        multiplyTwoNumbers: function (imperialvalue,metricvalue) {
         return imperialvalue * metricvalue;
        },


        divideTwoNumbers: function (imperialValue5,metricValue5) {
            return  metricValue5  /imperialValue5;
        },


        subTwoNumbers: function (imperialValue3,metricValue3) {
            return  metricValue3-imperialValue3 ;
        },

        addTwoNumbers: function (imperialValue4,metricValue4) {
            return  metricValue4  + imperialValue4 ;
        }

    }

}();

