import { BrowserWindow, app, ipcMain } from 'electron';
import { TitleBarIPCMessages } from '@peage-pay-web/ui';

export const registerTitleBarIPCHandlers = (mainWindow: BrowserWindow) => {
  ipcMain.handle(TitleBarIPCMessages.CLOSE, async () => {
    app.quit();
  });

  ipcMain.handle(TitleBarIPCMessages.MAXIMIZE, async () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.handle(TitleBarIPCMessages.MINIMIZE, async () => {
    mainWindow.minimize();
  });
};
