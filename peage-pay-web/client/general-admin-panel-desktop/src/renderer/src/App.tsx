import { SignInPage } from '@peage-pay-web/auth'
import { Button } from '@peage-pay-web/ui'
import useRouter from './hooks/use-router.hook'
import { RouterProvider } from 'react-router-dom'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const { router } = useRouter()

  return <RouterProvider router={router}></RouterProvider>
}

export default App
