import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack, AiOutlineEye, AiOutlineEyeInvisible } from '@/icons';

import { Button } from '@components/common/button';
import { Box, Wrapper } from '@components/common/containers';

import axiosAdvanced from '@/api/axiosAdvanced';
import { contactUs } from '@/api';

type formProps = {
    newPassword: string;
    confirmPassword: string;
};

export const NewPasswordForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        reset,
        getValues,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<formProps>();

    const submitNewPasswordForm = async (data: formProps) => {
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

    const togglePassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <form onSubmit={handleSubmit(submitNewPasswordForm)}>
            <Box className="flex flex-col items-stretch justify-center space-y-4 py-5">
                <Box className="text-rich-black-5 flex flex-1 flex-col items-start gap-2 text-sm">
                    <label className="important" htmlFor="password">
                        New Password
                    </label>
                    <Wrapper className="relative flex w-full flex-1 items-center">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="newPassword"
                            {...register('newPassword', {
                                required: {
                                    value: true,
                                    message: 'Enter your Password',
                                },
                            })}
                            placeholder="Enter your password"
                            className="custom-input-field w-full flex-1 indent-2 text-base font-normal"
                        />
                        <Wrapper
                            onClick={togglePassword}
                            className="text-rich-black-25 absolute right-0 z-[10] cursor-pointer pr-2 text-2xl"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible />
                            ) : (
                                <AiOutlineEye />
                            )}
                        </Wrapper>
                    </Wrapper>
                    {errors.newPassword && (
                        <Wrapper className="text-rich-yellow-50 text-xs">
                            {errors.newPassword.message?.toString()}
                        </Wrapper>
                    )}
                </Box>

                <Box className="text-rich-black-5 flex flex-1 flex-col items-start gap-2 text-sm">
                    <label className="important" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register('confirmPassword', {
                            required: true,
                            validate: (value) =>
                                value === getValues('newPassword') ||
                                'Passwords do not match',
                        })}
                        placeholder="Enter your password"
                        className="custom-input-field w-full flex-1 indent-2 text-base font-normal"
                    />
                    {errors.confirmPassword && (
                        <Wrapper className="text-rich-yellow-50 text-xs">
                            {errors.confirmPassword.message?.toString()}
                        </Wrapper>
                    )}
                </Box>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-rich-black-900 bg-rich-yellow-50 disabled:bg-rich-black-300 disabled:text-rich-black-5 flex select-none flex-col items-stretch justify-center overflow-hidden rounded-md px-2 py-3 font-bold hover:scale-[0.99]"
                >
                    Create Account
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

export default NewPasswordForm;
