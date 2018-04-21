
// Modules
const {BrowserWindow} = require('electron')

// BrowserWindow instance
exports.win

// mainWindow createWindow fn
exports.createWindow = () => {

  this.win = new BrowserWindow({
    width: 1200,
    height: 650,
    minWidth: 350,
    maxWidth: 1450,
    minHeight: 310,
    icon: `${__dirname}/icons/64x64.png`
  })

  // Load main window content
  this.win.loadURL(`file://${__dirname}/renderer/main.html`)

  // Handle window closed
  this.win.on('closed', () => {
    this.win = null
  })
}
