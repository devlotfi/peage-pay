import { IPCMessages } from '../constants/ipc-messages';

export const CONNECT_TO_SERIAL_PORT = async (variables: { path: string }) => {
  // @ts-ignore
  await window.electron.ipcRenderer.invoke(
    IPCMessages.CONNECT_TO_SERIAL_PORT,
    variables.path,
  );
  return true;
};

export const DISCONNECT_FROM_SERIAL_PORT = async () => {
  // @ts-ignore
  await window.electron.ipcRenderer.invoke(
    IPCMessages.DISCONNECT_FROM_SERIAL_PORT,
  );
  return true;
};
