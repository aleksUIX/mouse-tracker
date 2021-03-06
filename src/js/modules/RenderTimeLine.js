import d3 from 'd3';

import MouseMoveService from '../services/MouseMoveService';


// This class provides an event and data wrapper
// for time based charts
export default class RenderTimeLine {
  constructor(el, Type) {

    this.mouseService = MouseMoveService;
    this.$el = document.getElementById(el);
    var seriesRenderer = new Type();

    this.render = new this.Render(this.$el, seriesRenderer);
    this.mouseService.registerCallback(this.render.bind(this));

  }

  Render($el, seriesRenderer) {
    // variable declarations and placeholders
    //TODO: width and height should be taken after container node
    var margin = {
        top: 20,
        right: 25,
        bottom: 30,
        left: 25
      },
      width = 350 - margin.left - margin.right,
      height = 150 - margin.top - margin.bottom,
      formatDate,
      x,
      y,
      xAxis,
      yAxis,
      svg = d3.select($el),
      exists = false;


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

      seriesRenderer.define(x, y);
      update(data);
    }


    function update(data) {
      x.domain(d3.extent(data, function(d) {
        return d.time;
      }));

      y.domain(d3.extent(data, function(d) {
        return d.distance;
      }));

      seriesRenderer.define(x, y);
      seriesRenderer.render(data, svg);
    }


    return function(data) {
      // check if widget is in the DOM
      if (exists)
        update(data); // updates the path
      else {
        exists = true; // set the flag to notify that svg element is put in place
        draw(data) // draws the whole SVG widget area
      }
    }

  }
}
