


class CalculateDirection {
  calculate(data) {
    console.log(data); // [0] = x, [1] = y
    var theta = Math.atan2(data.end[1] - data.start[1], data.end[0] - data.start[0]); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    console.log(Math.abs(theta));
  }
}


export default CalculateDirection
