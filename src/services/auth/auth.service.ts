import { END_POINTS } from '../../api';
import { publicRequest } from '../../api/axios';
import { type SignUpFormType } from '../../pages/signup-page/sign-up-form/sign-up-form.types';
import { type SignupApiResponse } from '../../types/auth.types';

export const signUp = async (data: SignUpFormType) => {
    const res = await publicRequest.post<SignupApiResponse>(END_POINTS.SIGN_UP, data);
    return res.data;
};
