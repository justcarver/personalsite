/*global $*/
/*global alert*/

$(document).ready(function () {
    $('.up-arrow').click(function (){
        var $timeUnit = $(this).siblings(".time-unit");
        var currentValue = parseInt($timeUnit.html());
        var newValue = currentValue + 1;
        if (newValue < 10) {
            newValue = "0" + newValue;
        }
        $timeUnit.html(newValue);
    });
    $('.down-arrow').click(function (){
        var $timeUnit = $(this).siblings(".time-unit");
        var currentValue = parseInt($timeUnit.html());
        if (currentValue === 0) {
            return;
        }
        var newValue = currentValue - 1;
        if (newValue < 10) {
            newValue = "0" + newValue;
        }
        $timeUnit.html(newValue);
    });
});
