import {React} from "react";
import "../index.css";
// import useLanguage from "../../../utils/useLanguage";
import useUpdateDomTitle from "../../../utils/updateDomTitle";



let InstagramPreview = (props) => {

  useUpdateDomTitle('Online QR Generator - Scanned Page | Instagram',"#ED3E7F");
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="flex flex-col items-center justify-center mt-[50px] w-full max-w-[700px]">
        <div className="flex items-center justify-between w-full mb-5  px-[20px]">
          <div className="flex items-center justify-between space-x-[12px]">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L0.999938 8.00006L8 15.0001" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex items-center justify-between space-x-[4px]">
              <p className="font-bold text-base xs:text-lg">TwinTreats</p>
              {/* Verified badge */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3031_326)">
                  <path d="M5.56209 0.980486C5.67561 0.653806 6.07855 0.538265 6.34794 0.755147L7.57054 1.73945C7.75871 1.89095 8.02828 1.88624 8.21105 1.72827L9.39855 0.701898C9.66021 0.475747 10.0669 0.577156 10.1918 0.899675L10.7584 2.36341C10.8457 2.58869 11.0815 2.7194 11.3187 2.67398L12.8603 2.37887C13.2 2.31384 13.5015 2.60503 13.4484 2.94676L13.2073 4.49772C13.1701 4.73643 13.309 4.96753 13.5372 5.04683L15.0198 5.56205C15.3465 5.67557 15.462 6.07851 15.2452 6.3479L14.2609 7.5705C14.1094 7.75867 14.1141 8.02824 14.272 8.21101L15.2984 9.39851C15.5246 9.66017 15.4231 10.0669 15.1006 10.1917L13.6369 10.7584C13.4116 10.8456 13.2809 11.0814 13.3263 11.3187L13.6214 12.8603C13.6865 13.2 13.3953 13.5015 13.0535 13.4484L11.5026 13.2072C11.2639 13.1701 11.0328 13.309 10.9535 13.5372L10.4383 15.0198C10.3247 15.3465 9.92179 15.462 9.65241 15.2451L8.42981 14.2608C8.24164 14.1093 7.97206 14.114 7.78929 14.272L6.60179 15.2984C6.34014 15.5245 5.93341 15.4231 5.80856 15.1006L5.24191 13.6369C5.1547 13.4116 4.91889 13.2809 4.68162 13.3263L3.14002 13.6214C2.80035 13.6864 2.49882 13.3952 2.55195 13.0535L2.79308 11.5025C2.8302 11.2638 2.69134 11.0327 2.46315 10.9534L0.980527 10.4382C0.653848 10.3247 0.538307 9.92175 0.755189 9.65236L1.7395 8.42977C1.89099 8.2416 1.88628 7.97202 1.72832 7.78925L0.70194 6.60175C0.475788 6.3401 0.577197 5.93337 0.899716 5.80851L2.36345 5.24187C2.58873 5.15465 2.71945 4.91884 2.67402 4.68158L2.37891 3.13998C2.31388 2.80031 2.60507 2.49878 2.94681 2.55191L4.49776 2.79304C4.73647 2.83016 4.96757 2.69129 5.04687 2.4631L5.56209 0.980486Z" fill="#1FA1FF"/>
                  <path d="M5 8L7 10L11 6" stroke="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_3031_326">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

            </div>
          </div>
          <div className="flex items-center justify-between space-x-2 xxs:space-x-[6px] xs:space-x-[10px] xsm:space-x-[14px] sm:space-x-[20px]">
            <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_3031_336" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="18">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0H18.4969V17.348H0V0Z" fill="white"/>
              </mask>
              <g mask="url(#mask0_3031_336)">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.24701 1.5C5.75201 1.5 3.31601 4.238 3.31601 6.695C3.31601 8.774 2.73901 9.735 2.22901 10.583C1.82001 11.264 1.49701 11.802 1.49701 12.971C1.66401 14.857 2.90901 15.848 9.24701 15.848C15.55 15.848 16.834 14.813 17 12.906C16.997 11.802 16.674 11.264 16.265 10.583C15.755 9.735 15.178 8.774 15.178 6.695C15.178 4.238 12.742 1.5 9.24701 1.5M9.24701 17.348C4.57101 17.348 0.345013 17.018 1.33547e-05 13.035C-0.00298665 11.387 0.500013 10.549 0.944013 9.811C1.39301 9.063 1.81601 8.358 1.81601 6.695C1.81601 3.462 4.80201 0 9.24701 0C13.692 0 16.678 3.462 16.678 6.695C16.678 8.358 17.101 9.063 17.55 9.811C17.994 10.549 18.497 11.387 18.497 12.971C18.148 17.018 13.923 17.348 9.24701 17.348" fill="black"/>
                </g>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.19803 21.5001H9.19603C8.07503 21.4991 7.01403 21.0051 6.20903 20.1081C5.93203 19.8011 5.95703 19.3261 6.26503 19.0501C6.57303 18.7721 7.04703 18.7971 7.32403 19.1061C7.84203 19.6831 8.50703 20.0001 9.19703 20.0001H9.19803C9.89103 20.0001 10.559 19.6831 11.078 19.1051C11.356 18.7981 11.83 18.7731 12.137 19.0501C12.445 19.3271 12.47 19.8021 12.193 20.1091C11.385 21.0061 10.322 21.5001 9.19803 21.5001" fill="black"/>
            </svg>
            <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#7E7E7E"/>
              <circle cx="7" cy="1.5" r="1.5" fill="#7E7E7E"/>
              <circle cx="12.5" cy="1.5" r="1.5" fill="#7E7E7E"/>
            </svg>

          </div>
        </div>
        <div className="flex items-center justify-between w-full sm:pr-[10px] mb-5  px-[20px]">
          <img src="/images/images/new/instagram_avatar.png" className="w-[50px] xxs:w-[70px] xs:w-[80px] sm:w-[120px]" alt="" />
          <div className="flex items-center justify-end w-full pl-1 xsm:pl-8 sm:pl-20 text-black">
            <div className="flex-1 px-1">
              <p className="font-bold mb-2 text-[10px] xxs:text-xs xs:text-sm sm:text-base">9</p>
              <p className="font-semibold text-[10px] xxs:text-xs xs:text-sm sm:text-base">Posts</p>
            </div>
            <div className="flex-1 px-1">
              <p className="font-bold mb-2 text-[10px] xxs:text-xs xs:text-sm sm:text-base">5,678</p>
              <p className="font-semibold text-[10px] xxs:text-xs xs:text-sm sm:text-base">Followers</p>
            </div>
            <div className="flex-1 px-1">
              <p className="font-bold mb-2 text-[10px] xxs:text-xs xs:text-sm sm:text-base">9,101</p>
              <p className="font-semibold text-[10px] xxs:text-xs xs:text-sm sm:text-base">Following</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full text-start space-y-[3px] mb-3  px-[20px]">
          <p className="text-black font-bold ">Twin Treats Bakery</p>
          <p className="text-[#6E6E6E] font-normal text-[13px]">#twintreats #bakery #yum</p>
          <p className="text-black text-[13px]">Let yourself be tempted by the sweet symphony of flavors from the Twin Treats bakery 🍪 🍰</p>
          <p className="text-[#223B42] cursor-pointer text-[13px]">www.twintreats.com</p>
        </div>
        <div className="flex items-center justify-start w-full mb-3  px-[20px]">
          <img src="/images/images/new/avatars.png" className="mr-2 xs:mr-3 w-[40px] xxs:w-[54px] xs:w-[70px] sm:w-[82px]" alt=""/>
          <p className="text-start text-[8px] xxs:text-[10px] xs:text-[13px] sm:text-[15px] text-black">Followed by <span className="font-bold">John Smith, William Barb</span> and <span className="font-bold">100 others</span></p>
        </div>
        <div className="flex gap-[6px] w-full mb-5  px-[20px]">
          <div className="flex-1 flex gap-2">
            <div className="flex-1 bg-[#EFEFEF] rounded font-bold py-[7px] text-black text-[10px] xxs:text-xs xs:text-sm">Follow</div>
            <div className="flex-1 bg-[#EFEFEF] rounded font-bold py-[7px] text-black text-[10px] xxs:text-xs xs:text-sm">Message</div>
            <div className="flex-1 bg-[#EFEFEF] rounded font-bold py-[7px] text-black text-[10px] xxs:text-xs xs:text-sm">Shop</div>
          </div>
          <div className="bg-[#EFEFEF] rounded flex items-center justify-center p-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="14" height="14" transform="translate(0 -0.00146484)" fill="#EFEFEF"/>
              <circle cx="9" cy="3.99854" r="1.85" stroke="black" strokeWidth="1.3"/>
              <path d="M13 11.9985V10.9985C13 9.34168 11.6569 7.99854 10 7.99854H8C6.34315 7.99854 5 9.34168 5 10.9985V11.9985" stroke="black" strokeWidth="1.3"/>
              <line x1="3.525" y1="4.64854" x2="3.525" y2="8.34854" stroke="black" strokeWidth="1.3" stroke-linecap="round"/>
              <line x1="1.65" y1="6.44863" x2="5.35" y2="6.44863" stroke="black" strokeWidth="1.3" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center w-full gap-[4px] xsm:gap-2 mb-4  px-[20px]">
          <div className="flex flex-col items-center truncate text-start">
            <img src="/images/images/new/instagram/donuts.webp" className="xxs:w-[30px] xs:w-[60px] sm:w-full mb-1" alt="" />
            <p className="text-start text-[8px] xxs:text-[10px] xsm:text-sm sm:text-base truncate">Donuts</p>
          </div>
          <div className="flex flex-col items-center truncate text-start">
            <img src="/images/images/new/instagram/waffels.webp" className="xxs:w-[30px] xs:w-[60px] sm:w-full mb-1" alt="" />
            <p className="text-start text-[8px] xxs:text-[10px] xsm:text-sm sm:text-base truncate">Waffels</p>
          </div>
          <div className="flex flex-col items-center truncate text-start">
            <img src="/images/images/new/instagram/milkshakes.webp" className="xxs:w-[30px] xs:w-[60px] sm:w-full mb-1" alt="" />
            <p className="text-start text-[8px] xxs:text-[10px] xsm:text-sm sm:text-base truncate">Milkshakes</p>
          </div>
          <div className="flex flex-col items-center truncate text-start">
            <img src="/images/images/new/instagram/sundaes.webp" className="xxs:w-[30px] xs:w-[60px] sm:w-full mb-1" alt="" />
            <p className="text-start text-[8px] xxs:text-[10px] xsm:text-sm sm:text-base truncate">Sundaes</p>
          </div>
          <div className="flex flex-col items-center truncate text-start">
            <img src="/images/images/new/instagram/specialities.webp" className="xxs:w-[30px] xs:w-[60px] sm:w-full mb-1" alt="" />
            <p className="text-start text-[8px] xxs:text-[10px] xsm:text-sm sm:text-base truncate">Specialities</p>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full gap-[1px] xs:gap-[2px] mb-14">
          <img className="w-full flex-1" src="/images/images/new/instagram/1.webp" alt="" />
          <img className="w-full flex-1" src="/images/images/new/instagram/2.webp" alt="" />
          <img className="w-full flex-1" src="/images/images/new/instagram/3.webp" alt="" />
          <img className="w-full flex-1" src="/images/images/new/instagram/4.webp" alt="" />
          <img className="w-full flex-1" src="/images/images/new/instagram/5.webp" alt="" />
          <img className="w-full flex-1" src="/images/images/new/instagram/6.webp" alt="" />
          <img className="w-full flex-1" src="/images/images/new/instagram/7.webp" alt="" />
          <img className="w-full flex-1" src="/images/images/new/instagram/8.webp" alt="" />
          <img className="w-full flex-1" src="/images/images/new/instagram/9.webp" alt="" />
        </div>
        <div className="flex justify-around items-center w-full max-w-[700px] py-2 fixed bottom-0 bg-white">
          <div className="flex-1 flex items-center justify-center">
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 10.5436V21.0078H14.5V16.0078C14.5 13.7987 12.7091 12.0078 10.5 12.0078C8.29086 12.0078 6.5 13.7987 6.5 16.0078V21.0078H0.5V10.5436L10.5 1.00781L20.5 10.5436Z" fill="black"/>
              <path d="M20.5 21.0078V21.5078H21V21.0078H20.5ZM20.5 10.5436H21V10.3295L20.8451 10.1817L20.5 10.5436ZM14.5 21.0078H14V21.5078H14.5V21.0078ZM6.5 21.0078V21.5078H7V21.0078H6.5ZM0.5 21.0078H0V21.5078H0.5V21.0078ZM0.5 10.5436L0.154946 10.1817L0 10.3295V10.5436H0.5ZM10.5 1.00781L10.8451 0.64596L10.5 0.316924L10.1549 0.64596L10.5 1.00781ZM21 21.0078V10.5436H20V21.0078H21ZM14.5 21.5078H20.5V20.5078H14.5V21.5078ZM15 21.0078V16.0078H14V21.0078H15ZM15 16.0078C15 13.5225 12.9853 11.5078 10.5 11.5078V12.5078C12.433 12.5078 14 14.0748 14 16.0078H15ZM10.5 11.5078C8.01472 11.5078 6 13.5225 6 16.0078H7C7 14.0748 8.567 12.5078 10.5 12.5078V11.5078ZM6 16.0078V21.0078H7V16.0078H6ZM0.5 21.5078H6.5V20.5078H0.5V21.5078ZM0 10.5436V21.0078H1V10.5436H0ZM10.1549 0.64596L0.154946 10.1817L0.845054 10.9054L10.8451 1.36967L10.1549 0.64596ZM20.8451 10.1817L10.8451 0.64596L10.1549 1.36967L20.1549 10.9054L20.8451 10.1817Z" fill="black"/>
            </svg>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10.5" cy="10.0078" r="8.1" stroke="black" stroke-width="1.8"/>
              <path d="M22.5 22.0078L16.5 16.0078" stroke="black" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </div>
          <div className="flex-1 flex items-center justify-center  py-[10px]">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9211 1.90255H8.07895C4.93964 1.90255 2.39474 4.44746 2.39474 7.58676V16.4289C2.39474 19.5682 4.93964 22.1131 8.07895 22.1131H16.9211C20.0604 22.1131 22.6053 19.5682 22.6053 16.4289V7.58676C22.6053 4.44746 20.0604 1.90255 16.9211 1.90255ZM8.07895 0.0078125C3.89321 0.0078125 0.5 3.40102 0.5 7.58676V16.4289C0.5 20.6146 3.89321 24.0078 8.07895 24.0078H16.9211C21.1068 24.0078 24.5 20.6146 24.5 16.4289V7.58676C24.5 3.40102 21.1068 0.0078125 16.9211 0.0078125H8.07895Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 4.74465C13.0232 4.74465 13.4474 5.16881 13.4474 5.69202V11.0604H18.8158C19.339 11.0604 19.7632 11.4846 19.7632 12.0078C19.7632 12.531 19.339 12.9552 18.8158 12.9552H13.4474V18.3236C13.4474 18.8468 13.0232 19.271 12.5 19.271C11.9768 19.271 11.5526 18.8468 11.5526 18.3236V12.9552H6.18421C5.66099 12.9552 5.23684 12.531 5.23684 12.0078C5.23684 11.4846 5.66099 11.0604 6.18421 11.0604H11.5526V5.69202C11.5526 5.16881 11.9768 4.74465 12.5 4.74465Z" fill="black"/>
            </svg>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.74 14.3346C16.0867 14.5412 16.0867 15.0577 15.74 15.2643L10.28 18.5184C9.93333 18.725 9.5 18.4668 9.5 18.0536L9.5 11.5454C9.5 11.1322 9.93333 10.8739 10.28 11.0805L15.74 14.3346Z" fill="black"/>
              <path d="M6.5 2.00781L10.5 8.00781" stroke="black" stroke-width="1.8"/>
              <path d="M13.5 2.00781L17.5 8.00781" stroke="black" stroke-width="1.8"/>
              <rect x="2.4" y="1.90781" width="20.2" height="20.2" rx="5.1" stroke="black" stroke-width="1.8"/>
              <path d="M2.5 8.00781H22.5" stroke="black" stroke-width="1.8"/>
            </svg>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="/images/images/new/footer_avatar.png" className="w-[25px] xxs:w-[30px] xs:w-[35px] sm:w-[40px]" alt=""/>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default InstagramPreview;
