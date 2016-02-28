


class CalculateDirection {
  calculate(data) {
    // theta will be the angle in radians, range 0...2PI
    var theta = Math.atan2(data.end[1] - data.start[1], data.end[0] - data.start[0]);
    return theta;
  }
}


export default CalculateDirection
