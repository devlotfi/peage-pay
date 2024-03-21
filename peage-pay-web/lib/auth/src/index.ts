import NavbarDropdown from "./components/navbar-dropdown.component";
import { AuthContext, AuthProvider } from "./context/auth.context";
import useAuthGuard from "./hooks/use-auth-guard.hook";
import ResetPasswordPage from "./pages/reset-password.page";
import SendPasswordResetEmailPage from "./pages/send-password-reset-email.page";
import SignInPage from "./pages/sign-in.page";
import SignUpPage from "./pages/sign-up.page";
import VerifyEmailPage from "./pages/verify-email.page";

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
};
