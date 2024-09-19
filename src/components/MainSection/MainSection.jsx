import propTypes from 'prop-types';
import mainVidio from '../../assets/mainVidio.mp4'

const MainSection = ({ title, category, tagProduct }) => {

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <section className="w-full flex items-center justify-center flex-col py-5 border-b">
      <h1 className="text-3xl font-bold text-center uppercase text-[#2c2c2c]">{title}</h1>
      <h1 className="text-xl font-bold text-center uppercase mb-5 text-[#2c2c2c] px-10">{tagProduct}</h1>
      <video
        width="640"
        height="360"
        className='mb-5'
        controls
        muted
        autoPlay
        controlsList="nodownload"
        onContextMenu={handleContextMenu} // 
      >
        <source src={mainVidio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <ul className="flex flex-wrap gap-2 justify-center">
        {category.map((item, index) => (
          <li
            key={index}
            className="bg-[#f0f0f0] text-[#2c2c2c] text-xs font-medium me-2 px-2.5 py-0.5 rounded"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

MainSection.propTypes = {
  title: propTypes.string,
  category: propTypes.arrayOf(propTypes.string),
  tagProduct: propTypes.string
};

export default MainSection;
