import GoogleOAuthWrapper from './components/google-oauth-wrapper.component';
import NavbarDropdown from './components/navbar-dropdown.component';
import { AuthContext, AuthProvider } from './context/auth.context';
import useAuthGuard from './hooks/use-auth-guard.hook';
import ResetPasswordPage from './pages/reset-password.page';
import SendPasswordResetEmailPage from './pages/send-password-reset-email.page';
import SignInWithGoogleExternalPage from './pages/sign-in-with-google-external.page';
import SignInPage from './pages/sign-in.page';
import SignUpPage from './pages/sign-up.page';
import TollNotAssignedErrorPage from './pages/toll-not-assigned-error.page';
import VerifyEmailPage from './pages/verify-email.page';
import { UserAuthUtils } from './utils';

export {
  SignInPage,
  AuthProvider,
  AuthContext,
  NavbarDropdown,
  VerifyEmailPage,
  SendPasswordResetEmailPage,
  ResetPasswordPage,
  SignUpPage,
  useAuthGuard,
  SignInWithGoogleExternalPage,
  GoogleOAuthWrapper,
  TollNotAssignedErrorPage,
  UserAuthUtils,
};
