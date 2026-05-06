import { LoginFormView } from './login-form-view';
import { useLoginForm } from './use-login-form';

const LoginForm = () => {
    const props = useLoginForm();
    return <LoginFormView {...props} />;
};

export default LoginForm;
