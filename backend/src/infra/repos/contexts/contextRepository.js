const fs = require("fs");
const nbt = require("prismarine-nbt");
const factory = require("../../services/contexts/boxFactory");

class ContextRepository {
  async readBoxes(file) {
    const buffer = fs.readFileSync(file);
    const { parsed } = await nbt.parse(buffer);

    return factory(parsed);
  }
}

module.exports = ContextRepository;
