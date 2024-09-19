

import { IoIosArrowUp } from "react-icons/io";
import MarqueeText from './components/MarqueeText/MarqueeText';
import MainSection from './components/MainSection/MainSection';
import GallerySwiper from './components/GallerySwiper/GallerySwiper';
import PriceSection from './components/PriceSection/PriceSection';
import ChangeTitle from "./components/ChangeTitle";
import './style/index.css'
import data from './data/data.json'
import { useState, useEffect } from 'react';

const App = () => {
  const [isTop, setIsTop] = useState(true)

  const handleScroll = () => {
    if (window.scrollY > 100) { 
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <ChangeTitle title={'Smart Slice | Advertise'}/>
    <main className="font-poppins w-full max-w-screen-sm mx-auto relative py-16">
      <MarqueeText textArray={data['banner-marquee']} direction={'left'} />

      {/* Main Section */}
      <MainSection title={data['name-product']} category={data['category']} tagProduct={data['tag-product']} />

      {/* Price */}
      <PriceSection priceBefore={data['price-before']} priceAfter={data['price-after']} />

      {/* Specification */}
      <section className='py-5'>
        <div className="flex items-center mb-5">
          <hr className='w-full'/>
            <h2 className='shrink-0 px-10 text-xl font-semibold'>Spesifikasi & Detail</h2>
          <hr className='w-full' />
        </div>
        <GallerySwiper />
        <h4 className="shine-text text-center pl-4 mt-3">
          Swipe this &gt;&gt;&gt;
        </h4>

      </section>

      <a href='https://wa.me/6285283088209?text=Halo,%20saya%20ingin%20memesan%20produk%20Smart%20Slice' target='_blank' className="fixed bottom-4 left-1/2 z-40 p-4 -translate-x-1/2 bg-red-600 rounded-lg text-white w-full max-w-screen-sm noopener noreferrer text-center shadow-lg font-bold">Claim 50% OFF</a>
      
      {/* Button To Top */}
      { isTop && 
        <button onClick={scrollToTop} className='p-4 fixed bottom-4 right-4 bg-[#2c2c2c] rounded-full z-30'>
          <IoIosArrowUp className='w-5 h-5 text-white' />
        </button>
      }

      <div className="w-full absolute bottom-0 p-4 h-4 bg-[#5c5c5c]"></div>
  </main>
    </>
  )
}

export default App
