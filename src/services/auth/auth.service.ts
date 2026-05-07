import { END_POINTS } from '../../api';
import { publicRequest } from '../../api/axios';
import { type LoginFormType } from '../../pages/login-page/login-form/login-form.types';
import { type SignUpFormType } from '../../pages/signup-page/sign-up-form/sign-up-form.types';
import { type SigninApiResponse, type SignupApiResponse } from '../../types/auth.types';

export const signUp = async (data: SignUpFormType) => {
    const res = await publicRequest.post<SignupApiResponse>(END_POINTS.SIGN_UP, data);
    return res.data;
};

export const signin = async (data: LoginFormType) => {
    const res = await publicRequest.post<SigninApiResponse>(END_POINTS.SIGN_IN, data);
    return res.data;
};
