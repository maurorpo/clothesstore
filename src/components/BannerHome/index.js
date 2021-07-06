import './BannerHome.css'

const BannerHome = ({imgBanner}) => {
  return(
    <div className="bannerHome">
      <img src={imgBanner} alt="Imagen principal banner" />
    </div>
  );
}

export default BannerHome;