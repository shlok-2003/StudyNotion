import React, { useState, useEffect } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ColorRing } from 'react-loader-spinner';
import ReactStars from 'react-rating-stars-component';
import { FaStar } from '@/icons';

import { cn } from '@/lib/utils';

import 'swiper/css';
import { Typography } from '@components/common/typography';
import { Box, Section } from '@components/common/containers';
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from '@components/common/card';

import { review } from '@/api';
import axiosAdvanced from '@/api/axiosAdvanced';

import reviewData from '@/data/review';

export interface reviewProps extends React.HTMLAttributes<HTMLElement> {}

export const Review = React.forwardRef<HTMLElement, reviewProps>(
    ({ className, children, ...props }, ref) => {
        const [data, setData] = useState(reviewData);
        const [loading, setLoading] = useState(false);
        const truncate: number = 100;

        const breakpoints = {
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        };

        useEffect(() => {
            async function get() {
                setLoading(false);

                const axios = await axiosAdvanced({
                    method: 'GET',
                    url: review.REVIEW_API,
                });

                console.log(axios.data);

                if (axios.data?.success) {
                    setData(axios?.data?.rating);
                }

                setLoading(false);
            }

            // get();
        }, [data]);

        return (
            <Section
                ref={ref}
                className={cn(
                    'relative flex items-center justify-center',
                    className,
                )}
                {...props}
            >
                {loading ? (
                    <ColorRing
                        colors={[
                            '#ffffff',
                            '#ffffff',
                            '#ffffff',
                            '#ffffff',
                            '#ffffff',
                        ]}
                    />
                ) : (
                    <Swiper
                        breakpoints={breakpoints}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {data.map(({ user, course, rating, review }, index) => (
                            <SwiperSlide key={index} className="max-sm:px-2">
                                <Card className="bg-rich-black-800 text-rich-black-25 flex flex-col gap-3 border-none p-3 text-sm">
                                    <CardHeader className="flex flex-row items-center gap-4 p-0">
                                        <img
                                            src={
                                                user?.image
                                                    ? user?.image
                                                    : `https://api.dicebear.com/5.x/initials/svg?seed=${user?.firstName}%20${user?.lastName}`
                                            }
                                            alt=""
                                            className="aspect-square h-10 rounded-full"
                                            loading="lazy"
                                        />
                                        <Box className="flex flex-col">
                                            <Typography
                                                variant="h6"
                                                className="text-rich-black-5 align-middle"
                                            >{`${user?.firstName} ${user?.lastName}`}</Typography>
                                            <Typography
                                                variant="h6"
                                                className="text-rich-black-500 border-none text-sm font-medium"
                                            >
                                                {course?.name}
                                            </Typography>
                                        </Box>
                                    </CardHeader>
                                    <CardContent className="pl-0">
                                        <Typography
                                            variant="p"
                                            className="text-rich-black-25 text-sm font-medium"
                                        >
                                            {review.split(' ').length > truncate
                                                ? `${review
                                                      .split(' ')
                                                      .slice(0, truncate)
                                                      .join(' ')} ...`
                                                : `${review}`}
                                        </Typography>
                                    </CardContent>
                                    <CardFooter className="flex items-center gap-2 pb-0 pl-0">
                                        <Typography
                                            variant="h6"
                                            className="translate-y-0.5 text-sm font-semibold text-yellow-100"
                                        >
                                            {rating.toFixed(1)}
                                        </Typography>
                                        <ReactStars
                                            count={5}
                                            value={rating}
                                            size={20}
                                            edit={false}
                                            activeColor="#ffd700"
                                            emptyIcon={<FaStar />}
                                            fullIcon={<FaStar />}
                                        />
                                    </CardFooter>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                {children}
            </Section>
        );
    },
);

export default Review;
