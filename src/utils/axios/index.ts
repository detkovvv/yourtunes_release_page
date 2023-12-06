import axios from 'axios';

const token = '656e95704ab9f476xr9seqc9d54459nf1zap8mnhmxk';

export const axiosInstance = axios.create({
    baseURL: 'https://dev-api-v2.yourtunes.net/api/v2',
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
    },
});
