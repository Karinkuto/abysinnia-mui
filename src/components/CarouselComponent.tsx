import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
      <Slider {...settings}>
        <div>
          <img
            src="/img1.png"
            alt="Slide 1"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
        <div>
          <img
            src="/img2.png"
            alt="Slide 2"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
        <div>
          <img
            src="/img3.png"
            alt="Slide 3"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
        <div>
          <img
            src="/img4.png"
            alt="Slide 4"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
