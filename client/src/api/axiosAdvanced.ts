import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
    timeout: 5000,
});

export const axiosAdvanced = ({
    method,
    url,
    data,
    headers,
    params,
}: AxiosRequestConfig) => {
    const config: AxiosRequestConfig = {
        method,
        url,
        data,
        headers,
        params,
    };

    return axiosInstance(config);
};

export default axiosAdvanced;
