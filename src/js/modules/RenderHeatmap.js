// This widget will render a heatmap of mouse cursor location
// The canvas of the heatmap will proportionally represent the browser window
// on a smaller scale
// The focus will be on using colour scales to represent the hot points

// Feature: heatmap should allow different types of rendering
// Take into account: square+area, square+colour, spherical+area, spherical+colour, spherical+colour/area, voronoi, voronoi+color; one-dimensional gradient: top-bottom, left-right
import d3 from 'd3';

import SphereMap from './mapEngines/SphereMap';
import SquareMap from './mapEngines/SquareMap';
import MouseMoveService from '../services/MouseMoveService';


export default class RenderHeatmap {
  constructor(target, mapType) {

    switch (mapType) {
      case "sphere":
        this.mapRenderer = new SphereMap();
        break;
      case "square":
        this.mapRenderer = new SquareMap();
        break;
      default:
        this.mapRenderer = new SphereMap();
        break;
    }

    this.mouseService = MouseMoveService;
    this.render = new this.Render(target, this.mapRenderer);
    this.mouseService.registerCallback(this.render.bind(this));

  }

  Render(target, renderer) {
    // var target = d3.select('#' + this.target),
    //   dimensions = target.node().getBBox(),

    //TODO: width and height should be taken after container node
    var target = document.getElementById(target),
      width = target.offsetWidth,
      height = target.offsetHeight,
      windowWidth = window.innerWidth,
      windowHeight = window.innerHeight,
      svg,
      series,
      x,
      y,
      xAxis,
      yAxis,
      exists,
      map = this.map;


    function draw(data) {
      svg = d3.select(target)
        .append('svg')
        .attr({
          height: height,
          width: width
        })
        .append('g')
        // .call(map);

      svg.append('rect')
        .attr({
          x: 0,
          y: 0,
          width: width,
          height: height,
          fill: 'none',
          'stroke-width': 1,
          stroke: '#000000'
        });

      defineGradient(svg);

      x = d3.time.scale()
        .range([0, width])
        .domain([0, windowWidth]);

      y = d3.scale.linear()
        .range([0, height])
        .domain([0, windowHeight]);

      update(data);
      exists = true;
    }


    function update(data) {
      series = svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr({
          cx: (d) => {
            return x(d.x);
          },
          cy: (d) => {
            return y(d.y);
          },
          r: '20',
          fill: "url(#sphere-gradient)"
        });
    }


    function defineGradient(svg) {
      var gradient = svg.append('defs')
        .append('radialGradient')
        .attr({
          id: 'sphere-gradient',
          cx: '50%',
          cy: '50%',
          r: '75%',
          fx: '50%',
          fy: '50%'
        });

      gradient.append('stop')
        .attr({
          offset: '0%'
        })
        .style({
          'stop-color': 'rgb(255, 191, 0)',
          'stop-opacity': 0.4
        });

      gradient.append('stop')
        .attr({
          offset: '90%'
        })
        .style({
          'stop-color': 'rgb(255, 191, 0)',
          'stop-opacity': 0
        });
    }

    return function(data) {
      // check if widget is in the DOM
      if (exists) {
        update(data); // updates the path
      } else {
        // exists = true; // set the flag to notify that svg element is put in place
        draw(data) // draws the whole SVG widget area
      }
    }

  }




}
