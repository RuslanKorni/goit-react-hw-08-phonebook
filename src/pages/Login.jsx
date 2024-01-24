import { HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <HelmetProvider>
        <title>Login</title>
      </HelmetProvider>
      <LoginForm />
    </div>
  );
}