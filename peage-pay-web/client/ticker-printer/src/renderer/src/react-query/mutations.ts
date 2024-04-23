import { IPCMessages } from '@constants/ipc-messages';

export const OPEN_GATE = async () => {
  await window.electron.ipcRenderer.invoke(IPCMessages.OPEN_GATE);
  return true;
};
