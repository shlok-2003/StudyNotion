import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef, SwiperSlideProps } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import apiConnecter from '@/api/apiConnect';
import { review as reviewAPI } from '@/api/apis';

// TODO: Add types
// type reviewProps = {

// }[];

export default function Reviews() {
    const [review, setReview] = useState([]);
    const truncate: number = 20;
    const swiperRef = useRef<SwiperRef>(null);

    useEffect(() => {
        (async function () {
            const { data } = await apiConnecter({
                method: 'GET',
                url: reviewAPI.REVIEW_API,
            });

            if (data?.success) {
                setReview(data?.rating);
            }
        })();
    }, [review]);

    console.log(review, 'review');

    return (
        <section className="flex flex-col justify-center items-center gap-10 px-10 py-10 lg:py-24 lg:px-28 space-y-10">
            <h1 className="text-3xl font-medium text-center text-richblack-5">
                Reviews from other learners
            </h1>

            <div>
                <Swiper 
                    ref={swiperRef}
                    slidesPerView={1}
                    
                ></Swiper>
            </div>
        </section>
    );
}
