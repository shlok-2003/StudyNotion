import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiArrowBack } from '@/icons';

import { Button } from '@components/common/button';
import { Box, Wrapper } from '@components/common/containers';

import axiosAdvanced from '@/api/axiosAdvanced';
import { contactUs } from '@/api';

type formProps = {
    email: string;
};

export const ResetPasswordForm = () => {
    const dispatch = useDispatch();

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<formProps>();

    const submitResetPasswordForm = async (data: formProps) => {
        try {
            await axiosAdvanced({
                method: 'POST',
                url: contactUs.CONTACT_US_API,
                data: data,
            });
        } catch (error) {
            const result = (error as Error).message;

            console.log('Error Message: ', result);
        }

        reset();
    };

    return (
        <form onSubmit={handleSubmit(submitResetPasswordForm)}>
            <Box className="flex flex-col items-stretch justify-center space-y-4 py-5">
                <Box className="text-rich-black-5 flex flex-col items-start gap-2 text-sm">
                    <label className="important" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Enter your email',
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address',
                            },
                        })}
                        placeholder="Enter your email address"
                        className="custom-input-field w-full flex-1 indent-2 text-base font-normal"
                    />
                    {errors.email && (
                        <Wrapper className="text-rich-yellow-50 text-xs">
                            {errors.email.message?.toString()}
                        </Wrapper>
                    )}
                </Box>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-rich-black-900 bg-rich-yellow-50 disabled:bg-rich-black-300 disabled:text-rich-black-5 flex select-none flex-col items-stretch justify-center overflow-hidden rounded-md px-2 py-3 font-bold hover:scale-[0.99]"
                >
                    Reset Password
                </Button>

                <Box className="flex select-none justify-between">
                    <Wrapper className="text-rich-black-5 flex-1 text-sm">
                        <Link
                            to="/login"
                            className="text-rich-black-50 transition-all duration-75 hover:font-medium"
                        >
                            <BiArrowBack className="inline-block" />
                            <Wrapper className="ml-1 inline-block">
                                Back to Login
                            </Wrapper>
                        </Link>
                    </Wrapper>
                </Box>
            </Box>
        </form>
    );
};

export default ResetPasswordForm;
