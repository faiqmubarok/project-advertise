import { FaWhatsapp } from "react-icons/fa";
import { useTypewriter } from 'react-simple-typewriter'
import propTypes from 'prop-types';

const PriceSection = ({priceBefore, priceAfter}) => {
    const [text] = useTypewriter({
        words: ['Khusus Hari ini Harganya jadi', 'Beli Sekarang'],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 2000
      })
      const formatRupiah = (amount) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(amount);
      };
  return (
    <section className='flex flex-col py-10'>
        <h2 className='w-full text-center text-2xl font-semibold h-8 text-[#2c2c2c]'>{text}</h2>
        <div className="pt-5 pb-10">
            <p className='text-sm font-normal line-through text-center mb-2 text-[#2c2c2c]'>{formatRupiah(priceBefore)}</p>
            <h2 className='text-5xl font-bold text-[#fe2517] text-center'>{formatRupiah(priceAfter)}</h2>
        </div>
        <a 
          href='https://wa.me/6285283088209?text=Halo,%20saya%20ingin%20memesan%20produk%20Smart%20Slice' 
          target='_blank' 
          className="button-88 w-fit font-bold text-xl mx-auto uppercase transition-transform duration-300 animate-pulseButton noopener noreferrer">
          <FaWhatsapp className='w-10 h-10 mr-2' />
          Order Via Whatsapp
        </a>
      </section>
  )
}

PriceSection.propTypes = {
  priceBefore: propTypes.number,
  priceAfter: propTypes.number
}

export default PriceSection
