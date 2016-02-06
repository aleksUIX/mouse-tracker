import d3 from 'd3';

import DistanceService from '../services/DistanceService';
import Line from './renderEngines/Line';

console.log(new Line());

export default class RenderTimeLine {
  constructor(el) {

    this.distance = DistanceService;
    this.$el = document.getElementById(el);
    this.render = new this.Render(this.$el);
    this.distance.registerCallback(this.render.bind(this));
    this.widgetExists = false;

  }

  Render($el) {
    // variable declarations and placeholders
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
      svg = d3.select($el);


    function draw(data) {
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

      svg = svg.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


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

      update(data, line);
    }


    function update(data, line) {
      x.domain(d3.extent(data, function(d) {
        return d.time;
      }));

      y.domain(d3.extent(data, function(d) {
        return d.distance;
      }));

      // remove old line
      svg.selectAll('.line')
        .remove();

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


    return function(data) {
      // check if widget is in the DOM
      if (this.widgetExists)
        update(data, line); // updates the path
      else {
        draw(data) // draws the whole SVG widget area
        this.widgetExists = true; // set the flag to notify that svg element is put in place
      }
    }

  }
}
