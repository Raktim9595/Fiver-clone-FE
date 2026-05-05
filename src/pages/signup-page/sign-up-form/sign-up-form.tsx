import SignUpFormView from './sign-up-form-view';
import { useSignupForm } from './use-sign-up-form';

const SignUpForm = () => {
    const props = useSignupForm();
    return <SignUpFormView {...props} />;
};

export default SignUpForm;
