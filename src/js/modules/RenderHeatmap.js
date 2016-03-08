// This widget will render a heatmap of mouse cursor location
// The canvas of the heatmap will proportionally represent the browser window
// on a smaller scale
// The focus will be on using colour scales to represent the hot points

// Feature: heatmap should allow different types of rendering
// Take into account: square+area, square+colour, spherical+area, spherical+colour, spherical+colour/area, voronoi, voronoi+color; one-dimensional gradient: top-bottom, left-right

import SphereMap from './mapEngines/SphereMap';
import SquareMap from './mapEngines/SquareMap';


export default class RenderHeatmap {
  constructor(mapType) {
    console.log(mapType);
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

    console.log('map ' + this.map);
  }




}
