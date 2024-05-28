import { React } from "react";
import "../../index.css";
import useUpdateDomTitle from "../../../../utils/updateDomTitle";
import useLanguage from "../../../../utils/useLanguage";
import { useAdjustZoom } from "../../../../utils/utils";


let ListOfLinksPreview = (props) => {

  const t = useLanguage();
  useUpdateDomTitle('Online QR Generator - Scanned Page | Links',"#37C1B4");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center relative w-full h-[138px] -z-10 bg-[#37C1B4]"></div>
      <div
        className="flex flex-col items-center justify-center bg-white relative -mt-[10px] w-full max-w-[700px] px-[16px] rounded-t-[10px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
        >
        <div className="absolute bg-white -top-[60px] w-[120px] h-[120px] flex justify-center items-center rounded-full">
          <img src="/images/images/new/avatar2.webp" className="w-[92px] rounded-full" width="277" height="276" alt=""/>
        </div>
        <div className="mt-[60px] xs:mt-[93px] text-[#131D29] pb-[7px] xs:pb-[14px] border-b-[1px] border-black/[.05]">
          <h1 className="text-lg xs:text-xl sm:text-2xl mb-[5px] xs:mb-[9px] font-bold">Jenny Leslie</h1>
          <h2 className="text-sm xs:text-base">{t('links.about')}</h2>
        </div>
        
        <div className="mt-[10px] xs:mt-[25px] w-full flex flex-col  text-white items-start justify-center space-y-[8px] xs:space-y-[15px]">
          <div className="flex flex-col w-full cursor-pointer bg-[#37C1B4] hover:opacity-80">
            <div className="flex flex-row justify-between items-center p-[5px] xs:p-[10px] rounded-[4px]">
              <div className="space-x-[7px] xs:space-x-[15px] sm:space-x-[22px] flex flex-row items-center">
                <img src="/images/ListOfLinks/makeup.png" width="84" height="84" className="w-[42px] rtl:ml-2" alt=""/>
                  <p className="text-[13px] xs:text-lg sm:text-xl text-left text-white font-medium rtl:text-base rtl:leading-4 rtl:text-right">{t('links.link.About1')}</p>
              </div>
              <svg className="min-w-[25px] mr-[2px] xs:mr-[5px] rtl:rotate-180" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="white"/>
                <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col w-full cursor-pointer bg-[#37C1B4] hover:opacity-80">
            <div className="flex flex-row justify-between items-center p-[5px] xs:p-[10px] rounded-[4px]">
              <div className="space-x-[7px] xs:space-x-[15px] sm:space-x-[22px] flex flex-row items-center">
                <img src="/images/ListOfLinks/instagram.png" width="84" height="84" className="w-[42px] rtl:ml-2" alt=""/>
                  <p className="text-[13px] xs:text-lg sm:text-xl text-left text-white font-medium rtl:text-base rtl:leading-4 rtl:text-right">Instagram {t('links.link.About2')}</p>
              </div>
              <svg className="min-w-[25px] mr-[2px] xs:mr-[5px] rtl:rotate-180" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="white"/>
                <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col w-full cursor-pointer bg-[#37C1B4] hover:opacity-80">
            <div className="flex flex-row justify-between items-center p-[5px] xs:p-[10px] rounded-[4px]">
              <div className="space-x-[7px] xs:space-x-[15px] sm:space-x-[22px] flex flex-row items-center">
                <img src="/images/ListOfLinks/tiktok.png" width="84" height="84" className="w-[42px] rtl:ml-2" alt=""/>
                  <p className="text-[13px] xs:text-lg sm:text-xl text-left text-white font-medium rtl:text-base rtl:leading-4 rtl:text-right">TikTok {t('links.link.About3')}</p>
              </div>
              <svg className="min-w-[25px] mr-[2px] xs:mr-[5px] rtl:rotate-180" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="white"/>
                <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col w-full cursor-pointer bg-[#37C1B4] hover:opacity-80">
            <div className="flex flex-row justify-between items-center p-[5px] xs:p-[10px] rounded-[4px]">
              <div className="space-x-[7px] xs:space-x-[15px] sm:space-x-[22px] flex flex-row items-center">
                <img src="/images/ListOfLinks/youtube.png" width="84" height="84" className="w-[42px] rtl:ml-2" alt=""/>
                  <p className="text-[13px] xs:text-lg sm:text-xl text-left text-white font-medium rtl:text-base rtl:leading-4 rtl:text-right">{t('links.link.About4')}</p>
              </div>
              <svg className="min-w-[25px] mr-[2px] xs:mr-[5px] rtl:rotate-180" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="white"/>
                <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col w-full cursor-pointer bg-[#37C1B4] hover:opacity-80">
            <div className="flex flex-row justify-between items-center p-[5px] xs:p-[10px] rounded-[4px]">
              <div className="space-x-[7px] xs:space-x-[15px] sm:space-x-[22px] flex flex-row items-center">
                <img src="/images/ListOfLinks/demo.png" width="84" height="84" className="w-[42px] rtl:ml-2" alt=""/>
                  <p className="text-[13px] xs:text-lg sm:text-xl text-left text-white font-medium rtl:text-base rtl:leading-4 rtl:text-right">{t('links.link.About5')}</p>
              </div>
              <svg className="min-w-[25px] mr-[2px] xs:mr-[5px] rtl:rotate-180" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="white"/>
                <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-[10px] mb-[25px] xs:my-[25px] w-full flex flex-col items-start justify-center">
          <p className="text-xl text-[#131D29] font-medium mb-[8px] xs:mb-[15px]">{t('links.findMe')}</p>
          <div className="w-full space-y-[8px] xs:space-y-[15px]">
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row">
                  <img src="/images/social/twitter.png" width="132" height="132" className="w-[44px] rtl:ml-2" alt=""/>
                  <div className="flex-col text-left rtl:text-right">
                    <p className="text-base xs:text-xl text-[#131D29] font-medium">Twitter</p>
                    <p className="text-[10px] xs:text-xs text-[#767C83]">{t('links.socialAccType')}</p>
                  </div>
                </div>
                <svg className="min-w-[25px] rtl:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

let ListOfLinksShowcase = (props) => {
  const t = useLanguage();
  const container = useAdjustZoom();

  return (
    <div className="flex flex-col justify-center items-center" ref={container}>
      <div className="flex items-center justify-center relative w-full h-[102px] -z-10 bg-[#37C1B4]"></div>
      <div
        className="flex flex-col items-center justify-center bg-white relative -mt-[10px] w-full max-w-[700px] px-[16px] rounded-t-[10px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
        >
        <div className="absolute bg-white -top-[40px] w-[85px] h-[85px] flex justify-center items-center rounded-full">
          <img src="/images/images/new/avatar2.webp" className="w-[65px] rounded-full" width="277" height="276" alt=""/>
        </div>
        <div className="mt-[60px] text-[#131D29] pb-[7px] border-b-[1px] border-black/[.05]">
          <h1 className="text-[18px] mb-[3px] font-bold">Jenny Leslie</h1>
          <h2 className="text-xs">{t('links.about')}</h2>
        </div>
        <div className="mt-[15px] w-full flex flex-col  text-white items-start justify-center space-y-[10px]">
        {[
          {icon:'makeup.png',text:t('links.link.About1')},
          {icon:'instagram.png',text: 'Instagram ' + t('links.link.About2')},
          {icon:'tiktok.png',text:'TikTok ' + t('links.link.About3')},
          {icon:'youtube.png',text:t('links.link.About4')},
          {icon:'demo.png',text:t('links.link.About5')},
        ].map((s,i)=>(
          <div className="flex flex-col w-full cursor-pointer bg-[#37C1B4] hover:opacity-80 rounded" key={i}>
            <div className="flex flex-row justify-between items-center p-[5px] rounded-[4px]">
              <div className="space-x-[15px] flex flex-row items-center">
                <img src={`/images/ListOfLinks/${s.icon}`} width="84" height="84" className="w-[30px] rtl:ml-2" alt=""/>
                <p className="text-[13px] text-left text-white font-bold">{s.text}</p>
              </div>
              <svg className="min-w-[15px] mr-[2px] rtl:rotate-180" width="18" height="19" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill="white"/>
                <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill="white"/>
              </svg>
            </div>
          </div>
        ))}
        </div>

        <div className="mt-[10px] mb-[25px] xs:my-[25px] w-full flex flex-col items-start justify-center">
          <p className="text-xl text-[#131D29] font-medium mb-[8px] xs:mb-[15px]">{t('links.findMe')}</p>
          <div className="w-full space-y-[8px] xs:space-y-[15px]">
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row">
                  <img src="/images/social/twitter.png" width="132" height="132" className="w-[44px]" alt=""/>
                  <div className="flex-col text-left">
                    <p className="text-base xs:text-xl text-[#131D29] font-medium">Twitter</p>
                    <p className="text-[10px] xs:text-xs text-[#767C83]">{t('links.socialAccType')}</p>
                  </div>
                </div>
                <svg className="min-w-[25px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export {ListOfLinksPreview,ListOfLinksShowcase};
