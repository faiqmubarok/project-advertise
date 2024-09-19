import Marquee from 'react-fast-marquee';
import propTypes from 'prop-types';

const MarqueeText = ({ textArray, direction }) => {
  return (
    <div className={`w-full bg-[#5c5c5c] px-10 absolute top-0 p-2`}>
      <Marquee gradient={false} speed={50} direction={direction}>
        {textArray.map((text, index) => (
          <p key={index} className="text-lg text-[#f0f0f0] font-bold mr-10">
            {text}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

MarqueeText.propTypes = {
  textArray: propTypes.arrayOf(propTypes.string), 
  direction: propTypes.string
};

export default MarqueeText;
