// main.js — the first file Electron runs when you type `npm start`.
// Its job is to open a desktop window and load index.html into it.
// You usually only need to change the window size below.

const { app, BrowserWindow } = require('electron');
const path = require('node:path');

function createWindow() {
  const window = new BrowserWindow({
    width: 400, // window width in pixels
    height: 520, // window height in pixels
    title: 'Desktop Tamagotchi',
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

// Open the window once Electron has finished starting up.
app.whenReady().then(createWindow);

// Quit the app when every window is closed (except on Mac, where apps
// normally keep running until you press Cmd + Q).
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
