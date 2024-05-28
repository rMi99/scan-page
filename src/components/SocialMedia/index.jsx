import {React, useEffect, useState} from "react";
import "../index.css";
// import useLanguage from "../../../utils/useLanguage";
import useUpdateDomTitle from "../../utils/updateDomTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import WelcomeScreen from "../common/WelcomeScreen";
import ShareOrCopy from "../../utils/share";
import SocialNetWorks from "../common/socialNetwork";
import useScroller from "../../utils/Scroller";

let SocialMedia = ({ qrData }) => {

  useUpdateDomTitle('Online QR Generator - Scanned Page | Social Media',"#A8BDE2");
  const [welcomeScreen, showWelcomeScreen] = useState(false);
  const data = qrData
  
  useEffect(()=>{
    showWelcomeScreen(data?.screen ? true : false);
  },[data?.screen])
  
  useScroller(data);
  return welcomeScreen ? (
    <WelcomeScreen screen={data?.screen} />
  ) : (
    <div className="flex flex-col justify-center items-center relative">
      <div 
        className="w-full h-[180px] xs:h-[250px] sm:h-[275px] bg-[#A8BDE2] -z-10 absolute top-0"
        style={{
          backgroundColor: data?.primaryColor || "#A8BDE2",
          height: data?.images.length > 0 ? "test" : "120px"
        }}
      ></div>
      <div className="flex flex-col items-center justify-center w-full max-w-[600px] mt-[45px] xsm:mt-[54px]">
        <div className="w-full flex flex-row items-center justify-end px-[20px]">
          <div 
            className="w-[35px] h-[35px] xs:w-[48px] xs:h-[48px] bg-white/[.15] rounded-[4px] mb-[5px] border-[1px] border-white/[.18] cursor-pointer flex items-center justify-center"
            
            onClick={()=>ShareOrCopy(data)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        {data?.images?.length < 3 ? (
          <div className="swiper-wrap my-[20px]">
            <div className="swiper-container">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                slidesPerView={"auto"}
                // loop={true}
                centeredSlides={true}
                modules={[EffectCards]}
                cardsEffect={{
                  rotate: false,
                  perSlideOffset: 18,
                  slideShadows: false,
                }}
                className="mySwiper w-full"
              >
                {data?.images.map((i, index) => (
                  <SwiperSlide key={index} >
                    <img src={i} alt={`Slide ${i}`} id={index} key={ index } />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ) : (
          <></> 
        )}
        {data?.images?.length > 2 ? (
          <div className="swiper-wrap my-[20px]">
            <div className="swiper-container">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                slidesPerView={"auto"}
                loop={true}
                centeredSlides={true}
                modules={[EffectCards]}
                cardsEffect={{
                  rotate: false,
                  perSlideOffset: 18,
                  slideShadows: false,
                }}
                className="mySwiper w-full"
              >
                {data?.images.map((i, index) => (
                  <SwiperSlide key={index} >
                    <img src={i} alt={`Slide ${i}`} id={index} key={ index } />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ) : (
          <></> 
        )}
        <div className="flex flex-col items-center justify-center px-[20px] mb-5">
          {data?.title? (
            <p className="text-black text-base xxs:text-lg xs:text-xl sm:text-3xl font-bold mb-4" style={{fontFamily: data?.font_title}}>{data?.title}</p>
          ):(
            <></>
          )}
          {data?.description? (
            <p className="text-[#767C83] text-[10px] xxs:text-xs xs:text-sm sm:text-base font-normal mb-4" style={{fontFamily: data?.font_title}}>{data?.description}</p>
          ):(
            <></>
          )}
        </div>
        <div className="mb-[20px] w-full flex flex-col items-start justify-center px-[20px]">
          <SocialNetWorks data={data} title="Find me on" boldheading="true"/>
        </div>
      </div>
    </div>
  
  );
};

export default SocialMedia;
