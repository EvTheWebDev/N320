function calcTriArea(options = {}) {
    const { base = 1, height = 1 } = options; // Destructure with defaults
    return 0.5 * base * height;
  }
  
  module.exports = calcTriArea;
  