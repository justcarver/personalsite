$(document).ready(function() {
    $.getJSON('http://teamtreehouse.com/justincarver.json', function (treehouse) {
        var name = treehouse.name;
        var points = treehouse.points; /* Directs to the points object */
        var total = points.total; /* Gets your total number of points earned */
        var html = points.HTML;
        var css = points.CSS;
        var design = points.Design;
        var javascript = points.JavaScript;
        var ruby = points.Ruby;
        var php = points.PHP;
        var wordpress = points.WordPress;
        var ios = points.iOS;
        var android = points.Android;
        var dev_tools = points["Development Tools"];
        var business = points.Business;
        var python = points.Python;
        var java_points = points.Java;
        var digital_lit = points["Digital Literacy"];
        console.log(name);
        console.log(points);
    });
});
