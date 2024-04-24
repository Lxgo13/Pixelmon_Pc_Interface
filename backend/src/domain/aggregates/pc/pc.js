// defines a Pc object
// where the property boxes is an array of the box.js class
class Pc {
  constructor(boxes) {
    this.boxes = {};
    boxes.forEach((box) => {
      const { number } = box;
      this.boxes[number] = box;
    });
  }
  getPokemonFromPage = (index) => this.boxes[index].pokemon;
}

module.exports = Pc;
