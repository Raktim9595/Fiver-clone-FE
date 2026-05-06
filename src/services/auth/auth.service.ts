import { END_POINTS } from '../../api';
import { publicRequest } from '../../api/axios';
import { SignUpFormType } from '../../pages/signup-page/sign-up-form/sign-up-form.types';
import { SignupApiResponse } from '../../types/auth.types';

export const signUp = async (data: SignUpFormType) => {
    const res = await publicRequest.post<SignupApiResponse>(END_POINTS.SIGN_UP, data);
    return res.data;
};
