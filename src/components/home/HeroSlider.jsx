// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const slideData = [
  {
    image: "https://i.ibb.co.com/bgq79H0K/indoor.png",
    title: "Bring Nature Indoors",
    subtitle:
      "Find the perfect plant to purify your air and beautify your space.",
  },
  {
    image: "https://i.ibb.co.com/tprkwMbT/expert-care.png",
    title: "Expert Care, Happy Plants",
    subtitle:
      "From novice to expert, we provide the tips you need for a thriving indoor garden.",
  },
  {
    image: "https://i.ibb.co.com/zhsz1sb1/greener-home.png",
    title: "A Greener Home Awaits",
    subtitle:
      "Book a consultation with our experts to style your home with life.",
  },
];

const HeroSlider = () => {
  return (
    <div className="h-[calc(100vh-80px)] max-h-[700px] w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper h-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center relative">
                <div className="text-center text-white p-4 max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8">{slide.subtitle}</p>
                  <Link to="/plants">
                    <button className="btn btn-success bg-green-primary text-white border-none">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
