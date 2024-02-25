import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { SignInPage } from '@peage-pay-web/auth'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <SignInPage></SignInPage>
    </>
  )
}

export default App
