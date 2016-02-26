


class CalculateDirection {
  calculate(data) {
    var theta = Math.atan2(data.end[1] - data.start[1], data.end[0] - data.start[0]); // range (-PI, PI]
    console.log(theta);
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    return theta;
  }
}


export default CalculateDirection
