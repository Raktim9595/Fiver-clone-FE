import { END_POINTS } from '../../api';
import { privateRequest } from '../../api/axios';
import { User, type GetCurrentUserApiResponse } from '../../types/user.types';

export const getCurrentUser = async () => {
    const response = await privateRequest.get<GetCurrentUserApiResponse>(END_POINTS.CURRENT_USER);
    return response.data;
};

export const getUserById = async (id: string) => {
    const response = await privateRequest.get<GetCurrentUserApiResponse>(END_POINTS.USERS(id));
    return response.data;
};

export const updateUser = async (data: User) => {
    const { id, ...body } = data;
    const response = await privateRequest.put<GetCurrentUserApiResponse>(
        END_POINTS.UPDATE_USER(id),
        body,
    );
    return response.data;
};
