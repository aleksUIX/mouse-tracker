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
    console.log(this.dataSeries);
    console.log(data);


    svg.selectAll('.bar')
      .remove();

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr({
        x: (d) => { return this.dataSeries.x(d.time); },
        y: (d) => { return -this.dataSeries.y.range()[1] - this.dataSeries.y(d.distance); },
        width: 10,
        height: (d) => { return this.dataSeries.y(d.distance); },
        fill: '#CCCCCC'
      });

  }

}

export default Bar
