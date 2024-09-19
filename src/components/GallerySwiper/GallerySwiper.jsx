import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

// Masukkan data gambar disini
import image1 from '../../assets/image-1.jpeg'
import image2 from '../../assets/image-2.jpeg'
import image3 from '../../assets/image-3.jpeg'
import image4 from '../../assets/image-4.jpeg'
import image5 from '../../assets/image-5.jpeg'

const GallerySwiper = () => {
  return (
    <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide><img loading='lazy' className='w-full h-auto' src={image1} alt="image1" /></SwiperSlide>
          <SwiperSlide><img loading='lazy' className='w-full h-auto' src={image2} alt="image2" /></SwiperSlide>
          <SwiperSlide><img loading='lazy' className='w-full h-auto' src={image3} alt="image3" /></SwiperSlide>
          <SwiperSlide><img loading='lazy' className='w-full h-auto' src={image4} alt="image4" /></SwiperSlide>
          <SwiperSlide><img loading='lazy' className='w-full h-auto' src={image5} alt="image5" /></SwiperSlide>
    </Swiper>
  )
}

export default GallerySwiper
