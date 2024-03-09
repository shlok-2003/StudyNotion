import { config } from '@/api/index';
import { axiosAdvanced } from '@/api/axiosAdvanced';

export const LoginAPI = async (data: object) => {
    return (
        (
            await axiosAdvanced({
                method: 'POST',
                baseUrl: config.auth.root,
                path: config.auth.LOGIN,
                data: { ...data },
            })
        )?.data || {}
    );
};

export const SignUpAPI = async (data: object) => {
    return (
        (
            await axiosAdvanced({
                method: 'POST',
                baseUrl: config.auth.root,
                path: config.auth.SIGNUP,
                data: { ...data },
            })
        )?.data || {}
    );
};

export const SendOtpAPI = async (data: object) => {
    return (
        (
            await axiosAdvanced({
                method: 'POST',
                baseUrl: config.auth.root,
                path: config.auth.SEND_OTP,
                data: { ...data },
            })
        )?.data || {}
    );
};
