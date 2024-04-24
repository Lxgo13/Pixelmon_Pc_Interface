const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const template = require('./frontend/src/electron/menuTemplate')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    width: 800,
    height: 600
  })

  win.loadFile("./frontend/src/index.html")
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});

