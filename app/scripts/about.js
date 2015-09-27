var About = (function() {

  var skillsData = [
    {label: "HTML5", experienceLevel: 10, logo:"html5", yrs: 4},
    {label: "CSS3", experienceLevel: 10, logo:"css3", yrs: 2},
    {label: "Javascript", experienceLevel: 10,logo:"javascript", yrs: 6},
    {label: "Angular", experienceLevel: 10, logo:"angular", yrs: 3},
    {label: "PHP", experienceLevel: 10, logo:"php", yrs: 8},
    {label: "SQL", experienceLevel: 10, logo:"mysql", yrs: 8},
    {label: "MongoDB", experienceLevel: 6, logo:"mongodb", yrs: 1},
    {label: "Redis", experienceLevel: 4, logo:"redis", yrs: 1},
    {label: "Java", experienceLevel: 4, logo:"java", yrs: 2},
    {label: "NodeJS", experienceLevel: 8, logo:"nodejs", yrs: 1},
    {label: "Nginx", experienceLevel: 4, logo:"nginx", yrs: 1},
    {label: ".NET", experienceLevel: 2, logo:"net", yrs: 2},
    {label: "Perl", experienceLevel: 4, logo:"perl", yrs: 2},
    {label: "Python", experienceLevel: 4, logo:"python", yrs: 2},
    {label: "Unity", experienceLevel: 4, logo:"unity", yrs: 3},
    {label: "Actionscript", experienceLevel: 10, logo:"actionscript3", yrs: 6}
  ];

  function init() {
    createSkillsCards();
    createSpiderChart();
    // generateLineCharts();
    // initScrollListening();
  }

  function createSkillsCards() {

    var _delay = 0;
    for (var i = 0; i < skillsData.length; i++) {
      _delay += 0.25;
      skillsData[i].delay = _delay;
    }

    var source   = $("#skills-card-template").html();
    var template = Handlebars.compile(source);
    var html    = template({skills:skillsData});
    $('#skills-grid').html(html);
  }

  function createSpiderChart() {

    var ctx = document.getElementById("spider-chart").getContext("2d");

    var _labels = [];
    var _data = [];
    for (var i = skillsData.length - 1; i >= 0; i--) {
      _labels.push(skillsData[i].label);
      _data.push(skillsData[i].experienceLevel);
    }

    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(6, 255, 0, .75)');   
    gradient.addColorStop(0.75, 'rgba(0, 182, 189, .75)');

    var data = {
        labels:_labels,
        // labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                // fillColor: "rgba(220,220,220,0.2)",
                fillColor: gradient,
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                // data: [65, 59, 90, 81, 56, 55, 40]
                data:_data
            }
        ]
    };
    var options = {

        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: false,

        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,

        //Boolean - Whether to show lines for each scale point
        scaleShowLine : false,

        //Boolean - Whether we show the angle lines out of the radar
        angleShowLineOut : true,

        //Boolean - Whether to show labels on the scale
        scaleShowLabels : false,

        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero : true,

        //String - Colour of the angle line
        angleLineColor : "rgba(0,0,0,.1)",

        //Number - Pixel width of the angle line
        angleLineWidth : 1,

        //String - Point label font declaration
        pointLabelFontFamily : "'Arial'",

        //String - Point label font weight
        pointLabelFontStyle : "normal",

        //Number - Point label font size in pixels
        pointLabelFontSize : 10,

        //String - Point label font colour
        pointLabelFontColor : "#666",

        //Boolean - Whether to show a dot for each point
        pointDot : false,

        //Number - Radius of each point dot in pixels
        pointDotRadius : 3,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius : 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke : false,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill : false,

        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    };
    var myRadarChart = new Chart(ctx).Radar(data, options);
  }

  function generateLineCharts() {

    var options = {

      scaleShowLabels : false,

      // Sets the chart to be responsive
      responsive: true,

      fillColor: "rgba(0, 182, 189,1)",

      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines : false,

      //String - Colour of the grid lines
      scaleGridLineColor : "rgba(0,0,0,0)",

      //Number - Width of the grid lines
      scaleGridLineWidth : 0,

      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: false,

      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: false,

      //Boolean - Whether the line is curved between points
      bezierCurve : true,

      //Number - Tension of the bezier curve between points
      bezierCurveTension : 0.4,

      //Boolean - Whether to show a dot for each point
      pointDot : false,

      //Number - Radius of each point dot in pixels
      pointDotRadius : 4,

      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth : 1,

      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius : 20,

      //Boolean - Whether to show a stroke for datasets
      datasetStroke : false,

      //Number - Pixel width of dataset stroke
      datasetStrokeWidth : 0,

      //Boolean - Whether to fill the dataset with a colour
      datasetFill : true,

      showScale : false,
      showTooltips : false,
      maintainAspectRatio : true,
      animation : false,

      barShowStroke : false,
      barStrokeWidth : 2,
      barValueSpacing : 1,
      barDatasetSpacing : 1
    };

    $('.skills-card-canvas').each(function(index, val) {

      var ctx = val.getContext("2d");
      var gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, 'rgba(6, 255, 0, 1)');   
      gradient.addColorStop(1, 'rgba(0, 182, 189, 1)');

      var data = {
        labels: ["","","","","","","","","","","","","",""],
        datasets: [
            {
                label: '',
                fillColor: gradient,
                strokeColor: 'rgba(220,220,220,1)',
                pointColor: 'rgba(220,220,220,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: [65, 59, 70, 71, 56, 55, 50, 65, 55, 50, 59, 70, 71, 56]
            }
        ]
      };
      var myLineChart = new Chart(ctx).Line(data, options);
    });

  }

  function initScrollListening() {

    new WOW().init();

  }

  return {
    init:init
  };

})();
$(document).ready(function() {
  About.init({});
});