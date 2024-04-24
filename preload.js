const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
    onFileLoaded: (callback) => ipcRenderer.on('fileLoaded', (_event, value) => callback(value)),
})