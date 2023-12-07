import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
// react swiper
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// react star rating
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-10">
            <SectionTitle subHeading={"What our client say"} heading={"Testimonials"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id} review={review}>
                        <div className="m-10 space-y-2 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p className="w-11/12">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

                {/* <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </section>
    );
};

export default Testimonials;