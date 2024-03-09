import { NewPasswordForm } from '@components/core/auth';

import { Typography } from '@components/common/typography';
import { Box, Main, Section, Wrapper } from '@/components/ui/common/containers';

export const Verify = () => {
    
    return (
        <Main className="bg-rich-black-900 flex items-center justify-center px-5 py-10 lg:px-20">
            <Section className="flex flex-col">
                <Box className="mx-auto space-y-2">
                    <Typography
                        variant="h3"
                        className="text-rich-black-5 text-2xl font-semibold leading-9 md:text-3xl"
                    >
                        Choose New Password
                    </Typography>

                    <Typography
                        variant="h5"
                        className="text-base font-light leading-6 md:text-lg [&>*]:block"
                    >
                        <Wrapper className="text-rich-black-100">
                            Almost done. Enter your new password and you're all
                            set.
                        </Wrapper>
                    </Typography>
                </Box>

                <NewPasswordForm />
            </Section>
        </Main>
    );
};

export default Verify;
