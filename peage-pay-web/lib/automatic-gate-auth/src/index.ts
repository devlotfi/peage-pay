import GoogleOAuthWrapper from './components/google-oauth-wrapper.component';
import NavbarDropdown from './components/navbar-dropdown.component';
import {
  AuthContext,
  AuthProvider,
} from './context/automatic-gate-auth.context';
import useAuthGuard from './hooks/use-auth-guard.hook';
import ResetPasswordPage from './pages/reset-password.page';
import SendPasswordResetEmailPage from './pages/send-password-reset-email.page';
import SignInWithGoogleExternalPage from './pages/sign-in-with-google-external.page';
import SignInAutomaticGatePage from './pages/sign-in-automatic-gate.page';
import SignUpPage from './pages/sign-up.page';
import TollNotAssignedErrorPage from './pages/toll-not-assigned-error.page';
import VerifyEmailPage from './pages/verify-email.page';

export {
  SignInAutomaticGatePage as SignInPage,
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
};
