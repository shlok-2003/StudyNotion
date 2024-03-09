import { useForm } from 'react-hook-form';

import { Button } from '@components/common/button';
import { Box, Wrapper } from '@components/common/containers';

import CountryCode from '@/data/countrycode.json';
import { axiosAdvanced } from '@/api/axiosAdvanced';
import { contactUs } from '@/api';

export interface ContactFormProps {
    firstName: string;
    lastName: string;
    email: string;
    countryCode?: string;
    phone: string;
    message: string;
}

export const ContactUs = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<ContactFormProps>();

    const submitContactForm = async (data: ContactFormProps) => {
        data.phone = data.countryCode + data.phone;
        delete data.countryCode;

        // try {
        //     await axiosAdvanced({
        //         method: 'POST',
        //         url: contactUs.CONTACT_US_API,
        //         data: data,
        //     });
        // } catch (error) {
        //     const result = (error as Error).message;

        //     console.log('Error Message: ', result);
        // }

        reset();
    };

    return (
        <form onSubmit={handleSubmit(submitContactForm)}>
            <Box className="flex flex-col items-stretch justify-center space-y-4">
                <Box className="flex flex-row gap-5 max-sm:flex-col">
                    <Box className="flex flex-1 flex-col gap-2">
                        <label className="important" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            {...register('firstName', {
                                required: {
                                    value: true,
                                    message: 'First Name is required',
                                },
                            })}
                            className="custom-input-field w-full indent-2 text-base font-normal"
                        />
                        {errors.firstName && (
                            <Wrapper className="text-rich-yellow-50 text-xs">
                                {errors.firstName.message?.toString()}
                            </Wrapper>
                        )}
                    </Box>

                    <Box className="flex flex-1 flex-col gap-2">
                        <label className="important" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            {...register('lastName', {
                                required: {
                                    value: true,
                                    message: 'Last Name is required',
                                },
                            })}
                            className="custom-input-field w-full indent-2 text-base font-normal"
                        />
                        {errors.lastName && (
                            <Wrapper className="text-rich-yellow-50 text-xs">
                                {errors.lastName.message?.toString()}
                            </Wrapper>
                        )}
                    </Box>
                </Box>

                <Box className="flex flex-col gap-2">
                    <label className="important" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="text"
                        id="email"
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                        })}
                        className="custom-input-field w-full flex-1 indent-2 text-base font-normal"
                    />
                    {errors.email && (
                        <Wrapper className="text-rich-yellow-50 p text-xs">
                            {errors.email.message?.toString()}
                        </Wrapper>
                    )}
                </Box>

                <Box className="flex flex-col gap-2">
                    <label className="important" htmlFor="phone">
                        Phone Number
                    </label>
                    <Box className="flex flex-wrap gap-2">
                        <select
                            {...register('countryCode', {
                                required: {
                                    value: true,
                                    message: 'Country code is required',
                                },
                            })}
                            defaultValue={'+91'}
                            className="custom-input-field custom-no-scrollbar w-[150px] indent-1 text-base font-normal max-sm:flex-1"
                        >
                            {CountryCode.map((ele, index) => (
                                <option
                                    key={index}
                                    className="scrollbar-hide"
                                    label={ele.country}
                                    value={ele.code}
                                />
                            ))}
                        </select>

                        <input
                            type="phone"
                            id="phone"
                            {...register('phone', {
                                required: {
                                    value: true,
                                    message: 'Phone number is required',
                                },
                                validate: (value) =>
                                    value.length === 10 ||
                                    'Invalid phone number',
                            })}
                            className="custom-input-field w-full flex-1 indent-2 text-base font-normal"
                        />
                    </Box>
                    {errors.phone && (
                        <Wrapper className="text-rich-yellow-50 text-xs">
                            {errors.phone.message?.toString()}
                        </Wrapper>
                    )}
                </Box>

                <Box className="flex flex-col gap-2">
                    <label className="important" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register('message', {
                            required: {
                                value: true,
                                message: 'Message is required',
                            },
                        })}
                        rows={5}
                        className="custom-input-field w-full flex-1 resize-none indent-2 text-base font-normal"
                    />
                    {errors.message && (
                        <Wrapper className="text-rich-yellow-50 text-xs">
                            {errors.message.message?.toString()}
                        </Wrapper>
                    )}
                </Box>

                <Box className="flex flex-col gap-2">
                    <Wrapper className="text-rich-black-5 select-none text-xs">
                        By submitting this form, you agree to our Privacy
                        Policy.
                    </Wrapper>
                </Box>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-rich-black-900 bg-rich-yellow-50 disabled:bg-rich-black-300 disabled:text-rich-black-5 flex flex-col items-stretch justify-center overflow-hidden rounded-md px-2 py-3 font-bold hover:scale-[0.99]"
                >
                    Send Message
                </Button>
                {isSubmitSuccessful && (
                    <Wrapper className="text-center text-xs text-green-600">
                        Your message has been sent successfully.
                    </Wrapper>
                )}
            </Box>
        </form>
    );
};

export default ContactUs;
