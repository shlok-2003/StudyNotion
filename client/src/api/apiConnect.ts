import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({});

export type apiProps = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    body?: any,
    headers?: any,
    params?: any,
};

export const apiConnecter = ({ method, url, body, headers, params } : apiProps) => {
    const config: AxiosRequestConfig = {
        method,
        url,
        data: body || undefined,
        headers: headers ? headers : null,
        params: params ? params : null,
    }
    
    return axiosInstance(config);
};

export default apiConnecter;
