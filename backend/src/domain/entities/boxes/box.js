// defines a Box object that stores an array of pokemon
class Box {
  static indicator = "BoxNumber";
  constructor(name) {
    this.name = name;
    this.number = this.splitPageNumber(name);
    this.pokemon = {};
  }

  splitPageNumber = (name) => name.replace(Box.indicator, "");

  static isBox = (prop) => prop.startsWith(Box.indicator);

  addPokemon = (pokemon) => (this.pokemon[pokemon.slot] = pokemon);
}
module.exports = Box;
