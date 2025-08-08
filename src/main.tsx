const path = require('path');
const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 630, height: 255, resizable: false});
  win.loadFile(path.join(__dirname, '../public/index.html'));
});