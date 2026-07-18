import { END_POINTS } from '../../api';
import { publicRequest } from '../../api/axios';
import {
    type CountriesApiResponse,
    type LanguagesApiResponse,
    type TimezonesApiResponse,
} from '../../types/info.types';

export const getCountries = async () => {
    const res = await publicRequest.get<CountriesApiResponse>(END_POINTS.GET_COUNTRIES);
    return res.data;
};

export const getTimezones = async () => {
    const res = await publicRequest.get<TimezonesApiResponse>(END_POINTS.GET_TIMEZONES);
    return res.data;
};

export const getLanguages = async () => {
    const res = await publicRequest.get<LanguagesApiResponse>(END_POINTS.GET_LANGUAGES);
    return res.data;
};
