const Box = require("../../../domain/entities/boxes/box");
const pokemonFactory = require("./pokemonFactory");

// used to create Box Properties and filer out other objects
module.exports = (json) => {
  const { name, type, value } = json;
  const highLevelProps = Object.keys(value);
  const boxes = highLevelProps.filter((prop) => Box.isBox(prop));
  const boxEntities = boxes.map((boxName) => new Box(boxName));
  boxEntities.forEach((element) => {
    pokemonFactory(value[element.name]).forEach((pokemon) => {
      element.addPokemon(pokemon);
    });
  });
  return boxEntities;
};
