import { useState, React,useEffect } from "react";
import "../../index.css";
import useUpdateDomTitle from "../../../../utils/updateDomTitle";
import useLanguage from "../../../../utils/useLanguage";
import { useAdjustZoom } from "../../../../utils/utils";
import i18n from 'i18next';

let CouponPreview = () => {
  const [flip, setFlip] = useState(false);
  const [animation, setAnimation] = useState(false);

  const t = useLanguage();

  useUpdateDomTitle('Online QR Generator - Scanned Page | Coupon',"#C12EFE");

  return (
    <div className="flex flex-col min-h-screen min-w-full bg-[#C12EFE] items-center overflow-x-hidden" >
      <div className="flex flex-col items-center justify-center text-white mt-[50px] xs:mt-[57px] w-full max-w-[450px] px-[14px] sm:px-[16px] pb-[30px]">
        <div className="w-full flex flex-row items-center justify-between space-x-[6px] mb-[14px] xs:mb-[25px]">
          <h1 className="text-[15px] xs:text-xl sm:text-2xl text-left font-bold">{t('coupon.company')}</h1>
          <div className="min-w-[35px] xs:w-[48px] h-[35px] xs:h-[48px] bg-white/[.15] rounded-[4px] border-[1px] border-white cursor-pointer hover:opacity-80 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.6196 13.07C20.2396 13.07 19.9196 12.78 19.8696 12.4C19.6296 10.14 18.4096 8.08998 16.5296 6.78998C16.1896 6.54998 16.1096 6.08998 16.3396 5.74998C16.5796 5.40998 17.0496 5.32998 17.3796 5.55998C19.6196 7.10998 21.0596 9.54998 21.3496 12.24C21.3896 12.65 21.0996 13.02 20.6796 13.07C20.6696 13.07 20.6396 13.07 20.6196 13.07Z" fill="white" />
              <path d="M3.48991 13.12C3.45991 13.12 3.43991 13.12 3.40991 13.12C2.99991 13.07 2.69991 12.7 2.73991 12.29C3.00991 9.60001 4.43991 7.17001 6.64991 5.60001C6.98991 5.36001 7.45991 5.44001 7.69991 5.78001C7.93991 6.12001 7.85991 6.59001 7.51991 6.83001C5.65991 8.14001 4.45991 10.19 4.22991 12.45C4.19991 12.83 3.86991 13.12 3.48991 13.12Z" fill="white" />
              <path d="M12.06 22.61C10.58 22.61 9.16997 22.27 7.84997 21.61C7.47997 21.42 7.32997 20.97 7.51997 20.6C7.70997 20.23 8.15997 20.08 8.52997 20.27C10.69 21.36 13.29 21.38 15.47 20.33C15.84 20.15 16.29 20.31 16.47 20.68C16.65 21.05 16.49 21.5 16.12 21.68C14.84 22.3 13.48 22.61 12.06 22.61Z" fill="white" />
              <path d="M12.0593 8.44C10.1093 8.44 8.5293 6.86 8.5293 4.91C8.5293 2.96 10.1093 1.38 12.0593 1.38C14.0093 1.38 15.5893 2.96 15.5893 4.91C15.5893 6.86 13.9993 8.44 12.0593 8.44ZM12.0593 2.89C10.9393 2.89 10.0293 3.8 10.0293 4.92C10.0293 6.04 10.9393 6.95 12.0593 6.95C13.1793 6.95 14.0893 6.04 14.0893 4.92C14.0893 3.8 13.1693 2.89 12.0593 2.89Z" fill="white" />
              <path d="M4.83078 20.67C2.88078 20.67 1.30078 19.09 1.30078 17.14C1.30078 15.2 2.88078 13.61 4.83078 13.61C6.78078 13.61 8.36078 15.19 8.36078 17.14C8.36078 19.08 6.78078 20.67 4.83078 20.67ZM4.83078 15.11C3.71078 15.11 2.80078 16.02 2.80078 17.14C2.80078 18.26 3.71078 19.17 4.83078 19.17C5.95078 19.17 6.86078 18.26 6.86078 17.14C6.86078 16.02 5.95078 15.11 4.83078 15.11Z" fill="white" />
              <path d="M19.1706 20.67C17.2206 20.67 15.6406 19.09 15.6406 17.14C15.6406 15.2 17.2206 13.61 19.1706 13.61C21.1206 13.61 22.7006 15.19 22.7006 17.14C22.6906 19.08 21.1106 20.67 19.1706 20.67ZM19.1706 15.11C18.0506 15.11 17.1406 16.02 17.1406 17.14C17.1406 18.26 18.0506 19.17 19.1706 19.17C20.2906 19.17 21.2006 18.26 21.2006 17.14C21.1906 16.02 20.2906 15.11 19.1706 15.11Z" fill="white" />
            </svg>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transition: animation ? "transform 0.8s" : "transform 0s",
            transformStyle: "preserve-3d",
            transform: flip ? "rotateY(180deg)" : undefined,
          }}
        >
          {!flip && (
            <div
              className="flex flex-col items-center justify-center w-full bg-white rounded-b-[10px] rounded-t-full"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <img src="/images/images/new/sale.webp" width="515" height="267" className="w-full rounded-t-[10px]" alt=""/>
              <div className="w-full bg-white px-[20px] pb-[10px] xs:pb-[25px] relative">
                <div className="absolute -top-[22px] right-[15px] xxs:right-[20px] xs:right-[27px] flex flex-row items-center justify-center w-fit space-x-[4px] bg-[#EDED4F] px-[19px] py-[10px] rounded-full">
                  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" className="rtl:ml-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0398 18.1562H6.19262C2.291 18.1562 1.10547 16.9837 1.10547 13.125V12.6875C1.10547 12.3287 1.40627 12.0312 1.76901 12.0312C2.61834 12.0312 3.31727 11.34 3.31727 10.5C3.31727 9.66 2.61834 8.96875 1.76901 8.96875C1.40627 8.96875 1.10547 8.67125 1.10547 8.3125V7.875C1.10547 4.01625 2.291 2.84375 6.19262 2.84375H15.0398C18.9415 2.84375 20.127 4.01625 20.127 7.875V8.75C20.127 9.10875 19.8262 9.40625 19.4635 9.40625C18.6141 9.40625 17.9152 10.0975 17.9152 10.9375C17.9152 11.7775 18.6141 12.4688 19.4635 12.4688C19.8262 12.4688 20.127 12.7662 20.127 13.125C20.127 16.9837 18.9415 18.1562 15.0398 18.1562ZM2.43255 13.265C2.45025 16.275 3.0784 16.8438 6.19262 16.8438H15.0398C17.9948 16.8438 18.7114 16.3275 18.7911 13.7025C17.5259 13.405 16.5881 12.2762 16.5881 10.9375C16.5881 9.59875 17.5348 8.47 18.7999 8.1725V7.875C18.7999 4.75125 18.1983 4.15625 15.0398 4.15625H6.19262C3.0784 4.15625 2.45025 4.725 2.43255 7.735C3.6977 8.0325 4.64436 9.16125 4.64436 10.5C4.64436 11.8387 3.6977 12.9675 2.43255 13.265Z" fill="#131D29" />
                    <path d="M13.2705 13.895C12.7751 13.895 12.377 13.5013 12.377 13.02C12.377 12.5388 12.7751 12.145 13.2617 12.145C13.7483 12.145 14.1464 12.5388 14.1464 13.02C14.1464 13.5013 13.766 13.895 13.2705 13.895Z" fill="#131D29" />
                    <path d="M7.96193 9.52002C7.46648 9.52002 7.06836 9.12627 7.06836 8.64502C7.06836 8.16377 7.46648 7.77002 7.95308 7.77002C8.43968 7.77002 8.8378 8.16377 8.8378 8.64502C8.8378 9.12627 8.45737 9.52002 7.96193 9.52002Z" fill="#131D29" />
                    <path d="M7.63594 14.3763C7.46784 14.3763 7.29974 14.3151 7.16704 14.1838C6.91047 13.9301 6.91047 13.5101 7.16704 13.2563L13.1212 7.36756C13.3778 7.11381 13.8025 7.11381 14.059 7.36756C14.3156 7.62131 14.3156 8.04131 14.059 8.29506L8.10484 14.1838C7.98098 14.3151 7.80404 14.3763 7.63594 14.3763Z" fill="#131D29" />
                  </svg>
                  <p className="text-[#131D29] font-medium text-sm xs:text-base fdfd">{t('coupon.salesBadge')}</p>
                </div>
                <h1 className="text-[#131D29] text-lg xs:text-xl sm:text-2xl font-bold text-left mt-[30px] xs:mt-[52px] mb-[8px]">{t('coupon.salesBadge')}</h1>
                <p className="text-[#767C83] text-base xs:text-lg sm:text-xl text-left mb-[15px] xs:mb-[40px]">{t('coupon.offerDescription')}</p>
                <div className="flex flex-row items-center justify-center w-full h-[30px] relative">
                  <hr className="w-full border-t-[3px] border-dashed border-black" />
                  <div className="w-[35px] h-[35px] bg-[#C12EFE] rounded-full absolute -right-[37px]"></div>
                  <div className="w-[35px] h-[35px] bg-[#C12EFE] rounded-full absolute -left-[37px]"></div>
                </div>
                <div
                  className="w-full flex justify-center items-center bg-[#EDED4F] rounded-[4px] mt-[10px] xs:mt-[25px] mb-[5px] py-[17px] cursor-pointer hover:opacity-80"
                  onClick={() => {
                    setFlip(!flip); setAnimation(true);
                  }}
                >
                  <p className="text-base xs:text-lg sm:text-xl text-black uppercase">{t('coupon.offerButton')}</p>
                </div>
              </div>
            </div>
          )}
          {flip && (
            <>
              <div
                className="flex flex-col relative w-full bg-white rounded-[10px] px-[20px] py-[10px]"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className="w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer absolute top-3 right-3"
                  onClick={() => {
                    setFlip(!flip); setAnimation(true);
                  }}
                >
                  <svg
                    width="30" height="30" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ReplayIcon">
                    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" fill="gray" />
                  </svg>
                </div>
                <div className="flex flex-col mt-[20px] z-50 w-full">
                  <h1 className="text-[#767C83] text-base xs:text-lg sm:text-xl mb-[16px]">
                    {t('coupon.couponHeader')}
                  </h1>
                  <div className="flex justify-center items-center mb-[30px] px-[20px]">
                    <img className="w-full" src="https://t3.ftcdn.net/jpg/02/55/97/94/360_F_255979498_vewTRAL5en9T0VBNQlaDBoXHlCvJzpDl.jpg" alt=""/>
                  </div>
                  <div className="flex flex-row space-x-[5px] items-center justify-center mb-[20px]">
                    <svg width="20" height="20" className="rtl:ml-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WatchLaterOutlinedIcon">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" fill="#767C83" />
                    </svg>
                    <p className="text-[#767C83] text-xs xs:text-sm sm:text-base">
                      {t('coupon.validDate')}
                    </p>
                  </div>
                  <a href="#terms" className="mb-[20px] text-sm xs:text-base text-black">
                    {t('coupon.termsTitle')}
                  </a>

                  <div className="flex flex-row items-center justify-center w-full h-[30px] relative">
                    <hr className="w-full border-t-[3px] border-dashed border-black" />
                    <div className="w-[35px] h-[35px] bg-[#C12EFE] rounded-full absolute -right-[37px]"></div>
                    <div className="w-[35px] h-[35px] bg-[#C12EFE] rounded-full absolute -left-[37px]"></div>
                  </div>

                  <div
                    className="w-full flex justify-center items-center bg-[#EDED4F] rounded-[4px] mt-[15px] xs:mt-[40px] mb-[5px] py-[17px] cursor-pointer "
                  >
                    <p className="text-base xs:text-lg sm:text-xl text-black">{t('coupon.webButton')}</p>
                  </div>
                  <div
                    className="w-full bg-white flex justify-center items-center rounded-[4px] mt-[10px] xs:mt-[20px] mb-[10px] py-[17px] cursor-pointer shadow-[0px_2px_10px_rgba(0,31,14,0.08)] "
                  >
                    <p className="text-base xs:text-lg sm:text-xl text-black">{t('coupon.seeLocation')}</p>
                  </div>
                </div>
              </div>
              <div
                className="mt-[20px] mb-[60px] space-y-[10px]"
                id="terms"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <h1 className="text-lg xs:text-xl sm:text-2xl text-white">{t('coupon.termsTitle')}</h1>
                <div>
                  <div>
                    <p
                      className="text-sm text-justify text-white"
                    >
                      {t('coupon.termsParagraph')}
                    </p>
                    <br />
                    <p
                      className="text-sm text-justify text-white"
                    >
                      {t('coupon.conditionParagraph')}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>

  );
};

let CouponShowcase = () => {
  const t = useLanguage();
  const container = useAdjustZoom();

  const currentLanguage = i18n.language;
  let isEnglish = currentLanguage === "english";
  useEffect(() => {
  
    
  }, [isEnglish]);


  return (
    <div className="flex flex-col min-h-screen min-w-full bg-[#C12EFE] items-center overflow-x-hidden" ref={container}>
      <div className="flex flex-col items-center justify-center text-white mt-[40px] w-full max-w-[450px] px-[12px] pb-[30px]">
        <div className="w-full flex flex-row items-center justify-between space-x-[6px] mb-[35px]">
          <h1 className={`${isEnglish ? 'text-[17px]': 'text-sm'} text-left font-bold`}>{t('coupon.company')}</h1>
          <div className="min-w-[35px] h-[35px] bg-white/[.15] rounded-[4px] border-[1px] border-white/10 cursor-pointer hover:opacity-80 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.6196 13.07C20.2396 13.07 19.9196 12.78 19.8696 12.4C19.6296 10.14 18.4096 8.08998 16.5296 6.78998C16.1896 6.54998 16.1096 6.08998 16.3396 5.74998C16.5796 5.40998 17.0496 5.32998 17.3796 5.55998C19.6196 7.10998 21.0596 9.54998 21.3496 12.24C21.3896 12.65 21.0996 13.02 20.6796 13.07C20.6696 13.07 20.6396 13.07 20.6196 13.07Z" fill="white" />
              <path d="M3.48991 13.12C3.45991 13.12 3.43991 13.12 3.40991 13.12C2.99991 13.07 2.69991 12.7 2.73991 12.29C3.00991 9.60001 4.43991 7.17001 6.64991 5.60001C6.98991 5.36001 7.45991 5.44001 7.69991 5.78001C7.93991 6.12001 7.85991 6.59001 7.51991 6.83001C5.65991 8.14001 4.45991 10.19 4.22991 12.45C4.19991 12.83 3.86991 13.12 3.48991 13.12Z" fill="white" />
              <path d="M12.06 22.61C10.58 22.61 9.16997 22.27 7.84997 21.61C7.47997 21.42 7.32997 20.97 7.51997 20.6C7.70997 20.23 8.15997 20.08 8.52997 20.27C10.69 21.36 13.29 21.38 15.47 20.33C15.84 20.15 16.29 20.31 16.47 20.68C16.65 21.05 16.49 21.5 16.12 21.68C14.84 22.3 13.48 22.61 12.06 22.61Z" fill="white" />
              <path d="M12.0593 8.44C10.1093 8.44 8.5293 6.86 8.5293 4.91C8.5293 2.96 10.1093 1.38 12.0593 1.38C14.0093 1.38 15.5893 2.96 15.5893 4.91C15.5893 6.86 13.9993 8.44 12.0593 8.44ZM12.0593 2.89C10.9393 2.89 10.0293 3.8 10.0293 4.92C10.0293 6.04 10.9393 6.95 12.0593 6.95C13.1793 6.95 14.0893 6.04 14.0893 4.92C14.0893 3.8 13.1693 2.89 12.0593 2.89Z" fill="white" />
              <path d="M4.83078 20.67C2.88078 20.67 1.30078 19.09 1.30078 17.14C1.30078 15.2 2.88078 13.61 4.83078 13.61C6.78078 13.61 8.36078 15.19 8.36078 17.14C8.36078 19.08 6.78078 20.67 4.83078 20.67ZM4.83078 15.11C3.71078 15.11 2.80078 16.02 2.80078 17.14C2.80078 18.26 3.71078 19.17 4.83078 19.17C5.95078 19.17 6.86078 18.26 6.86078 17.14C6.86078 16.02 5.95078 15.11 4.83078 15.11Z" fill="white" />
              <path d="M19.1706 20.67C17.2206 20.67 15.6406 19.09 15.6406 17.14C15.6406 15.2 17.2206 13.61 19.1706 13.61C21.1206 13.61 22.7006 15.19 22.7006 17.14C22.6906 19.08 21.1106 20.67 19.1706 20.67ZM19.1706 15.11C18.0506 15.11 17.1406 16.02 17.1406 17.14C17.1406 18.26 18.0506 19.17 19.1706 19.17C20.2906 19.17 21.2006 18.26 21.2006 17.14C21.1906 16.02 20.2906 15.11 19.1706 15.11Z" fill="white" />
            </svg>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="flex flex-col items-center justify-center w-full bg-white rounded-b-[10px] rounded-t-full"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <img src="/images/images/new/sale.webp" width="515" height="267" className="w-full rounded-t-[10px]" alt=""/>
            <div className="w-full bg-white px-[20px] pb-[10px] relative">
              <div className="absolute -top-[15px] right-[20px] flex flex-row items-center justify-center w-fit space-x-[4px] bg-[#EDED4F] px-[15px] py-[7px] rounded-full">
                <svg width="17" height="16" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:ml-2">
                  <path d="M15.0398 18.1562H6.19262C2.291 18.1562 1.10547 16.9837 1.10547 13.125V12.6875C1.10547 12.3287 1.40627 12.0312 1.76901 12.0312C2.61834 12.0312 3.31727 11.34 3.31727 10.5C3.31727 9.66 2.61834 8.96875 1.76901 8.96875C1.40627 8.96875 1.10547 8.67125 1.10547 8.3125V7.875C1.10547 4.01625 2.291 2.84375 6.19262 2.84375H15.0398C18.9415 2.84375 20.127 4.01625 20.127 7.875V8.75C20.127 9.10875 19.8262 9.40625 19.4635 9.40625C18.6141 9.40625 17.9152 10.0975 17.9152 10.9375C17.9152 11.7775 18.6141 12.4688 19.4635 12.4688C19.8262 12.4688 20.127 12.7662 20.127 13.125C20.127 16.9837 18.9415 18.1562 15.0398 18.1562ZM2.43255 13.265C2.45025 16.275 3.0784 16.8438 6.19262 16.8438H15.0398C17.9948 16.8438 18.7114 16.3275 18.7911 13.7025C17.5259 13.405 16.5881 12.2762 16.5881 10.9375C16.5881 9.59875 17.5348 8.47 18.7999 8.1725V7.875C18.7999 4.75125 18.1983 4.15625 15.0398 4.15625H6.19262C3.0784 4.15625 2.45025 4.725 2.43255 7.735C3.6977 8.0325 4.64436 9.16125 4.64436 10.5C4.64436 11.8387 3.6977 12.9675 2.43255 13.265Z" fill="#131D29" />
                  <path d="M13.2705 13.895C12.7751 13.895 12.377 13.5013 12.377 13.02C12.377 12.5388 12.7751 12.145 13.2617 12.145C13.7483 12.145 14.1464 12.5388 14.1464 13.02C14.1464 13.5013 13.766 13.895 13.2705 13.895Z" fill="#131D29" />
                  <path d="M7.96193 9.52002C7.46648 9.52002 7.06836 9.12627 7.06836 8.64502C7.06836 8.16377 7.46648 7.77002 7.95308 7.77002C8.43968 7.77002 8.8378 8.16377 8.8378 8.64502C8.8378 9.12627 8.45737 9.52002 7.96193 9.52002Z" fill="#131D29" />
                  <path d="M7.63594 14.3763C7.46784 14.3763 7.29974 14.3151 7.16704 14.1838C6.91047 13.9301 6.91047 13.5101 7.16704 13.2563L13.1212 7.36756C13.3778 7.11381 13.8025 7.11381 14.059 7.36756C14.3156 7.62131 14.3156 8.04131 14.059 8.29506L8.10484 14.1838C7.98098 14.3151 7.80404 14.3763 7.63594 14.3763Z" fill="#131D29" />
                </svg>
                <p className={`text-[#131D29] font-bold ${isEnglish ? 'text-sm': 'text-[10px]'}`}>{t('coupon.salesBadge')}</p>
              </div>
              <h1 className={`text-[#131D29] font-bold text-left mt-[40px] mb-[5px] rtl:text-right ${isEnglish ? 'text-base': 'text-[12px]'}`}>{t('coupon.salesBadge')}</h1>
              <p className="text-[#767C83] text-sm text-left mb-[18px] rtl:text-right">{t('coupon.offerDescription')}</p>
              <div className="flex flex-row items-center justify-center w-full h-[50px] relative">
                <hr className="w-full border-t border-dashed" />
                <div className="w-[23px] h-[23px] bg-[#C12EFE] rounded-full absolute -right-[32px]"></div>
                <div className="w-[23px] h-[23px] bg-[#C12EFE] rounded-full absolute -left-[32px]"></div>
              </div>
              <div className="w-full flex justify-center items-center bg-[#EDED4F] rounded-[4px] mb-[5px] py-[10px] cursor-pointer hover:opacity-80">
                <p className="text-sm text-black uppercase">{t('coupon.offerButton')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export {CouponPreview,CouponShowcase};
