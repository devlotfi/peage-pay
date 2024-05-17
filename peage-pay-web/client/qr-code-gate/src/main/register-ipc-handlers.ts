import { BrowserWindow, ipcMain } from 'electron'
import { CurrentPort } from './current-port'
import { SerialPort } from 'serialport'
import { IPCMessages } from '../constants/ipc-messages'
import { SerialPortMessages } from '../constants/serial-port-messages'

export const registerIPCHandlers = (mainWindow: BrowserWindow) => {
  ipcMain.handle(IPCMessages.SERIAL_PORT_LIST, async () => {
    const serialPortList = await SerialPort.list()
    return serialPortList
  })

  ipcMain.handle(IPCMessages.CONNECT_TO_SERIAL_PORT, async (_event, path: string) => {
    console.log(await mainWindow.webContents.session.cookies.get({}))
    const baudRate = +import.meta.env.MAIN_VITE_BAUD_RATE
    console.log(path, baudRate)

    CurrentPort.instance.connect(path, baudRate)
  })

  ipcMain.handle(IPCMessages.DISCONNECT_FROM_SERIAL_PORT, () => {
    CurrentPort.instance.disconnect()
  })

  ipcMain.handle(IPCMessages.OPEN_GATE, async () => {
    console.log('opening gate')

    CurrentPort.instance.port?.write(SerialPortMessages.OPEN_GATE + '\n')
  })
}
