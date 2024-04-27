class Pokemon {
  slot;

  renameProperties(oldName, newName) {
    if (this.hasOwnProperty(oldName)) {
      this[newName] = this[oldName];
    } else {
      console.log(`Property ${oldName} does not exist.`);
    }
  }
}

module.exports = Pokemon;
