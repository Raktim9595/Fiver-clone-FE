import { END_POINTS } from '../../api';
import { privateRequest } from '../../api/axios';
import {
    CountriesApiResponse,
    LanguagesApiResponse,
    TimezonesApiResponse,
} from '../../types/info.types';

export const getCountries = async () => {
    const res = await privateRequest.get<CountriesApiResponse>(END_POINTS.GET_COUNTRIES);
    return res.data;
};

export const getTimezones = async () => {
    const res = await privateRequest.get<TimezonesApiResponse>(END_POINTS.GET_TIMEZONES);
    return res.data;
};

export const getLanguages = async () => {
    const res = await privateRequest.get<LanguagesApiResponse>(END_POINTS.GET_LANGUAGES);
    return res.data;
};
