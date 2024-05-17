import { SerialPort } from 'serialport';

export class CurrentPort {
  private constructor() {}

  private static _instance: CurrentPort;
  public port: SerialPort | null = null;

  public static get instance(): CurrentPort {
    if (!CurrentPort._instance) {
      CurrentPort._instance = new CurrentPort();
    }
    return CurrentPort._instance;
  }

  public connect(path: string, baudRate: number): void {
    this.port = new SerialPort({
      path,
      baudRate,
    });
  }

  public disconnect(): void {
    this.port?.removeAllListeners();
    this.port?.close();
    this.port = null;
  }
}
