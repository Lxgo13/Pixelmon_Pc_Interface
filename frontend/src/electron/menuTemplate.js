const { Menu } = require('electron')
const openFile = require('../inputHandler/getPokemonFile');

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click: openFile
      }
    ]
  }
]

module.exports = menuTemplate;
