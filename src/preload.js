const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronWin', {
    minimize: () => ipcRenderer.send('min'),
    maximize: () => ipcRenderer.send('max'),
    close: () => ipcRenderer.send('close'),
    reload: () => ipcRenderer.send('reload'),
})