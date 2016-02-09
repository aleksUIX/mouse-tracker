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


    svg.selectAll('.bar')
      .remove();

    svg.selectAll('rect')
      .data(data)
      .append('rect')
      .attr({
        // x: ,
        // y: ,
        // width: ,
        // height:
        // fill: '#CCCCCC'
      })

  }

}

export default Bar
