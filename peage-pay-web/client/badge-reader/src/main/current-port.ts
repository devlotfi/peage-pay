import { SerialPort } from 'serialport';
import { SelectSerialPortInput } from './input/select-serial-port.input';

export class CurrentPort {
  private constructor() {}

  private static _instance: CurrentPort;
  private _port: SerialPort | null = null;

  public static get instance(): CurrentPort {
    if (!CurrentPort._instance) {
      CurrentPort._instance = new CurrentPort();
    }
    return CurrentPort._instance;
  }

  public get port(): SerialPort | null {
    return this._port;
  }

  public selectPort(selectSerialPortInput: SelectSerialPortInput | null): void {
    if (selectSerialPortInput) {
      this._port = new SerialPort({
        path: selectSerialPortInput.path,
        baudRate: selectSerialPortInput.baudRate,
      });
    } else {
      this._port = null;
    }
  }
}
