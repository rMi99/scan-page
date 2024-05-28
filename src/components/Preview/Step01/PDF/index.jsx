import {React} from "react";
import "../../index.css";
import useUpdateDomTitle from "../../../../utils/updateDomTitle";
import useLanguage from "../../../../utils/useLanguage";
import { useAdjustZoom } from "../../../../utils/utils";


let PDFPreview = () => {

  const t = useLanguage();
  useUpdateDomTitle('Online QR Generator - Scanned Page | PDF',"#57C4D9");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip set-height-pos top-[-88px]">
        <svg width="375" height="526" viewBox="0 0 375 526" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H375V506C375 506 293.5 461 187.5 506C81.5 551 0 506 0 506V0Z" className="duration-500" fill="#57C4D9"/>
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center text-white mt-[50px] xs:mt-[58px] w-full max-w-[430px] px-[14px] xs:px-[26px]">
        <p className="w-full mb-[8px] xs:mb-[20px] text-sm xs:text-base">Enterprise Inc.</p>
        <h1 className="text-xl xs:text-[28px] font-bold text-center mb-[10px] xs:mb-[20px]">{t('pdf.title')}</h1>
        <p className="text-sm xs:text-lg w-full max-w-[380px] mb-[20px]">{t('pdf.description')}</p>
        <div className="flex flex-col items-center justify-center w-full bg-white px-[18px] pt-[12px] pb-[5px] mb-[15px] xs:mb-[28px] rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <img src="/images/images/new/pdf.webp" className="w-full mb-[12px]" width="933" height="795" alt=""/>
          <div className="w-full flex flex-row justify-center items-center space-x-[10px] bg-[#FF9865] rounded-[4px] py-[14px] cursor-pointer hover:opacity-80">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.9994 8.03442C8.89107 8.03442 7.99023 8.93609 7.99023 10.0444C7.99023 11.1519 8.89107 12.0528 9.9994 12.0528C11.1077 12.0528 12.0094 11.1519 12.0094 10.0444C12.0094 8.93609 11.1077 8.03442 9.9994 8.03442M9.9994 13.3028C8.2019 13.3028 6.74023 11.8411 6.74023 10.0444C6.74023 8.24692 8.2019 6.78442 9.9994 6.78442C11.7969 6.78442 13.2594 8.24692 13.2594 10.0444C13.2594 11.8411 11.7969 13.3028 9.9994 13.3028" fill="white" />
              <mask id="mask0_953_2295" maskUnits="userSpaceOnUse" x="1" y="3" width="18" height="14">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.66699 3.3335H18.3335V16.7543H1.66699V3.3335Z" fill="white" />
              </mask>
              <g mask="url(#mask0_953_2295)">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.97512 10.0436C4.52512 13.4678 7.13595 15.5036 10.0001 15.5045C12.8643 15.5036 15.4751 13.4678 17.0251 10.0436C15.4751 6.6203 12.8643 4.58447 10.0001 4.58363C7.13678 4.58447 4.52512 6.6203 2.97512 10.0436V10.0436ZM10.0018 16.7545H9.99845H9.99762C6.55095 16.752 3.45595 14.3361 1.71762 10.2903C1.65012 10.1328 1.65012 9.95447 1.71762 9.79697C3.45595 5.75197 6.55178 3.33613 9.99762 3.33363C9.99928 3.3328 9.99928 3.3328 10.0001 3.33363C10.0018 3.3328 10.0018 3.3328 10.0026 3.33363C13.4493 3.33613 16.5443 5.75197 18.2826 9.79697C18.3509 9.95447 18.3509 10.1328 18.2826 10.2903C16.5451 14.3361 13.4493 16.752 10.0026 16.7545H10.0018Z" fill="white" />
              </g>
            </svg>
            <p className="text-base xs:text-xl text-white rtl:text-sm rtl:ps-2">{t('pdf.button')}</p>
          </div>
        </div>
        <button className="flex flex-row justify-between items-center w-full cursor-pointer mb-[20px] p-[5px] rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <div className="space-x-[5px] xs:space-x-[10px] w-full mr-[5px] items-center flex flex-row">
            <div className="w-[45px] h-[45px] min-w-[30px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center">
              <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0003 21.5781C6.31741 21.5781 1.69824 17.0594 1.69824 11.5C1.69824 5.94063 6.31741 1.42188 12.0003 1.42188C17.6832 1.42188 22.3024 5.94063 22.3024 11.5C22.3024 17.0594 17.6832 21.5781 12.0003 21.5781ZM12.0003 2.82812C7.11283 2.82812 3.13574 6.71875 3.13574 11.5C3.13574 16.2812 7.11283 20.1719 12.0003 20.1719C16.8878 20.1719 20.8649 16.2812 20.8649 11.5C20.8649 6.71875 16.8878 2.82812 12.0003 2.82812Z" fill="#767C83" />
                <path d="M9.12547 20.6406H8.16714C7.77422 20.6406 7.44839 20.3219 7.44839 19.9375C7.44839 19.5531 7.75505 19.2437 8.14797 19.2344C6.64339 14.2094 6.64339 8.79063 8.14797 3.76562C7.75505 3.75625 7.44839 3.44687 7.44839 3.0625C7.44839 2.67812 7.77422 2.35938 8.16714 2.35938H9.12547C9.35547 2.35938 9.57589 2.47187 9.71005 2.65C9.84422 2.8375 9.88255 3.07187 9.80589 3.2875C8.00422 8.58437 8.00422 14.4156 9.80589 19.7219C9.88255 19.9375 9.84422 20.1719 9.71005 20.3594C9.57589 20.5281 9.35547 20.6406 9.12547 20.6406Z" fill="#767C83" />
                <path d="M14.8753 20.6405C14.7986 20.6405 14.722 20.6311 14.6453 20.603C14.2715 20.4811 14.0607 20.078 14.1949 19.7124C15.9965 14.4155 15.9965 8.58427 14.1949 3.27802C14.0703 2.91239 14.2715 2.50927 14.6453 2.38739C15.0286 2.26552 15.4311 2.46239 15.5557 2.82802C17.4628 8.41552 17.4628 14.5655 15.5557 20.1436C15.4599 20.453 15.1724 20.6405 14.8753 20.6405Z" fill="#767C83" />
                <path d="M12 16.375C9.32625 16.375 6.66208 16.0094 4.09375 15.2687C4.08417 15.6437 3.76792 15.9531 3.375 15.9531C2.98208 15.9531 2.65625 15.6344 2.65625 15.25V14.3125C2.65625 14.0875 2.77125 13.8719 2.95333 13.7406C3.145 13.6094 3.38458 13.5719 3.605 13.6469C9.01958 15.4094 14.99 15.4094 20.4046 13.6469C20.625 13.5719 20.8646 13.6094 21.0562 13.7406C21.2479 13.8719 21.3533 14.0875 21.3533 14.3125V15.25C21.3533 15.6344 21.0275 15.9531 20.6346 15.9531C20.2417 15.9531 19.9254 15.6531 19.9158 15.2687C17.3379 16.0094 14.6737 16.375 12 16.375Z" fill="#767C83" />
                <path d="M20.6246 9.39053C20.548 9.39053 20.4713 9.38115 20.3946 9.35303C14.98 7.59053 9.00963 7.59053 3.59505 9.35303C3.21171 9.4749 2.80921 9.27803 2.68463 8.9124C2.56963 8.5374 2.77088 8.14365 3.14463 8.02178C8.8563 6.15615 15.143 6.15615 20.845 8.02178C21.2188 8.14365 21.4296 8.54678 21.2955 8.9124C21.2092 9.20303 20.9217 9.39053 20.6246 9.39053Z" fill="#767C83" />
              </svg>
            </div>
            <div className="flex items-center text-left">
              <p className="text-sm xs:text-base sm:text-xl text-[#0079FF] break-all">www.enterprise.com</p>
            </div>
          </div>
          <svg className="hidden xs:flex mr-[5px] rtl:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
            <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
          </svg>
        </button>
      </div>
    </div>

  );
};

let PDFShowcase= () => {
  const t = useLanguage();
  const container = useAdjustZoom();

  return (
    <div className="flex flex-col justify-center items-center" ref={container}>
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <svg className="hidden md:block top-0 absolute" width="2066" height="458" viewBox="0 0 2066 458" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H2066V440.586C2066 440.586 1616.99 401.403 1033 440.586C449.011 479.768 0 440.586 0 440.586V0Z" fill="#57C4D9" />
        </svg>

        <svg className="block md:hidden top-0 absolute" width="770" height="345" viewBox="0 0 770 458" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H770V440.586C770 440.586 602.653 401.403 385 440.586C167.347 479.768 0 440.586 0 440.586V0Z" fill="#57C4D9" />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center text-white mt-[41px] xs:mt-[58px] w-full max-w-[430px] px-[37px] xs:px-[26px]" >
        <p className="w-full mb-[8px] xs:mb-[20px] text-xs xs:text-base">Enterprise Inc.</p>
        <h1 className="text-xl xs:text-[28px] font-bold text-center mb-[10px] xs:mb-[20px]">{t('pdf.title')}</h1>
        <p className="text-[13px] xs:text-lg w-full max-w-[380px] mb-[20px]">{t('pdf.description')}</p>
        <div className="flex flex-col items-center justify-center w-full bg-white px-[11px] pt-[12px] pb-[5px] mb-[15px] rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <img src="/images/images/new/pdf.webp" className="w-full mb-[12px]" width="933" height="795" alt=""/>
          <div className="w-full flex flex-row justify-center items-center space-x-[10px] bg-[#FF9865] rounded-[4px] py-[10px] cursor-pointer hover:opacity-80">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:ml-2">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.9994 8.03442C8.89107 8.03442 7.99023 8.93609 7.99023 10.0444C7.99023 11.1519 8.89107 12.0528 9.9994 12.0528C11.1077 12.0528 12.0094 11.1519 12.0094 10.0444C12.0094 8.93609 11.1077 8.03442 9.9994 8.03442M9.9994 13.3028C8.2019 13.3028 6.74023 11.8411 6.74023 10.0444C6.74023 8.24692 8.2019 6.78442 9.9994 6.78442C11.7969 6.78442 13.2594 8.24692 13.2594 10.0444C13.2594 11.8411 11.7969 13.3028 9.9994 13.3028" fill="white" />
              <mask id="mask0_953_2295" maskUnits="userSpaceOnUse" x="1" y="3" width="18" height="14">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.66699 3.3335H18.3335V16.7543H1.66699V3.3335Z" fill="white" />
              </mask>
              <g mask="url(#mask0_953_2295)">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.97512 10.0436C4.52512 13.4678 7.13595 15.5036 10.0001 15.5045C12.8643 15.5036 15.4751 13.4678 17.0251 10.0436C15.4751 6.6203 12.8643 4.58447 10.0001 4.58363C7.13678 4.58447 4.52512 6.6203 2.97512 10.0436V10.0436ZM10.0018 16.7545H9.99845H9.99762C6.55095 16.752 3.45595 14.3361 1.71762 10.2903C1.65012 10.1328 1.65012 9.95447 1.71762 9.79697C3.45595 5.75197 6.55178 3.33613 9.99762 3.33363C9.99928 3.3328 9.99928 3.3328 10.0001 3.33363C10.0018 3.3328 10.0018 3.3328 10.0026 3.33363C13.4493 3.33613 16.5443 5.75197 18.2826 9.79697C18.3509 9.95447 18.3509 10.1328 18.2826 10.2903C16.5451 14.3361 13.4493 16.752 10.0026 16.7545H10.0018Z" fill="white" />
              </g>
            </svg>
            <p className="text-sm xs:text-xl text-white">{t('pdf.button')}</p>
          </div>
        </div>
        <button className="flex flex-row justify-between items-center w-full cursor-pointer mb-[20px] p-[5px] rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <div className="space-x-[5px] xs:space-x-[10px] w-full mr-[5px] items-center flex flex-row">
            <div className="w-[45px] h-[45px] min-w-[30px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center">
              <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0003 21.5781C6.31741 21.5781 1.69824 17.0594 1.69824 11.5C1.69824 5.94063 6.31741 1.42188 12.0003 1.42188C17.6832 1.42188 22.3024 5.94063 22.3024 11.5C22.3024 17.0594 17.6832 21.5781 12.0003 21.5781ZM12.0003 2.82812C7.11283 2.82812 3.13574 6.71875 3.13574 11.5C3.13574 16.2812 7.11283 20.1719 12.0003 20.1719C16.8878 20.1719 20.8649 16.2812 20.8649 11.5C20.8649 6.71875 16.8878 2.82812 12.0003 2.82812Z" fill="#767C83" />
                <path d="M9.12547 20.6406H8.16714C7.77422 20.6406 7.44839 20.3219 7.44839 19.9375C7.44839 19.5531 7.75505 19.2437 8.14797 19.2344C6.64339 14.2094 6.64339 8.79063 8.14797 3.76562C7.75505 3.75625 7.44839 3.44687 7.44839 3.0625C7.44839 2.67812 7.77422 2.35938 8.16714 2.35938H9.12547C9.35547 2.35938 9.57589 2.47187 9.71005 2.65C9.84422 2.8375 9.88255 3.07187 9.80589 3.2875C8.00422 8.58437 8.00422 14.4156 9.80589 19.7219C9.88255 19.9375 9.84422 20.1719 9.71005 20.3594C9.57589 20.5281 9.35547 20.6406 9.12547 20.6406Z" fill="#767C83" />
                <path d="M14.8753 20.6405C14.7986 20.6405 14.722 20.6311 14.6453 20.603C14.2715 20.4811 14.0607 20.078 14.1949 19.7124C15.9965 14.4155 15.9965 8.58427 14.1949 3.27802C14.0703 2.91239 14.2715 2.50927 14.6453 2.38739C15.0286 2.26552 15.4311 2.46239 15.5557 2.82802C17.4628 8.41552 17.4628 14.5655 15.5557 20.1436C15.4599 20.453 15.1724 20.6405 14.8753 20.6405Z" fill="#767C83" />
                <path d="M12 16.375C9.32625 16.375 6.66208 16.0094 4.09375 15.2687C4.08417 15.6437 3.76792 15.9531 3.375 15.9531C2.98208 15.9531 2.65625 15.6344 2.65625 15.25V14.3125C2.65625 14.0875 2.77125 13.8719 2.95333 13.7406C3.145 13.6094 3.38458 13.5719 3.605 13.6469C9.01958 15.4094 14.99 15.4094 20.4046 13.6469C20.625 13.5719 20.8646 13.6094 21.0562 13.7406C21.2479 13.8719 21.3533 14.0875 21.3533 14.3125V15.25C21.3533 15.6344 21.0275 15.9531 20.6346 15.9531C20.2417 15.9531 19.9254 15.6531 19.9158 15.2687C17.3379 16.0094 14.6737 16.375 12 16.375Z" fill="#767C83" />
                <path d="M20.6246 9.39053C20.548 9.39053 20.4713 9.38115 20.3946 9.35303C14.98 7.59053 9.00963 7.59053 3.59505 9.35303C3.21171 9.4749 2.80921 9.27803 2.68463 8.9124C2.56963 8.5374 2.77088 8.14365 3.14463 8.02178C8.8563 6.15615 15.143 6.15615 20.845 8.02178C21.2188 8.14365 21.4296 8.54678 21.2955 8.9124C21.2092 9.20303 20.9217 9.39053 20.6246 9.39053Z" fill="#767C83" />
              </svg>
            </div>
            <div className="flex items-center text-left">
              <p className="text-sm xs:text-base sm:text-xl text-[#0079FF] break-all">www.enterprise.com</p>
            </div>
          </div>
          <svg className="hidden xs:flex mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83" />
            <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83" />
          </svg>
        </button>
      </div>
    </div>

  );
};

export {PDFPreview,PDFShowcase};