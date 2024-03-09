import { ContactForm } from '@components/core/contact';

import { Box, Section } from '@components/common/containers';
import { Typography } from '@components/common/typography';

import { ContactData } from '@/data';

const Contact = () => {
    return (
        <Section className="bg-rich-black-900">
            <Box className="flex flex-col items-start justify-center gap-10 px-4 py-20 text-white max-md:items-stretch md:flex-row md:px-10 lg:px-20">
                <Box className="bg-rich-black-800 flex flex-col gap-6 rounded-xl p-4 lg:p-6">
                    {ContactData.map((ele, index) => {
                        const Icon = ele.icon;
                        return (
                            <Box
                                className="text-rich-black-200 flex flex-col gap-0.5 p-3 text-sm"
                                key={index}
                            >
                                <Box className="flex flex-row items-center gap-3">
                                    <Icon size={25} />
                                    <Typography
                                        variant="h5"
                                        className="text-rich-black-5 text-lg font-semibold"
                                    >
                                        {ele?.heading}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="p"
                                    className="text-base font-medium"
                                >
                                    {ele?.description}
                                </Typography>
                                <Typography
                                    variant="p"
                                    className="hover:text-rich-black-5 cursor-default text-sm font-semibold"
                                >
                                    {ele?.details}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
                <Box>
                    <ContactForm />
                </Box>
            </Box>
        </Section>
    );
};

export default Contact;
