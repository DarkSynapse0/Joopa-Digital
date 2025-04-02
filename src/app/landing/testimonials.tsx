'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Jane D',
    role: 'CEO',
    rating: 4.9,
    review: 'Joopa Digital has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.',
    image: 'https://pagedone.io/asset/uploads/1696229969.png',
  },
  {
    id: 2,
    name: 'Harsh P.',
    role: 'Product Designer',
    rating: 4.9,
    review: 'Thanks to Joopa Digital, I feel more informed and confident about my investment decisions than ever before.',
    image: 'https://pagedone.io/asset/uploads/1696229994.png',
  },
  {
    id: 3,
    name: 'Alex K.',
    role: 'Design Lead',
    rating: 4.9,
    review: 'The customer service team at Joopa Digital went above and beyond to help me resolve a billing issue.',
    image: 'https://pagedone.io/asset/uploads/1696230027.png',
  },
  {
    id: 4,
    name: 'Alex K.',
    role: 'Design Lead',
    rating: 4.9,
    review: 'The customer service team at Joopa Digital went above and beyond to help me resolve a billing issue.',
    image: 'https://pagedone.io/asset/uploads/1696230027.png',
  },
];

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  review: string;
  image: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 0.25 }}
    className="group bg-white border border-gray-300 rounded-xl p-6 hover:border-orange-600 hover:shadow-lg transition-all"
  >
    <div className="flex items-center gap-2 text-amber-500 mb-4">
      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C..." />
      </svg>
      <span className="text-base font-semibold text-orange-600">{testimonial.rating}</span>
    </div>
    <p className="text-gray-600 leading-6 mb-4">{testimonial.review}</p>
    <div className="flex items-center gap-4 border-t pt-4">
      <img className="rounded-full h-10 w-10 object-cover" src={testimonial.image} alt={testimonial.name} />
      <div>
        <h5 className="text-gray-900 font-medium">{testimonial.name}</h5>
        <span className="text-sm text-gray-500">{testimonial.role}</span>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-sm text-gray-500 font-medium">TESTIMONIAL</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">What our happy users say!</h2>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="mt-15"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide className='mb-10 ' key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;