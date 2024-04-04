import { BrowserWindow, ipcMain } from 'electron';
import { CurrentPort } from './current-port';
import { SerialPort } from 'serialport';
import { IPCMessages } from '../constants/ipc-messages';

export const registerIPCHandlers = (mainWindow: BrowserWindow) => {
  ipcMain.handle(IPCMessages.SERIAL_PORT_LIST, async () => {
    const serialPortList = await SerialPort.list();
    return serialPortList;
  });

  ipcMain.handle(
    IPCMessages.CONNECT_TO_SERIAL_PORT,
    async (_event, path: string) => {
      const baudRate = +import.meta.env.MAIN_VITE_BAUD_RATE;
      CurrentPort.instance.connect(path, baudRate);

      CurrentPort.instance.port?.on('data', (data: Buffer) => {
        const dataString = data.toString();
        const dataArray: string[] = dataString.split(' ');

        if ((dataArray[0] = IPCMessages.BADGE_DETECTED)) {
          const rfidWithBrackets = dataString.match(/(?<=\{)(.*?)(?=\})/g);
          if (rfidWithBrackets) {
            const rfid = rfidWithBrackets[0]
              .split('{')
              .join('')
              .split('}')
              .join('');
            mainWindow.webContents.send(IPCMessages.BADGE_DETECTED, rfid);
          }
        }
      });
    },
  );

  ipcMain.handle(IPCMessages.DISCONNECT_FROM_SERIAL_PORT, async () => {
    CurrentPort.instance.disconnect();
  });
};
