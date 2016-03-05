// This widget will render a heatmap of mouse cursor location
// The canvas of the heatmap will proportionally represent the browser window
// on a smaller scale
// The focus will be on using colour scales to represent the hot points

// Feature: heatmap should allow different types of rendering
// Take into account: square+area, square+colour, spherical+area, spherical+colour, spherical+colour/area, voronoi, voronoi+color; one-dimensional: top-bottom, left-right

import SphereMap from 'SphereMap';
import SquareMap from 'SquareMap';


export default class RenderHeatmap {
  constructor() {
    this.sphereMap = new SphereMap();
    this.squareMap = new SquareMap();
  }




}
