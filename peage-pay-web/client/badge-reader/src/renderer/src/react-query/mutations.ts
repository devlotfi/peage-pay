export const CONNECT_TO_SERIAL_PORT = async (variables: { path: string }) => {
  await window.electron.ipcRenderer.invoke(
    'CONNECT_TO_SERIAL_PORT',
    variables.path,
  );
  return true;
};

export const DISCONNECT_FROM_SERIAL_PORT = async () => {
  await window.electron.ipcRenderer.invoke('DISCONNECT_FROM_SERIAL_PORT');
  return true;
};
