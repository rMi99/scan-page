import { React } from "react";
import "../index.css";
import useLanguage from "../../../utils/useLanguage";
import useUpdateDomTitle from "../../../utils/updateDomTitle";


let VideoPreview = (props) => {

  const t = useLanguage();

  useUpdateDomTitle('Online QR Generator - Scanned Page | Video',"#AEE301");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <svg className="hidden md:block top-0 absolute" width="2070" height="683" viewBox="0 0 2070 683" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H2070V657.03C2070 657.03 1620.12 598.599 1035 657.03C449.88 715.462 0 657.03 0 657.03V0Z" fill="#AEE301" />
        </svg>
        <svg className="block md:hidden top-0 absolute" width="770" height="503" viewBox="0 0 770 503" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H770V483.875C770 483.875 602.653 440.842 385 483.875C167.347 526.907 0 483.875 0 483.875V0Z" fill="#AEE301" />
        </svg>
      </div>
      <div
        className="flex flex-col items-center justify-center mt-[50px] xs:mt-[75px] w-full max-w-[700px] px-[14px] sm:px-[20px]"
      >
        <p className="text-black text-sm xs:text-base w-full font-medium mb-[10px] xs:mb-[21px]">Emily’s Kitchen</p>
        <h1 className="text-black text-lg xxs:text-xl xs:text-2xl sm:text-[28px] font-bold text-center mb-[10px] xs:mb-[21px]">{t('video.title')}</h1>
        <p className="text-black text-sm xs:text-base sm:text-lg w-full mb-[10px] xs:mb-[27px]">{t('video.description')}</p>
        <div className="w-full max-w-[500px] flex justify-center items-center bg-transparent rounded-[4px] border-[1px] border-[#000] mb-[15px] xs:mb-[33px] py-[14px] cursor-pointer hover:opacity-80">
          <p className="text-base xs:text-lg sm:text-xl font-medium text-black">{t('video.view_more')}</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-white px-[10px] pt-[10px] mb-[30px] rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <div className="w-full relative">
            <div className="cursor-pointer hover:opacity-90">
              <img src="/images/images/new/play.webp" className="absolute m-auto inset-0 z-10 w-[90px]" alt=""/>
            </div>
            <img src="/images/images/new/video.webp" className="w-full" alt=""/>
          </div>
          <p className="w-full text-[#767C83] text-xs xxs:text-sm mt-[13px] text-left rtl:text-right">
            {t('video.video_description')}
          </p>
        </div>

        <div className="w-full flex flex-col items-start justify-center mb-[20px]">
          <p className="text-lg xs:text-xl text-[#131D29] font-medium mb-[10px]">{t('global.social_network_title')}</p>
          <div className="w-full space-y-[15px]">
            {/* Facebook */}
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                  <img src="/images/social/facebook.png" width="132" height="132" className="w-[44px]" alt=""/>
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">{t('bushiness.facebook')}</p>
                </div>
                <svg className="mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83"/>
                  <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83"/>
                </svg>
              </div>
            </div>
            {/* Instagram */}
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                  <img src="/images/social/instagram.webp" width="132" height="132" className="w-[44px]" alt=""/>
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">{t('bushiness.instagram')}</p>
                </div>
                <svg className="mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83"/>
                  <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83"/>
                </svg>
              </div>
            </div>
            {/* Youtube */}
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                  <img src="/images/social/youtube.svg" width="132" height="132" className="w-[44px]" alt=""/>
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">{t('links.social.youtube')}</p>
                </div>
                <svg className="mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83"/>
                  <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83"/>
                </svg>
              </div>
            </div>
            {/* Tiktok */}
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                  <img src="/images/ListOfLinks/tiktok.png" width="132" height="132" className="w-[44px]" alt=""/>
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">TikTok</p>
                </div>
                <svg className="mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83"/>
                  <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default VideoPreview;
