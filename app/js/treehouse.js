$(document).ready(function() {
    $.getJSON('http://teamtreehouse.com/justincarver.json', function (treehouse) {
        var offset = 0;
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
            "Dev. Tools" : points["Development Tools"],
            "Business" : points.Business,
            "Python" : points.Python,
            "Java" : points.Java,
            "Digital Literacy" : points["Digital Literacy"]
        };
        var legendHtml = '<ul id="chartLegend">';
        var pieHTML = "";
        var counter = 0;
        var sliceSize;
        var colors = {
            'Android' : '#5cb860',
            'Business' : '#f9845b',
            'CSS' : '#3079ab',
            'Design' : '#e59a13',
            'Dev. Tools' : '#637a91',
            'HTML' : '#39add1',
            'iOS' : '#53bbb4',
            'Java' : '#2c9676',
            'JavaScript' : '#c25975',
            'PHP' : '#7d669e',
            'Python' : '#f092b0',
            'Ruby' : '#e15258',
            'WordPress' : '#838cc7',
            'Digital Literacy' : '#c38cd4'
        };

        $(".total").html(total);

        for (var key in pointsObj) {
            if (pointsObj[key] !== 0) {
                legendHtml += "<li style='border-color: " + colors[key] +"'>" + key;
                legendHtml += "<span>" + pointsObj[key] + "</span></li>";
                sliceSize = pointsObj[key] / total * 360;
                if (sliceSize <= 179) {
                } else {
            }
            }
        }

        legendHtml += "</ul>";
        $(".legend").html(legendHtml);
    });
});
