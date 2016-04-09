// This is a one dimensional gradient map


export default class Gradient {
  constructor() {

  }

  Update(svg) {

    function defineGradient(svg) {
      var gradient = svgsvg.append("defs")
        .append("linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%")
        .attr("spreadMethod", "pad");

      // a stop will be defined for each point in x or y axis
      gradient.append('stop')
        .attr({
          offset: START_GRADIENT_OFFSET
        })
        .style({
          'stop-color': GRADIENT_COLOR, // we can use an rgba value here, I imagine
          'stop-opacity': START_GRADIENT // or opacity to visualise the change in value
        });

    }

    return function(data, x, y, series) {
      // svg.selectAll('circle').remove()
      // var d = data[data.length-1];
      // svg.append('circle')
      //     .attr({
      //       cx: x(d.x),
      //       cy: y(d.y),
      //       r: '10',
      //       fill: "black"
      //     });

    }
  }
}
