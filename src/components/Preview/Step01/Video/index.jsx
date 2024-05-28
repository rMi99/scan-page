import { React } from "react";
import "../../index.css";
import useUpdateDomTitle from "../../../../utils/updateDomTitle";
import useLanguage from "../../../../utils/useLanguage";
import { useAdjustZoom } from "../../../../utils/utils";


let VideoPreview = () => {

  const t = useLanguage();

  useUpdateDomTitle('Online QR Generator - Scanned Page | Video',"#AEE301");

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip set-height-pos top-[-30px]">
        <svg width="475" height="626" viewBox="0 0 375 526" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H375V506C375 506 293.5 461 187.5 506C81.5 551 0 506 0 506V0Z" className="duration-500" fill="#AEE301"/>
        </svg>
      </div> */}
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <div className="qr-backdrop" style={{'--bg-color': "#AEE301",'--height':'475px'}} id="color_palette">
          <svg width="375" height="526" viewBox="0 0 375 526" fill="none" xmlns="http://www.w3.org/2000/svg" className="!w-auto !h-full">
            <path d="M0 0H375V506C375 506 293.5 461 187.5 506C81.5 551 0 506 0 506V0Z" className="duration-500" fill={'var(--bg-color)'}/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[50px] xs:mt-[75px] w-full max-w-[700px] px-[14px] sm:px-[20px]" >
        <p className="text-black text-sm xs:text-base w-full font-medium mb-[10px] xs:mb-[21px]">Emily’s Kitchen</p>
        <h1 className="text-black text-lg xxs:text-xl xs:text-2xl sm:text-[28px] font-bold text-center mb-[10px] xs:mb-[21px]">{t('video.title')}</h1>
        <p className="text-black text-sm xs:text-base sm:text-lg w-full mb-[10px] xs:mb-[27px]">{t('video.description')}</p>
        <div className="w-full max-w-[500px] flex justify-center items-center bg-transparent rounded-[4px] border-[1px] border-[#000] mb-[15px] xs:mb-[33px] py-[14px] cursor-pointer hover:opacity-80">
          <p className="text-base xs:text-lg sm:text-xl font-medium text-black">{t('video.view_more')}</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-white px-[10px] py-[28px] mb-[30px] rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <div className="w-full relative">
            <div className="cursor-pointer hover:opacity-90">
              <img src="/images/images/new/play.webp" className="absolute m-auto inset-0 z-10 w-[90px]" alt=""/>
            </div>
            <img src="/images/images/new/video.webp" className="w-full" alt=""/>
          </div>
          <p className="w-full text-[#767C83] text-xs xxs:text-sm mt-[13px] text-left">
            {t('video.video_description')}
          </p>
        </div>
      </div>
    </div>

  );
};

let VideoShowcase= () => {
  const t = useLanguage();
  const container = useAdjustZoom();

  return (
    <div className="flex flex-col justify-center items-center" ref={container}>
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <svg className="hidden md:block top-0 absolute" width="2070" height="683" viewBox="0 0 2070 683" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H2070V657.03C2070 657.03 1620.12 598.599 1035 657.03C449.88 715.462 0 657.03 0 657.03V0Z" fill="#AEE301" />
        </svg>
        <svg className="block md:hidden top-0 absolute" width="770" height="350" viewBox="0 0 770 503" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H770V483.875C770 483.875 602.653 440.842 385 483.875C167.347 526.907 0 483.875 0 483.875V0Z" fill="#AEE301" />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center mt-[50px] xs:mt-[75px] w-full max-w-[700px] px-[14px] sm:px-[20px]" >
        <p className="text-black text-xs w-full font-medium mb-[10px] xs:mb-[21px]">Emily’s Kitchen</p>
        <h1 className="text-black text-lg font-extrabold text-center mb-[15px]">{t('video.title')}</h1>
        <p className="text-black text-xs  w-full mb-[25px]">{t('video.description')}</p>
        <div className="w-full max-w-[500px] flex justify-center items-center bg-transparent rounded-[4px] border-[1px] border-[#000] mb-[25px] py-[10px] cursor-pointer hover:opacity-80">
          <p className="text-sm font-semibold text-black">{t('video.view_more')}</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-white px-[10px] py-[20px] mb-[30px] rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <div className="w-full relative">
            <div className="cursor-pointer hover:opacity-90">
              <img src="/images/images/new/play.webp" className="absolute m-auto inset-0 z-10 w-[70px]" alt=""/>
            </div>
            <img src="/images/images/new/video.webp" className="w-full" alt=""/>
          </div>
          <p className="w-full text-[#767C83] text-xs xxs:text-sm mt-[13px] text-left rtl:text-right">
            {t('video.video_description')}
          </p>
        </div>
      </div>
    </div>

  );
};

export {VideoPreview,VideoShowcase};
