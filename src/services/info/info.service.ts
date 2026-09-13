import { END_POINTS } from '../../api';
import { publicRequest } from '../../api/axios';
import {
    RolesApiResponse,
    type CountriesApiResponse,
    type LanguagesApiResponse,
    type TimezonesApiResponse,
} from '../../types/info.types';

export const getCountries = async () => {
    const res = await publicRequest.get<CountriesApiResponse>(END_POINTS.INFO.GET_COUNTRIES);
    return res.data;
};

export const getTimezones = async () => {
    const res = await publicRequest.get<TimezonesApiResponse>(END_POINTS.INFO.GET_TIMEZONES);
    return res.data;
};

export const getLanguages = async () => {
    const res = await publicRequest.get<LanguagesApiResponse>(END_POINTS.INFO.GET_LANGUAGES);
    return res.data;
};

export const getUserRoles = async () => {
    const res = await publicRequest.get<RolesApiResponse>(END_POINTS.INFO.GET_ROLES);
    return res.data;
};
