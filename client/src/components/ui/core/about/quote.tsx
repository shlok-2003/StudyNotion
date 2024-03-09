import { Glitter } from '@components/common/gradient-text';
import { Box } from '@components/common/containers';

const Quote = () => {
    return (
        <Box className=" mx-auto py-5 pb-20 text-center text-xl font-semibold text-white md:text-4xl">
            We are passionate about revolutionizing the way we learn. Our
            innovative platform{' '}
            <Glitter
                className="font-bold"
                variant="blue"
                direction="bottom-right"
            >
                combines technology
            </Glitter>
            ,{' '}
            <Glitter
                className="font-bold"
                variant="crook"
                direction="bottom-right"
            >
                expertise
            </Glitter>
            , and community to create an{' '}
            <Glitter
                className="font-bold"
                variant="green"
                direction="bottom-right"
            >
                unparalleled educational experience.
            </Glitter>
        </Box>
    );
};

export default Quote;
