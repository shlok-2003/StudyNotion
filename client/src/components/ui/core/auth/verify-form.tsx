import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';

import { Box, Wrapper } from '@components/common/containers';
import { Button } from '@components/common/button';

// import { signup, cacheUser } from '@/redux/slices/auth';

type formProps = {
    otp: string;
};

export const VerifyForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userCachedData = useAppSelector((state) => state.auth.cachedUser);

    const {
        control,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<formProps>();

    const submitVerifyForm = async (data: formProps) => {
        if (userCachedData !== undefined) {
            console.log('userCachedData', userCachedData);

            // await dispatch(signup({ ...userCachedData, ...data }))
            //     .then(() => {
            //         dispatch(cacheUser({}));
            //     })
            //     .then(() => {
            //         navigate('/dashboard/my-profile');
            //     });
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submitVerifyForm)}>
            <Box className="flex flex-col items-stretch justify-center space-y-4 py-5">
                <Controller
                    name="otp"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: {
                            value: true,
                            message: 'OTP is required',
                        },
                        validate: (value) =>
                            value.length === 6 || 'Invalid OTP',
                    }}
                    render={({ field }) => {
                        //eslint-disable-next-line
                        const { ref, ...fieldWithoutRef } = field;
                        return (
                            <OtpInput
                                {...fieldWithoutRef}
                                value={field.value}
                                onChange={(otp) => field.onChange(otp)}
                                numInputs={6}
                                renderInput={(props) => (
                                    <input
                                        {...props}
                                        placeholder="-"
                                        style={{
                                            boxShadow:
                                                'inset 0px -1px 0px rgba(255, 255, 255, 0.18)',
                                        }}
                                        className="bg-rich-black-800 text-rich-black-5 aspect-square w-12 rounded-md border-0 text-center focus:border-0 focus:outline-2 focus:outline-yellow-50 max-[350px]:w-8 lg:w-16"
                                    />
                                )}
                                containerStyle={{
                                    justifyContent: 'space-between',
                                    gap: '0 6px',
                                    flexWrap: 'wrap',
                                }}
                            />
                        );
                    }}
                />
                {errors.otp && (
                    <Wrapper className="text-rich-yellow-50 text-xs">
                        {errors.otp.message?.toString()}
                    </Wrapper>
                )}

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-rich-black-900 bg-rich-yellow-50 disabled:bg-rich-black-300 disabled:text-rich-black-5 flex select-none flex-col items-stretch justify-center overflow-hidden rounded-md px-2 py-3 font-bold hover:scale-[0.99]"
                >
                    Verify email
                </Button>
            </Box>
        </form>
    );
};

export default VerifyForm;
