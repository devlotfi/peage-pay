import { Navigate, createBrowserRouter, createHashRouter } from 'react-router-dom'
import { ErrorPage } from '@peage-pay-web/ui'
import { useAuthGuard } from '@peage-pay-web/auth'

const useRouter = () => {
  const { authGuard, notAuthGuard } = useAuthGuard()

  const router = createHashRouter([
    {
      path: '/',
      element: <Navigate to={'/sign-in'}></Navigate>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: '/sign-in',
      async lazy() {
        const { SignInPage } = await import('@peage-pay-web/auth')
        return {
          element: notAuthGuard(<SignInPage title="General admin"></SignInPage>)
        }
      }
    },
    {
      path: '/sign-up',
      async lazy() {
        const { SignUpPage } = await import('@peage-pay-web/auth')
        return {
          element: notAuthGuard(<SignUpPage title="General admin"></SignUpPage>)
        }
      }
    },
    {
      path: '/send-password-reset-email',
      async lazy() {
        const { SendPasswordResetEmailPage } = await import('@peage-pay-web/auth')
        return {
          element: notAuthGuard(<SendPasswordResetEmailPage></SendPasswordResetEmailPage>)
        }
      }
    }
  ])

  return { router }
}

export default useRouter
