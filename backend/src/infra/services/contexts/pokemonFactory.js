const Pokemon = require("../../../domain/entities/pokemon/pokemon");

// used to create pokemon objects
module.exports = function (json) {
  const { name, type, value } = json;
  const pokemonArray = [];
  const reservedSlots = Object.keys(value);
  reservedSlots.forEach((element) => {
    const pokemonDTO = value[element]?.value;

    const pokemon = new Pokemon();
    const pokemonAttributes = Object.keys(pokemonDTO);
    const test = pokemonDTO["Ability"]?.value;
    pokemonAttributes.forEach(
      (attribute) => (pokemon[attribute] = pokemonDTO[attribute]?.value),
    );
    pokemon.slot = element.replace("pc", "");
    pokemonArray.push(pokemon);
  });
  return pokemonArray;
};
