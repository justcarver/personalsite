$(document).ready(function() {
    $.getJSON('http://teamtreehouse.com/justincarver.json', function (treehouse) {
        var name = treehouse.name;
        var points = treehouse.points; /* Directs to the points object */
        var total = points.total; /* Gets your total number of points earned */
        var pointsObj = {
            "HTML" : points.HTML,
            "CSS" : points.CSS,
            "Design" : points.Design,
            "JavaScript" : points.JavaScript,
            "Ruby" : points.Ruby,
            "PHP" : points.PHP,
            "WordPress" : points.WordPress,
            "iOS" : points.iOS,
            "Android" : points.Android,
            "Development Tools" : points["Development Tools"],
            "Business" : points.Business,
            "Python" : points.Python,
            "Java" : points.Java,
            "Digital Literacy" : points["Digital Literacy"]
        }
        var html = '<ul id="chartLegend">';
         var colors = {};
         colors['Android'] = '#5cb860';
         colors['Business'] = '#f9845b';
         colors['CSS'] = '#3079ab';
         colors['Design'] = '#e59a13';
         colors['Development Tools'] = '#637a91';
         colors['HTML'] = '#39add1';
         colors['iOS'] = '#53bbb4';
         colors['Java'] = '#2c9676';
         colors['JavaScript'] = '#c25975';
         colors['PHP'] = '#7d669e';
         colors['Python'] = '#f092b0';
         colors['Ruby'] = '#e15258';
         colors['WordPress'] = '#838cc7';
         colors['Digital Literacy'] = '#c38cd4';

        $(".total").html(total);

        for (var key in pointsObj) {
            if (pointsObj[key] != 0) {
                html += "<li style='border-color: " + colors[key] +"'>" + key;
                html += "<span>" + pointsObj[key] + "</span></li>";
            }
        }

        html += "</ul>";
        $(".legend").html(html);
    });
});
