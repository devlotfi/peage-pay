export const SERIAL_PORT_LIST = async () => {
  const serialPortList = window.electron.ipcRenderer.invoke('SERIAL_PORT_LIST');
  return serialPortList;
};
