import SignUpFormView from './sign-up-form-view';
import { signUpFormInitialValues } from './sign-up-form.types';

const SignUpForm = () => {
    return <SignUpFormView {...signUpFormInitialValues} />;
};

export default SignUpForm;
