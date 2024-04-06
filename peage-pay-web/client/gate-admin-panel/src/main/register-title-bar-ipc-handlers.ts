import { BrowserWindow, app, ipcMain } from 'electron';

export const registerTitleBarIPCHandlers = (mainWindow: BrowserWindow) => {
  ipcMain.handle('CLOSE', async () => {
    app.quit();
  });

  ipcMain.handle('MAXIMIZE', async () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.handle('MINIMIZE', async () => {
    mainWindow.minimize();
  });
};
