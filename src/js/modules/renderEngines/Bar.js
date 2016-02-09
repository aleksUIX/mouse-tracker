import d3 from 'd3';

class Bar {
  contructor() {
    this.dataSeries = null;
    this.render = this.render.bind(this);
    this.define = this.define.bind(this);
  }

  define(x, y) {
    // let's figure all range bands etc. here

    var dataSeries = {
      x: x,
      y: y
    }

    this.dataSeries = dataSeries;
    return dataSeries;
  }

  render(data, svg) {
    // remove old line

    var x = this.dataSeries.x,
      y = this.dataSeries.y

    console.log(y.range());


    svg.selectAll('.bar')
      .remove();

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr({
        x: (d) => { return x(d.time); },
        y: (d) => { return y.range()[0] - y(d.distance); },
        width: 10,
        height: (d) => { return y(d.distance); },
        fill: '#CCCCCC'
      });

  }

}

export default Bar
