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
    this.target = target;

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

  render() {
    // var target = d3.select('#' + this.target),
    //   dimensions = target.node().getBBox(),

    //TODO: width and height should be taken after container node
    var target = document.getElementById(this.target),
      width = target.offsetWidth,
      height = target.offsetHeight,
      svg,
      series,
      x,
      y,
      xAxis,
      yAxis,
      map = this.map;

    function draw() {
      svg = d3.select(target)
        .append('svg')
        .attr({
          height: height,
          width: width
        })
        .append('g')
        .call(map);

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


    }

  }




}
