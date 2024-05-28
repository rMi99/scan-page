import React, { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
// import required modules
import { EffectCards } from "swiper";
import useUpdateDomTitle from "../../utils/updateDomTitle";
import { isLight } from "../../utils/Color";
import { useAdjustBackdropHeight } from "../backdrop";
import useScroller from "../../utils/Scroller";
import WelcomeScreen from "../common/WelcomeScreen";
import ShortenedUrl from "../../utils/shortenedurl";
import linkFixer from "../../utils/LinkFixer";

let Images = ({qrData}) => {
  const [welcomeScreen, showWelcomeScreen] = useState(false);
  const data = qrData

  useUpdateDomTitle(data?.image_title,data?.primaryColor);

  useEffect(()=>{
    showWelcomeScreen(data?.screen ? true : false);
  },[data?.screen])

  const ignoredColors = ['#28C254'];
  const light = isLight(data.primaryColor, ignoredColors);
  //const [image, setCurrentImage] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeImageViewer = () => {
    setCurrentImage(null);
    setIsViewerOpen(false);
  };

  const openImageViewer = useCallback((index) => {
    let clickTimer = null;

    if (clickTimer === null) {

      clickTimer = setTimeout(() => {
        setCurrentImage(index);
        setIsViewerOpen(true);
        clickTimer = null;
      }, 100);

    } else {

      clearTimeout(clickTimer);
      clickTimer = null;
      setCurrentImage(index);
      setIsViewerOpen(true);

    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const d = setTimeout(() => {
      showWelcomeScreen(false);
      data.screen = false;
    }, 3000);

    return ()=>clearTimeout(d);

  }, [data]);

  const openURL = (url) => {
    window.open(linkFixer(url), "_blank");
  };

  let backdropElement = useRef(null);
  let backdropEndElement = useRef(null);
  let backdropEndFallbackElement = useRef(null);

  useAdjustBackdropHeight(backdropElement, backdropEndElement, backdropEndFallbackElement,data);

  useScroller(data);

  return welcomeScreen ? (
    <WelcomeScreen screen={data?.screen} />
  ) : (
    <div className="flex flex-col justify-center items-center" style={{fontFamily: data?.font_text}}>
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip" id="color_palette">
        <div ref={backdropElement} className="qr-backdrop" style={{'--bg-color': data?.primaryColor || "#28C254"}}>

          <svg width="375" height="526" viewBox="0 0 375 526" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H375V506C375 506 293.5 461 187.5 506C81.5 551 0 506 0 506V0Z" className="duration-500" fill={'var(--bg-color)'}/>
          </svg>

        </div>
        
      </div>
      <div
        className="flex flex-col items-center justify-center mt-[50px] w-full max-w-[700px]"
      >
        <div id="image_title" style={!data?.horizontal ? {borderTop:`2px solid ${data?.primaryColor}`} : {}}></div>
        {data?.image_title? (
          <h1 className={`text-${light ? "black" : "white"} xxs:text-xl xs:text-2xl sm:text-[28px] font-bold text-center mb-[10px] xs:mb-[25px] px-[20px] duration-500`} style={{fontFamily: data?.font_title}}>{data?.image_title}</h1>
        ) : (
          <></>
        )}
        {data?.image_description? (
          <p className={`text-${light ? "black" : "white"} text-sm xs:text-lg w-full mb-[10px] xs:mb-[25px] px-[20px] duration-500 whitespace-break-spaces text-balance`} style={{fontFamily: data?.font_text, overflowWrap: "anywhere"}}>{data?.image_description}</p>
        ) : (
          <></>
        )}
        
        {data?.buttons.length ? (
          <div className="w-full flex flex-col xs:mb-[10px] space-y-[15px] xs:mt-[11px] px-[20px]">
            {data?.buttons?.filter((e,i)=>{return e.text !== '' ? true : false}).map((e,i) => (
              <div 
                className=" flex justify-center items-center bg-black/[.15] rounded-[4px] border border-white mb-[10px] mt-[11px] py-[14px] cursor-pointer hover:opacity-80"
                style={{fontFamily: data?.font_text}}
                key={i}
                onClick={() => {
                  if (e.url === "#"){
                    //noting
                  } else if (!/^https?:\/\//i.test(e.url)) {
                    window.open(`http://${e.url}`, '_blank');
                  } else {
                    window.open(linkFixer(e.url), '_blank');
                  }
                }}
                id={`button_url_${i+1}`}
              >
                <p className={`text-${light ? "black" : "white"} text-sm xxs:text-base xs:text-lg sm:text-xl duration-500`} id={`button_text_${i+1}`} style={{fontFamily: data?.font_text}}>{e.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}

        <div ref={backdropEndFallbackElement}></div>

        {data?.images?.length < 3 ? (
          <div className="w-full relative">
            {data?.horizontal ? (
              data?.images.map((i, idx) => (
                <div className="flex flex-col items-center justify-center w-full space-y-[10px] xs:space-y-[15px] my-[8px] xs:my-[15px] px-[20px]" key={i}>
                  <img
                    ref={(el) => {
                      backdropEndElement.current = (idx === 0) ? el : backdropEndElement.current;
                    }}
                    src={i}
                    onClick={()=>openImageViewer(idx)}
                    className="w-full z-10 rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
                    alt=""
                  />
                </div>
              ))
            ):(
              <div className="swiper-wrap my-[20px]">
                <div className="swiper-container"
                  ref={backdropEndElement}
                >
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    modules={[EffectCards]}
                    cardsEffect={{
                      rotate: false,
                      perSlideOffset: 18,
                      slideShadows: false,
                    }}
                    className="mySwiper"
                  >
                    {data?.images.map((i, index) => (
                      <SwiperSlide key={index} >
                        <img src={i} alt={`Slide ${i}`} id={index} key={ index } onClick={ () => openImageViewer(index) } />
                      </SwiperSlide>
                  ))}
                </Swiper>
                </div>
              </div>
            )}
          </div>
        ) : (
          <></> 
        )}
        {data?.images?.length > 2 ? (
          <div className="w-full relative">
            {data?.horizontal ? (
              data?.images.map((i, idx) => (
                <div className="flex flex-col items-center justify-center w-full space-y-[10px] xs:space-y-[15px] my-[8px] xs:my-[15px] px-[20px]" key={i}>
                  <img 
                    ref={(el) => {
                      backdropEndElement.current = (idx === 0) ? el : backdropEndElement.current;
                    }}
                    src={i}
                    onClick={()=>openImageViewer(idx)}
                    className="w-full z-10 rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
                    alt=""
                  />
                </div>
              ))
            ):(
              <div className="swiper-wrap my-[20px]">
                <div className="swiper-container"
                  ref={backdropEndElement}
                >
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
                    className="mySwiper"
                  >
                    {data?.images.map((i, index) => (
                      <SwiperSlide key={index} >
                        <img src={i} alt={`Slide ${i}`} id={index} key={ index } onClick={ () => openImageViewer(index) } />
                      </SwiperSlide>
                  ))}
                </Swiper>
                </div>
              </div>
            )}
          </div>
        ) : (
          <></> 
        )}
        {isViewerOpen && (
        <div
          style={{
            zIndex: 99,
          }}
        >
          <ImageViewer
            src={ data.images }
            currentIndex={ currentImage }
            disableScroll={true}
            closeOnClickOutside={false}
            onClose={closeImageViewer}
            leftArrowComponent={<ArrowLeft />}
            rightArrowComponent={<ArrowRight />}
          />
        </div>
      )}
        {data?.website? (
          <div className="w-full flex flex-col items-start justify-center px-[20px]">
            <button
              onClick={() => {
                if (data.website === "#"){
                  //do noting :D
                } else {
                  openURL(data.website);
                }     
              }}
              className="mb-[20px] flex flex-col w-full bg-white cursor-pointer rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80"
              id="website"
            >
              <div className="flex flex-row w-full justify-between items-center p-[5px] rounded-[4px]">
                <div className="space-x-[5px] sm:space-x-[14px] max-w-full  items-center flex flex-row">
                  <div className="w-[40px] h-[40px] min-w-[30px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center rtl:ml-2">
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0003 21.5781C6.31741 21.5781 1.69824 17.0594 1.69824 11.5C1.69824 5.94063 6.31741 1.42188 12.0003 1.42188C17.6832 1.42188 22.3024 5.94063 22.3024 11.5C22.3024 17.0594 17.6832 21.5781 12.0003 21.5781ZM12.0003 2.82812C7.11283 2.82812 3.13574 6.71875 3.13574 11.5C3.13574 16.2812 7.11283 20.1719 12.0003 20.1719C16.8878 20.1719 20.8649 16.2812 20.8649 11.5C20.8649 6.71875 16.8878 2.82812 12.0003 2.82812Z" fill="#767C83"/>
                      <path d="M9.12547 20.6406H8.16714C7.77422 20.6406 7.44839 20.3219 7.44839 19.9375C7.44839 19.5531 7.75505 19.2437 8.14797 19.2344C6.64339 14.2094 6.64339 8.79063 8.14797 3.76562C7.75505 3.75625 7.44839 3.44687 7.44839 3.0625C7.44839 2.67812 7.77422 2.35938 8.16714 2.35938H9.12547C9.35547 2.35938 9.57589 2.47187 9.71005 2.65C9.84422 2.8375 9.88255 3.07187 9.80589 3.2875C8.00422 8.58437 8.00422 14.4156 9.80589 19.7219C9.88255 19.9375 9.84422 20.1719 9.71005 20.3594C9.57589 20.5281 9.35547 20.6406 9.12547 20.6406Z" fill="#767C83"/>
                      <path d="M14.8753 20.6405C14.7986 20.6405 14.722 20.6311 14.6453 20.603C14.2715 20.4811 14.0607 20.078 14.1949 19.7124C15.9965 14.4155 15.9965 8.58427 14.1949 3.27802C14.0703 2.91239 14.2715 2.50927 14.6453 2.38739C15.0286 2.26552 15.4311 2.46239 15.5557 2.82802C17.4628 8.41552 17.4628 14.5655 15.5557 20.1436C15.4599 20.453 15.1724 20.6405 14.8753 20.6405Z" fill="#767C83"/>
                      <path d="M12 16.375C9.32625 16.375 6.66208 16.0094 4.09375 15.2687C4.08417 15.6437 3.76792 15.9531 3.375 15.9531C2.98208 15.9531 2.65625 15.6344 2.65625 15.25V14.3125C2.65625 14.0875 2.77125 13.8719 2.95333 13.7406C3.145 13.6094 3.38458 13.5719 3.605 13.6469C9.01958 15.4094 14.99 15.4094 20.4046 13.6469C20.625 13.5719 20.8646 13.6094 21.0562 13.7406C21.2479 13.8719 21.3533 14.0875 21.3533 14.3125V15.25C21.3533 15.6344 21.0275 15.9531 20.6346 15.9531C20.2417 15.9531 19.9254 15.6531 19.9158 15.2687C17.3379 16.0094 14.6737 16.375 12 16.375Z" fill="#767C83"/>
                      <path d="M20.6246 9.39053C20.548 9.39053 20.4713 9.38115 20.3946 9.35303C14.98 7.59053 9.00963 7.59053 3.59505 9.35303C3.21171 9.4749 2.80921 9.27803 2.68463 8.9124C2.56963 8.5374 2.77088 8.14365 3.14463 8.02178C8.8563 6.15615 15.143 6.15615 20.845 8.02178C21.2188 8.14365 21.4296 8.54678 21.2955 8.9124C21.2092 9.20303 20.9217 9.39053 20.6246 9.39053Z" fill="#767C83"/>
                    </svg>
                  </div>
                  <div className="flex items-center text-left truncate">
                    <p 
                      className="text-sm xs:text-base sm:text-xl text-[#0079FF] truncate"
                      style={{fontFamily: data?.font_text}}
                    >
                      {data.website === "#" ? "www.mypictures.com" : <ShortenedUrl url={data.website} />}
                    </p>
                  </div>
                </div>
                <svg className="hidden xs:flex mr-[5px] rtl:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83"/>
                  <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83"/>
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
const ArrowLeft = () => (
  <div 
    className="flex justify-center items-center w-[35px] h-[35px] xs:w-[45px] xs:h-[45px]"
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.25)'
    }}
  >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#fff"/>
      </svg>
  </div>
);

const ArrowRight = () => (
  <div 
    className="flex justify-center items-center w-[35px] h-[35px] xs:w-[45px] xs:h-[45px]"
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.25)'
    }}
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#fff"/>
    </svg>
  </div>
);
export default Images;
