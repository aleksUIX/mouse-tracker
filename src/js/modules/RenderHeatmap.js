// This widget will render a heatmap of mouse cursor location
// The canvas of the heatmap will proportionally represent the browser window
// on a smaller scale
// The focus will be on using colour scales to represent the hot points

// Feature: heatmap should allow different types of rendering
// Take into account: square+area, square+colour, spherical+area, spherical+colour, spherical+colour/area, voronoi, voronoi+color; one-dimensional gradient: top-bottom, left-right

import SphereMap from './mapEngines/SphereMap';
import SquareMap from './mapEngines/SquareMap';


export default class RenderHeatmap {
  constructor(target, mapType) {
    this.target = target;

    switch (mapType) {
      case "sphere":
        this.map = new SphereMap();
        break;
      case "square":
        this.map = new SquareMap();
        break;
      default:
        this.map = new SphereMap();
        break;
    }

    this.render()

  }

  render() {
    var target = d3.select(this.target),
      dimensions = target.node().getBBox(),
      width = dimensions.width,
      height = dimensions.height,
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
        append('g')
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
