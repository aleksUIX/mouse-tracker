import d3 from 'd3';

import DistanceService from '../services/DistanceService';


export default class RenderTimeLine {
  constructor(el) {

    this.distance = DistanceService;
    this.$el = document.getElementById(el);
    this.distance.registerCallback(this.render.bind(this));

  }

  render(data) {
    // variable declarations;
    var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
      },
      width = 350 - margin.left - margin.right,
      height = 150 - margin.top - margin.bottom,
      formatDate,
      x,
      y,
      xAxis,
      yAxis,
      line,
      svg = d3.select(this.$el);

    function draw() {
      formatDate = d3.time.format("%d-%b-%y");

      x = d3.time.scale()
        .range([0, width]);

      y = d3.scale.linear()
        .range([height, 0]);

      xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
      yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

      line = d3.svg.line()
        .x(function(d) {
          return x(d.time);
        })
        .y(function(d) {
          return y(d.distance);
        });

      // TO DO: we want to only update the path
      // not the whole chart area
      svg.selectAll('*').remove();

      svg = svg.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(d3.extent(data, function(d) {
        return d.time;
      }));
      y.domain(d3.extent(data, function(d) {
        return d.distance;
      }));

      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Price ($)");

      svg.append("path")
        .datum(data)
        .attr({
          class: 'line',
          d: line,
          fill: 'none',
          'stroke-width': 2,
          stroke: 'black'
        })
        .attr("class", "line")
        .attr("d", line)

    }

    draw();

    function update() {

    }

    function drawData() {

    }
  }
}
