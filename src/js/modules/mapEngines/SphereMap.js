// Spherical heatmap engine


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
