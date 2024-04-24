const { dialog, BrowserWindow } = require('electron')
const { processFile } = require('../../../backend/src/createPc')

async function getFile() {
    const result = await dialog.showOpenDialog({ properties: ['openFile'] });
    const filePaths = result.filePaths;
    if (filePaths.length > 0) {
        const filePath = filePaths[0];
        const pc = await processFile(filePath);
        const pcAsString = JSON.stringify(pc);
        const mainWindow = BrowserWindow.getFocusedWindow();
        mainWindow.webContents.send('fileLoaded', pcAsString);
    }
}

module.exports = getFile;