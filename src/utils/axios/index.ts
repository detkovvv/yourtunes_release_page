import { type BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { type AxiosError, type AxiosRequestConfig } from 'axios';

const token = '656e95704ab9f476xr9seqc9d54459nf1zap8mnhmxk';
export const url = 'https://dev-api-v2.yourtunes.net/api/v2/release';

export const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
    },
});

export const axiosBaseQuery =
    (
        { baseUrl }: { baseUrl: string } = { baseUrl: '' },
    ): BaseQueryFn<
        {
            url: string;
            method: AxiosRequestConfig['method'];
            data?: AxiosRequestConfig['data'];
            params?: AxiosRequestConfig['params'];
            headers?: AxiosRequestConfig['headers'];
        },
        unknown,
        unknown
    > =>
    async ({ url, method, data, params, headers }) => {
        try {
            const result = await axios({
                url: baseUrl + url,
                method,
                data,
                params,
                headers,
            });
            return { data: result.data };
        } catch (axiosError) {
            const err = axiosError as AxiosError;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }
    };
