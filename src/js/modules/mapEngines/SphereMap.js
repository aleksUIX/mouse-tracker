// Spherical heatmap engine

const GRADIENT_COLOR = 'rgb(255, 191, 0)'
const START_GRADIENT = 0.4;
const STOP_GRADIENT = 0;
const START_GRADIENT_OFFSET = '0%';
const STOP_GRADIENT_OFFSET = '90%';

export default class SphereMap {
  constructor() {
    let gradientIsDefined = false;

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
          offset: START_GRADIENT_OFFSET
        })
        .style({
          'stop-color': GRADIENT_COLOR,
          'stop-opacity': START_GRADIENT
        });

      gradient.append('stop')
        .attr({
          offset: STOP_GRADIENT_OFFSET
        })
        .style({
          'stop-color': GRADIENT_COLOR,
          'stop-opacity': STOP_GRADIENT
        });
    }

    this.Update = function(svg) {
      var svg = svg;
      return function(data, x, y, series) {
        if (!gradientIsDefined) {
          defineGradient(svg);
          gradientIsDefined = true;
        }

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
            r: '10',
            fill: "url(#sphere-gradient)"
          });
      }
    }


  }
}
