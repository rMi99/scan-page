import {React} from "react";
import "../index.css";
// import useLanguage from "../../../utils/useLanguage";
import useUpdateDomTitle from "../../../utils/updateDomTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";


let SocialMediaPreview = (props) => {

  useUpdateDomTitle('Online QR Generator - Scanned Page | Social Media',"#A8BDE2");
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="w-full h-[180px] xs:h-[250px] sm:h-[275px] bg-[#A8BDE2] -z-10 absolute top-0"></div>
      <div className="flex flex-col items-center justify-center w-full max-w-[600px] mt-[45px] xsm:mt-[54px]">
        <div className="w-full flex flex-row items-center justify-end px-[20px]">
          <div className="w-[35px] h-[35px] xs:w-[48px] xs:h-[48px] bg-white/[.15] rounded-[4px] mb-[5px] border-[1px] border-white/[.18] cursor-pointer flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
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
              
              <SwiperSlide>
                <img src="/images/images/new/social media/1.webp" alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/images/new/social media/2.webp" alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/images/new/social media/3.webp" alt=""/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-[20px] mb-5">
          <p className="text-black text-base xxs:text-lg xs:text-xl sm:text-3xl font-bold mb-4">Ariel Campbell</p>
          <p className="text-[#767C83] text-[10px] xxs:text-xs xs:text-sm sm:text-base font-normal mb-4">Welcome to my digital hub, where I share insights, creations, and more. Dive in to stay updated and connected with me across the web.</p>
        </div>
        <div className="mb-[20px] w-full flex flex-col items-start justify-center px-[20px]">
          <p className="text-lg xs:text-xl text-[#131D29] font-bold mb-[10px]">Find me on</p>
          <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
            <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
              <div className="space-x-[10px] xs:space-x-[20px] flex flex-row">
                <img src="/images/social/facebook.png" width="132" height="132" className="w-[44px]" alt=""/>
                <div className="flex-col text-left">
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">Facebook</p>
                  <p className="text-[10px] xs:text-xs text-[#767C83]">Social Account</p>
                </div>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
              </svg>
            </div>
          </div>
          <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
            <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
              <div className="space-x-[10px] xs:space-x-[20px] flex flex-row">
                <img src="/images/social/instagram.webp" width="132" height="132" className="w-[44px]" alt=""/>
                <div className="flex-col text-left">
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">Instagram</p>
                  <p className="text-[10px] xs:text-xs text-[#767C83]">Social Account</p>
                </div>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
              </svg>
            </div>
          </div>
          <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
            <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
              <div className="space-x-[10px] xs:space-x-[20px] flex flex-row">
                <img src="/images/social/tiktok.png" width="132" height="132" className="w-[44px]" alt=""/>
                <div className="flex-col text-left">
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">TikTok</p>
                  <p className="text-[10px] xs:text-xs text-[#767C83]">Social Account</p>
                </div>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
              </svg>
            </div>
          </div>
          <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
            <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
              <div className="space-x-[10px] xs:space-x-[20px] flex flex-row">
                <img src="/images/social/youtube.png" width="132" height="132" className="w-[44px]" alt=""/>
                <div className="flex-col text-left">
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">YouTube</p>
                  <p className="text-[10px] xs:text-xs text-[#767C83]">Social Account</p>
                </div>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
                <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default SocialMediaPreview;
