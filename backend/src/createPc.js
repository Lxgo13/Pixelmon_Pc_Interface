const ContextRepository = require("./infra/repos/contexts/contextRepository");
const Pc = require("./domain/aggregates/pc/pc");

const repo = new ContextRepository();

function processFile(theFilePath) {
  return repo
    .readBoxes(theFilePath)
    .then((boxes) => new Pc(boxes))
    .then((pc) => pc);
}



module.exports = { processFile };