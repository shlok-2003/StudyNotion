import format from './index';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';

export const axiosInstance: AxiosInstance = axios.create({
    timeout: 5000,
});

interface AxiosAdvancedProps extends AxiosRequestConfig {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    baseUrl: string;
    path: string;
}

export interface ErrorInfo {
    status: number;
    data?: object;
    message: string;
}

export interface ResponseInfo {
    success: number;
    data?: object;
    message: string;
}

export const axiosAdvanced = async ({
    method,
    baseUrl,
    path,
    data,
    headers,
    params,
}: AxiosAdvancedProps): Promise<AxiosResponse<ResponseInfo> | ErrorInfo> => {
    const url = format.root + baseUrl + path;

    const token = window.localStorage.getItem('token');

    const config: AxiosRequestConfig = {
        method: method || 'GET',
        url,
        data,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            ...headers,
        },
        params,
    };

    try {
        const response: AxiosResponse = await axiosInstance(config);

        const status: number = response.status;

        const successMessages: { [key: string]: string } = {
            POST: 'Successfully Created!',
            PUT: 'Successfully Updated!',
            DELETE: 'Successfully Deleted!',
        };

        if (path === '/login' || path === '/signup') {
            toast.success('Successfully Logged In!', {
                position: 'bottom-right',
            });
        } else if (status >= 200 && status < 300) {
            toast.success(successMessages[method], {
                position: 'bottom-right',
            });
        }

        return response;
    } catch (error) {
        const message =
            (error as Error).message ||
            'An error occurred in axiosAdvanced. Please try again later.';

        toast.error(message, {
            position: 'bottom-right',
        });

        const errorInfo: ErrorInfo = {
            status: 500,
            message: message,
        };

        return errorInfo;
    }
};

export default axiosAdvanced;
