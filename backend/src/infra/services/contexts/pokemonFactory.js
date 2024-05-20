const Pokemon = require("../../../domain/entities/pokemon/pokemon");
const fs = require("fs");


// used to create pokemon objects
module.exports = function (json) {
  const { value } = json;
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
    let dexNumber = pokemon.ndex.toString();
    if (dexNumber.length < 3) {
      if (dexNumber.length < 2) {
        dexNumber = '00' + dexNumber;
      } else {
        dexNumber = '0' + dexNumber;
      }
    }
    const form = pokemon.Variant;

    const assetPath = 'frontend/assets/pokemon';
    const filecontent = fs.readFileSync(assetPath + "/" + dexNumber + "/stats.json");
    const object = JSON.parse(filecontent);
    let index = 0;
    for (index; index < object.forms.length; index++) {
      const element = object.forms[index];
      if (element.name == form) {
        break;
      }
    }
    const { types, eggGroups } = object.forms[index];
    pokemon.name = object.name;

    pokemon.types = types;
    pokemon.eggGroups = eggGroups;

    pokemon.slot = element.replace("pc", "");
    pokemon.renameProperties('IVSpAtt', 'IVSpecialAttack');
    pokemon.renameProperties('IVSpDef', 'IVSpecialDefense');
    pokemonArray.push(pokemon);
  });
  return pokemonArray;
};
