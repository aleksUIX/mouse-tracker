// This widget will render a heatmap of mouse cursor location
// The canvas of the heatmap will proportionally represent the browser window
// on a smaller scale
// The focus will be on using colour scales to represent the hot points

// Feature: heatmap should allow different types of rendering
// Take into account: square+area, square+colour, spherical+area, spherical+colour, spherical+colour/area, voronoi, voronoi+color; one-dimensional gradient: top-bottom, left-right
import d3 from 'd3';

import Sphere from './mapEngines/Sphere';
import Square from './mapEngines/Square';
import Path from './mapEngines/Path';
import Voronoi from './mapEngines/Voronoi';
import Position from './mapEngines/Position';
import Gradient from './mapEngines/Gradient';
import MouseMoveService from '../services/MouseMoveService';


export default class RenderHeatmap {
  constructor(target, mapType) {

    switch (mapType) {
      case "sphere":
        this.mapRenderer = new Sphere();
        break;
      case "square":
        this.mapRenderer = new Square();
        break;
      case "voronoi":
        this.mapRenderer = new Voronoi();
        break;
      case "path":
        this.mapRenderer = new Path();
        break;
      case "position":
        this.mapRenderer = new Position();
        break;
      case "gradient":
        this.mapRenderer = new Gradient();
        break;
      default:
        this.mapRenderer = new Sphere();
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
      update;

    function draw(data) {
      svg = d3.select(target)
        .append('svg')
        .attr({
          height: height,
          width: width
        })
        .append('g')
        // .call(map);

      update = new renderer.Update(svg);

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

      x = d3.time.scale()
        .range([0, width])
        .domain([0, windowWidth]);

      y = d3.scale.linear()
        .range([0, height])
        .domain([0, windowHeight]);

      update(data, x, y, series);
      exists = true;
    }

    return function(data) {
      // check if widget is in the DOM
      if (data.length > 1) {
        update(data, x, y, series); // updates the path
      } else {
        // exists = true; // set the flag to notify that svg element is put in place
        draw(data) // draws the whole SVG widget area
        this.exists = true;
      }
    }

  }




}
