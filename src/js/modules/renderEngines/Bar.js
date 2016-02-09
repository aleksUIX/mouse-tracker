import d3 from 'd3';

class Bar {
  contructor() {
    this.dataSeries = null;
    this.define();
  }

  define(x, y) {
    // let's figure all range bands etc. here
    console.log(x.rangeBand());
    

    return this.dataSeries;
  }

  render(data, svg) {
    // remove old line
    svg.selectAll('.bar')
      .remove();

    svg.selectAll('rect')
      .data(data)
      .append('rect')
      // .attr({
      //   x: ,
      //   y: ,
      //   width: ,
      //   height:
      //   fill: '#CCCCCC'
      // })

  }

}

export default Bar
