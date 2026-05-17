import './Banner.css';
import banner from '../../assets/banner.png';

function Banner() {
  return (
    <>
      <div className="banner">
        <img src={banner} alt="Banner" className="image-banner" />
      </div>
    </>
  );
}

export default Banner;
