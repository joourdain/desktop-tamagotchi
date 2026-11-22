// main.js — the first file Electron runs when you type `npm start`.
// Its job is to open a desktop window and load index.html into it.
// You usually only need to change the window size below.

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

function createWindow() {
  const window = new BrowserWindow({
    width: 320, // window width in pixels
    height: 420, // window height in pixels
    title: 'Desktop Tamagotchi',
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    center: true,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    // Security settings: keep these as they are.
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  // Show index.html inside the window.
  window.loadFile(path.join(__dirname, 'index.html'));
}

/* Window control ipc handlers - title bar buttons */
ipcMain.on('window:minimize', () => win.minimize());
ipcMain.on('window:close', () => win.close());

// Open the window once Electron has finished starting up.
app.whenReady().then(createWindow);

// Quit the app when every window is closed (except on Mac, where apps
// normally keep running until you press Cmd + Q).
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
