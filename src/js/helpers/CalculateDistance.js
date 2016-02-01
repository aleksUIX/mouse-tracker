


export default class CalculateDistance {
  constructor() {
  }

  calculate(data) {
    // x values
    const xMax = Math.max(data.start[0], data.end[0]);
    const xMin = Math.min(data.start[0], data.end[0]);

    // y values
    const yMax = Math.max(data.start[1], data.end[1]);
    const yMin = Math.min(data.start[1], data.end[1]);

    const xDistance = xMax - xMin;
    const yDistance = yMax - yMin;

    const pixelDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))

    return Math.round(pixelDistance);
  }
}
