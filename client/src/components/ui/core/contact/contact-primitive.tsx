import { ContactUs } from './index';

import { Box, Section } from '@components/common/containers';
import { Typography } from '@components/common/typography';

export const ContactForm = () => {
    return (
        <Section className="border-rich-black-600 text-rich-black-300 flex flex-col gap-3 rounded-xl border p-7 lg:p-14">
            <Typography
                variant="h4"
                className="text-rich-black-5 text-4xl font-semibold leading-10"
            >
                Got a Idea? We&apos;ve got the skills. Let&apos;s team up
            </Typography>
            <Typography variant="p">
                Tell us more about yourself and what you&apos;re got in mind.
            </Typography>

            <Box className="mt-7">
                <ContactUs />
            </Box>
        </Section>
    );
};

export default ContactForm;
