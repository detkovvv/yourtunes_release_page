import axios from 'axios';

const token: string = '656e95704ab9f476xr9seqc9d54459nf1zap8mnhmxk';
export const url = 'https://dev-api-v2.yourtunes.net/api/v2/release';

export const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
    },
});
