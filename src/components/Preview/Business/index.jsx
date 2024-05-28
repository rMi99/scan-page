import {React} from "react";
import "../index.css";
import useLanguage from "../../../utils/useLanguage";
import useUpdateDomTitle from "../../../utils/updateDomTitle";


let BusinessPreview = (props) => {

  const t = useLanguage();
  useUpdateDomTitle('Online QR Generator - Scanned Page | Business',"#1A97F0");

  return (
    <div className="flex flex-col justify-center items-center relative">
      <div 
        className="bg-[#1A97F0] bottom-3 right-3 fixed z-50 p-2 rounded-md cursor-pointer" 
      >
        <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className="bi bi-three-dots-vertical">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
      </div>
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <svg className="hidden md:block top-0 absolute" width="2066" height="348" viewBox="0 0 2066 348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H2066V321.625C2066 321.625 1559.14 262.282 1033 321.625C506.859 380.968 0 321.625 0 321.625V0Z" fill="#1A97F0"/>
        </svg>
        <svg className="md:hidden top-0 absolute" width="770" height="348" viewBox="0 0 770 348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H770V321.625C770 321.625 581.093 262.282 385 321.625C188.907 380.968 0 321.625 0 321.625V0Z" fill="#1A97F0"/>
        </svg>
      </div>
      <div
        className="flex flex-col items-center justify-center mt-[50px] xs:mt-[73px] w-full max-w-[700px] px-[16px]"
        >
        <h1 className="text-white text-lg xs:text-xl font-medium mb-[14px] xs:mb-[28px]">Boulangerie Pâtissier</h1>
        <div className="w-full bg-white flex flex-col justify-center items-center p-[10px] rounded-[4px] mb-[10px] xs:mb-[20px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <img src="/images/images/new/business.webp" className="w-full" width="324" height="259" alt=""/>
          <h1 className="text-black text-lg xs:text-2xl my-[10px] xs:my-[14px] font-bold">Boulangerie Pâtissier</h1>
          <h2 className="text-[#767C83] text-sm xs:text-base mb-[10px] xs:mb-[17px] ">{t('bushiness.subtitle')}</h2>
          <div className="w-full flex justify-center items-center bg-[#0079FF] rounded-[4px] py-[14px] cursor-pointer hover:opacity-80">
            <p className="text-base xs:text-lg text-white font-medium">{t('bushiness.button')}</p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] p-[10px] mb-[20px]">
          <div className="flex flex-row justify-start items-center space-x-[8px] xs:space-x-[17px] w-full mb-[10px]">
            <div className="w-[35px] xs:w-[44px] h-[35px] xs:h-[44px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center rtl:ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z" fill="#767C83"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4311 15.6925C15.3001 15.6925 15.1681 15.6585 15.0471 15.5875L11.2771 13.3385C11.0511 13.2025 10.9111 12.9575 10.9111 12.6935V7.84546C10.9111 7.43146 11.2471 7.09546 11.6611 7.09546C12.0761 7.09546 12.4111 7.43146 12.4111 7.84546V12.2675L15.8161 14.2975C16.1711 14.5105 16.2881 14.9705 16.0761 15.3265C15.9351 15.5615 15.6861 15.6925 15.4311 15.6925Z" fill="#767C83"/>
              </svg>
            </div>
            <p className="font-medium text-sm xs:text-base sm:text-xl text-black">{t('bushiness.open_hours')} - <span className="text-[#FE4256]">{t('bushiness.closed')}</span></p>
          </div>
          <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
          <div className="flex flex-col items-center justify-center text-[10px] xs:text-sm sm:text-base w-full px-[10px] mb-[10px] mt-[20px] space-y-[10px]">
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-black">{t('bushiness.saturday')} :</p>
              <p className="text-[#767C83]">10:00 am  -  05:00 pm</p>
            </div>
            <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
            
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-black">{t('bushiness.sunday')} :</p>
              <p className="text-[#767C83]">10:00 am  -  05:00 pm</p>
            </div>
            <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
            
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-black">{t('bushiness.monday')} :</p>
              <p className="text-[#767C83]">10:00 am  -  05:00 pm</p>
            </div>
            <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
            
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-black">{t('bushiness.tuesday')} :</p>
              <p className="text-[#767C83]">10:00 am  -  05:00 pm</p>
            </div>
            <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
            
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-black">{t('bushiness.wednesday')} :</p>
              <p className="text-[#767C83]">10:00 am  -  05:00 pm</p>
            </div>
            <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
            
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-black">{t('bushiness.thursday')} :</p>
              <p className="text-[#767C83]">10:00 am  -  05:00 pm</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] p-[10px] mb-[20px]">
          <div className="flex flex-row justify-start items-center space-x-[10px] xs:space-x-[17px] w-full mb-[10px]">
            <div className="w-[44px] h-[44px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center rtl:ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.251 8.5C11.286 8.5 10.501 9.285 10.501 10.251C10.501 11.216 11.286 12 12.251 12C13.216 12 14.001 11.216 14.001 10.251C14.001 9.285 13.216 8.5 12.251 8.5ZM12.251 13.5C10.459 13.5 9.00098 12.043 9.00098 10.251C9.00098 8.458 10.459 7 12.251 7C14.043 7 15.501 8.458 15.501 10.251C15.501 12.043 14.043 13.5 12.251 13.5Z" fill="#767C83"/>
                <mask id="mask0_797_11935" maskUnits="userSpaceOnUse" x="4" y="2" width="17" height="20">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 2H20.4995V21.5H4V2Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_797_11935)">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.249 3.5C8.52702 3.5 5.49902 6.557 5.49902 10.313C5.49902 15.092 11.123 19.748 12.249 19.996C13.375 19.747 18.999 15.091 18.999 10.313C18.999 6.557 15.971 3.5 12.249 3.5ZM12.249 21.5C10.455 21.5 3.99902 15.948 3.99902 10.313C3.99902 5.729 7.70002 2 12.249 2C16.798 2 20.499 5.729 20.499 10.313C20.499 15.948 14.043 21.5 12.249 21.5Z" fill="#767C83"/>
                </g>
              </svg>
            </div>
            <p className="font-medium text-base xs:text-xl text-black">{t('bushiness.address')}</p>
          </div>
          <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
          <div className="flex flex-col items-start justify-center w-full px-[10px] mb-[10px] mt-[20px] space-y-[4px]">
            <p className="text-sm xs:text-base text-left text-[#767C83] rtl:text-right">{t('bushiness.location_1')} {t('bushiness.location_2')}</p>
          </div>
          <div className="w-full flex flex-row items-start px-[10px]">
            <span className="text-base xs:text-lg font-medium text-[#0E80FF] cursor-pointer">{t('bushiness.show_on')}</span>
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-center mb-[20px]">
          <p className="text-lg xs:text-xl text-[#131D29] font-medium mb-[10px]">{t('bushiness.social_network')}</p>
          <div className="w-full space-y-[15px]">
            {/* Facebook */}
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                  <img src="/images/social/facebook.png" width="132" height="132" className="w-[44px]" alt=""/>
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">Facebook</p>
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
                  <img src="/images/social/instagram.png" width="132" height="132" className="w-[44px]" alt=""/>
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">Instagram</p>
                </div>
                <svg className="mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83"/>
                  <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83"/>
                </svg>
              </div>
            </div>
            {/* Google */}
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                  <img src="/images/social/google.png" width="132" height="132" className="w-[44px]" alt=""/>
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">Google</p>
                </div>
                <svg className="mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83"/>
                  <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83"/>
                </svg>
              </div>
            </div>
            {/* Linkedin */}
            <div className="my-[5px] flex flex-col w-full cursor-pointer shadow-[1px_6px_30px_rgba(0,31,14,0.05)] hover:opacity-80">
              <div className="flex flex-row justify-between items-center p-[10px] rounded-[4px]">
                <div className="space-x-[10px] xs:space-x-[20px] flex flex-row items-center">
                  <img src="/images/social/linkedin.png" width="132" height="132" className="w-[44px]" alt=""/>
                  <p className="text-base xs:text-xl text-[#131D29] font-medium">LinkedIn</p>
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
        
        
        
        <div className="w-full flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] p-[10px] mb-[20px]">
          <div className="flex flex-row justify-start items-center space-x-[17px] w-full mb-[10px]">
            <div className="w-[44px] h-[44px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center rtl:ml-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.25 1.5C1.5 1.5 1.5 1.708 1.5 4.25V4.275C1.5 5.382 1.5 6.182 1.771 6.52C2.036 6.848 2.823 7 4.25 7C5.677 7 6.464 6.847 6.729 6.519C7 6.182 7 5.382 7 4.274C7 1.708 7 1.5 4.25 1.5ZM4.25 8.5C2.564 8.5 1.299 8.323 0.604 7.46C0 6.711 0 5.689 0 4.275L0.75 4.25H0C0 1.38 0.181 0 4.25 0C8.319 0 8.5 1.38 8.5 4.25C8.5 5.688 8.5 6.711 7.896 7.46C7.201 8.323 5.936 8.5 4.25 8.5Z" fill="#767C83"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.25 1.5C12.5 1.5 12.5 1.708 12.5 4.25V4.275C12.5 5.382 12.5 6.182 12.771 6.52C13.036 6.848 13.823 7 15.25 7C16.677 7 17.464 6.847 17.729 6.519C18 6.182 18 5.382 18 4.274C18 1.708 18 1.5 15.25 1.5ZM15.25 8.5C13.564 8.5 12.299 8.323 11.604 7.46C11 6.711 11 5.689 11 4.275L11.75 4.25H11C11 1.38 11.181 0 15.25 0C19.319 0 19.5 1.38 19.5 4.25C19.5 5.688 19.5 6.711 18.896 7.46C18.201 8.323 16.936 8.5 15.25 8.5Z" fill="#767C83"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M4.25 12.5C1.5 12.5 1.5 12.708 1.5 15.25V15.275C1.5 16.382 1.5 17.182 1.771 17.52C2.036 17.848 2.823 18 4.25 18C5.677 18 6.464 17.847 6.729 17.519C7 17.182 7 16.382 7 15.274C7 12.708 7 12.5 4.25 12.5ZM4.25 19.5C2.564 19.5 1.299 19.323 0.604 18.46C0 17.711 0 16.689 0 15.275L0.75 15.25H0C0 12.38 0.181 11 4.25 11C8.319 11 8.5 12.38 8.5 15.25C8.5 16.688 8.5 17.711 7.896 18.46C7.201 19.323 5.936 19.5 4.25 19.5Z" fill="#767C83"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.25 12.5C12.5 12.5 12.5 12.708 12.5 15.25V15.275C12.5 16.382 12.5 17.182 12.771 17.52C13.036 17.848 13.823 18 15.25 18C16.677 18 17.464 17.847 17.729 17.519C18 17.182 18 16.382 18 15.274C18 12.708 18 12.5 15.25 12.5ZM15.25 19.5C13.564 19.5 12.299 19.323 11.604 18.46C11 17.711 11 16.689 11 15.275L11.75 15.25H11C11 12.38 11.181 11 15.25 11C19.319 11 19.5 12.38 19.5 15.25C19.5 16.688 19.5 17.711 18.896 18.46C18.201 19.323 16.936 19.5 15.25 19.5Z" fill="#767C83"/>
              </svg>
            </div>
            <p className="font-medium text-lg xs:text-xl text-black">{t('bushiness.facilities')}</p>
          </div>
          <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
          <div className="flex flex-col items-center justify-center w-full px-[10px] mb-[20px] mt-[20px] space-y-[25px]">
            <div className="w-full grid grid-cols-4 justify-center items-center gap-3">
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.54297 12.0013C9.54845 8.90873 14.7556 8.90873 18.7611 12.0013" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.83203 8.75958C8.47696 4.40013 15.8172 4.40013 21.4622 8.75958" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.29297 15.4007C10.2272 13.1278 14.0557 13.1278 16.99 15.4007" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.72363 18.8103C11.1954 17.6739 13.105 17.6739 14.5768 18.8103" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62147 21.2334H3.82695C3.05845 21.2334 2.42969 20.6046 2.42969 19.8361V12.8498C2.42969 11.6621 3.33791 10.7539 4.52558 10.7539C5.71325 10.7539 6.62147 11.6621 6.62147 12.8498V21.2334Z" stroke="#767C83" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.2008 21.2334H16.4062V12.8498C16.4062 11.6621 17.3145 10.7539 18.5021 10.7539C19.6898 10.7539 20.598 11.6621 20.598 12.8498V19.8361C20.598 20.6046 19.9693 21.2334 19.2008 21.2334Z" stroke="#767C83" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.4058 14.2461H6.625V21.2324H16.4058V14.2461Z" stroke="#767C83" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.53125 10.7539V6.42237C4.53125 4.95525 5.71892 3.76758 7.18604 3.76758H15.7792C17.3162 3.76758 18.5039 4.95525 18.5039 6.42237V10.7539" stroke="#767C83" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.502 17.2745C13.8816 19.685 11.6933 21.4662 9.08904 21.4662C6.00231 21.4662 3.5 18.964 3.5 15.8772C3.5 13.6216 4.83622 11.678 6.76027 10.7949" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.08594 6.5625L10.0174 14.9461L17.0037 14.4803L18.401 19.6036H19.7983" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.9448 4.69895C10.9448 5.72785 10.1107 6.56196 9.08176 6.56196C8.05287 6.56196 7.21875 5.72785 7.21875 4.69895C7.21875 3.67004 8.05287 2.83594 9.08176 2.83594C10.1107 2.83594 10.9448 3.67004 10.9448 4.69895Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.3438 10.2891H16.0698" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_797_11969"  maskUnits="userSpaceOnUse" x="1" y="13" width="16" height="8">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.93359 13.9736H16.0774V20.587H1.93359V13.9736Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_797_11969)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00559 15.3709C6.41694 15.3709 3.33085 15.7034 3.33085 17.2917C3.33085 18.5511 5.24044 19.1901 9.00559 19.1901C12.7707 19.1901 14.6803 18.5445 14.6803 17.273C14.6803 16.0108 12.7707 15.3709 9.00559 15.3709ZM9.00559 20.5873C7.07179 20.5873 1.93359 20.5873 1.93359 17.2917C1.93359 13.9736 7.25622 13.9736 9.00559 13.9736C12.0414 13.9736 16.0776 14.3155 16.0776 17.273C16.0776 20.5873 10.755 20.5873 9.00559 20.5873Z" fill="#767C83"/>
                    </g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00492 4.23295C7.13725 4.23295 5.61796 5.75224 5.61796 7.61898C5.61796 9.48572 7.13725 11.005 9.00492 11.005H9.0338C9.93177 11.0013 10.7776 10.6482 11.4119 10.0083C12.0472 9.37021 12.3947 8.52161 12.3909 7.62178C12.3909 5.75224 10.8717 4.23295 9.00492 4.23295ZM9.00492 12.4023C6.3669 12.4023 4.2207 10.2561 4.2207 7.61898C4.2207 4.98189 6.3669 2.83569 9.00492 2.83569C11.642 2.83569 13.7882 4.98189 13.7882 7.61898C13.7938 8.88956 13.301 10.0893 12.4031 10.9929C11.507 11.8974 10.31 12.3976 9.03659 12.4023H9.00492Z" fill="#767C83"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.4245 11.3421C15.0817 11.3421 14.7827 11.0897 14.7333 10.7404C14.6802 10.3585 14.9457 10.0045 15.3276 9.9514C16.4901 9.78839 17.3676 8.77957 17.3695 7.60401C17.3695 6.4359 16.533 5.45036 15.3826 5.2622C15.0016 5.19886 14.7436 4.84023 14.806 4.45924C14.8684 4.07825 15.2289 3.82209 15.608 3.88264C17.4384 4.18258 18.7667 5.74844 18.7667 7.60494C18.763 9.47261 17.3686 11.0767 15.5223 11.3356C15.4897 11.3403 15.4571 11.3421 15.4245 11.3421Z" fill="#767C83"/>
                    <mask id="mask1_797_11969" maskUnits="userSpaceOnUse" x="16" y="13" width="5" height="6">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.6934 13.5325H20.544V18.1691H16.6934V13.5325Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask1_797_11969)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.6032 18.1691C18.321 18.1691 18.0555 17.9967 17.9502 17.7182C17.8133 17.3577 17.9949 16.9535 18.3554 16.8175C19.1472 16.5175 19.1472 16.1514 19.1472 15.9949C19.1472 15.4668 18.5222 15.1053 17.2898 14.9218C16.9079 14.8641 16.6442 14.5083 16.7011 14.1273C16.7588 13.7453 17.1212 13.4892 17.4956 13.5386C20.0163 13.9158 20.5445 15.083 20.5445 15.9949C20.5445 16.674 20.251 17.5934 18.851 18.1234C18.7699 18.1542 18.6861 18.1691 18.6032 18.1691Z" fill="#767C83"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_797_11981)">
                    <path d="M4.83965 7.48178H9.61199C10.3854 7.48178 10.049 6.4499 10.049 6.4499L8.36389 0.792049C8.20215 0.249563 7.69111 0.501768 7.42877 0.675727C5.6029 2.03771 4.34048 4.09447 4.05194 6.44781C4.0495 6.46947 3.94331 7.48178 4.83965 7.48178ZM7.16958 2.81388C7.34738 2.68569 7.67748 2.51417 7.7952 2.9075L8.54518 5.42606C8.69644 5.93362 8.3307 6.01955 8.14242 6.03212H6.27149C5.71049 6.03212 5.64971 5.68421 5.65879 5.48824C5.80166 4.4134 6.35917 3.46885 7.16958 2.81388Z" fill="#767C83"/>
                    <path d="M20.3034 9.912C20.2992 8.90877 19.3305 8.8183 19.0542 8.81445H4.84305C4.055 8.81445 4.026 9.43519 4.04172 9.66608C4.48431 13.6165 7.96279 16.6936 12.1916 16.6936C16.3313 16.6936 19.7466 13.7419 20.3034 9.912ZM17.9756 11.9303C17.221 13.0516 15.9076 14.4419 13.8411 14.9579C13.3789 15.093 12.8892 15.1664 12.3816 15.1664C12.2821 15.1664 12.1853 15.1577 12.0871 15.1524C12.0851 15.1542 12.084 15.1563 12.0816 15.158C9.63042 15.1943 7.85345 13.7101 6.75415 12.3806C6.67975 12.2797 6.36327 11.8056 6.02688 11.1053C5.95352 10.9456 5.73136 10.3424 6.55924 10.3424H7.36092H7.81572H16.0424H17.403H17.614C17.7695 10.3434 18.6962 10.3909 18.3046 11.3543C18.2609 11.4504 18.2131 11.5478 18.1579 11.6453C18.1034 11.7347 18.0475 11.8245 17.9853 11.9174C17.9815 11.9213 17.9787 11.9258 17.9756 11.9303Z" fill="#767C83"/>
                    <path d="M6.58201 17.5371C5.15156 17.5371 3.99219 18.6968 3.99219 20.1276C3.99219 21.5581 5.15156 22.7178 6.58201 22.7178C8.01245 22.7178 9.17183 21.5581 9.17183 20.1276C9.17183 18.6972 8.0128 17.5371 6.58201 17.5371ZM6.58201 21.2629C5.95499 21.2629 5.44674 20.7543 5.44674 20.1276C5.44674 19.5006 5.95499 18.992 6.58201 18.992C7.20938 18.992 7.71763 19.5006 7.71763 20.1276C7.71763 20.7543 7.20938 21.2629 6.58201 21.2629Z" fill="#767C83"/>
                    <path d="M17.7148 17.5371C16.284 17.5371 15.125 18.6968 15.125 20.1276C15.125 21.5581 16.284 22.7178 17.7148 22.7178C19.1449 22.7178 20.3046 21.5581 20.3046 20.1276C20.3046 18.6972 19.1446 17.5371 17.7148 17.5371ZM17.7148 21.2629C17.0871 21.2629 16.5788 20.7543 16.5788 20.1276C16.5788 19.5006 17.0871 18.992 17.7148 18.992C18.3418 18.992 18.8501 19.5006 18.8501 20.1276C18.8501 20.7543 18.3418 21.2629 17.7148 21.2629Z" fill="#767C83"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_797_11981">
                    <rect width="22.3562" height="22.3562" fill="white" transform="translate(0.96875 0.412109)"/>
                    </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.44261 15.9466C4.21905 18.6387 6.24973 20.837 8.9511 20.837H13.413C16.4497 20.837 18.5363 18.3872 18.0333 15.3877C17.5023 12.2392 14.4656 9.65894 11.2706 9.65894C7.80535 9.65894 4.73138 12.4907 4.44261 15.9466Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.0876 7.33014C11.3737 7.33014 12.4163 6.28752 12.4163 5.00137C12.4163 3.71523 11.3737 2.67261 10.0876 2.67261C8.80141 2.67261 7.75879 3.71523 7.75879 5.00137C7.75879 6.28752 8.80141 7.33014 10.0876 7.33014Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.4519 8.44795C17.4808 8.44795 18.3149 7.61385 18.3149 6.58494C18.3149 5.55602 17.4808 4.72192 16.4519 4.72192C15.423 4.72192 14.5889 5.55602 14.5889 6.58494C14.5889 7.61385 15.423 8.44795 16.4519 8.44795Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.8973 12.1739C20.6689 12.1739 21.2945 11.5483 21.2945 10.7767C21.2945 10.005 20.6689 9.37939 19.8973 9.37939C19.1256 9.37939 18.5 10.005 18.5 10.7767C18.5 11.5483 19.1256 12.1739 19.8973 12.1739Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.03294 10.311C5.06185 10.311 5.89595 9.47689 5.89595 8.44797C5.89595 7.41906 5.06185 6.58496 4.03294 6.58496C3.00402 6.58496 2.16992 7.41906 2.16992 8.44797C2.16992 9.47689 3.00402 10.311 4.03294 10.311Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.76768 23.5166H6.51768V22.7666V17.3686H9.90868C12.1195 17.3686 13.9809 16.6262 15.4284 15.1202C16.892 13.6177 17.6086 11.7054 17.6086 9.44604C17.6086 7.18667 16.8921 5.27443 15.4285 3.77195C13.981 2.26593 12.1195 1.52344 9.90868 1.52344H2.4375H1.6875V2.27344V22.7666V23.5166H2.4375H5.76768ZM11.8752 11.9254L11.8747 11.9259C11.3088 12.5444 10.6054 12.8532 9.70597 12.8532H6.51768V6.03886H9.70597C10.599 6.03886 11.3007 6.35247 11.8685 6.98862L11.8749 6.99577L11.8815 7.00276C12.4694 7.62844 12.7784 8.42328 12.7784 9.44604C12.7784 10.4686 12.4693 11.2773 11.8752 11.9254Z" stroke="#767C83" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8123 20.8369H6.68358C5.10001 20.8369 3.7959 19.5421 3.7959 17.9492V5.09446C3.7959 3.5109 5.0907 2.20679 6.68358 2.20679H15.8123C17.3959 2.20679 18.7 3.50159 18.7 5.09446V17.9492C18.7 19.5421 17.4052 20.8369 15.8123 20.8369Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.3027 12.4534H5.19316C4.42001 12.4534 3.7959 11.8293 3.7959 11.0562V9.19316C3.7959 8.42001 4.42001 7.7959 5.19316 7.7959H17.3027C18.0759 7.7959 18.7 8.42001 18.7 9.19316V11.0562C18.7 11.8293 18.0759 12.4534 17.3027 12.4534Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.9831 16.8315H7.99146" stroke="#767C83" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5036 16.8315H14.512" stroke="#767C83" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.91992 5.00122H13.5775" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.416 3.34912H8.8768C6.55735 3.34912 6.04502 4.50419 5.74694 5.92008L4.69434 10.9595H19.5984L18.5458 5.92008C18.2478 4.50419 17.7354 3.34912 15.416 3.34912Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.4527 19.1754C21.5551 20.2652 20.6795 21.206 19.5617 21.206H17.8105C16.8045 21.206 16.6647 20.7776 16.4877 20.2466L16.3014 19.6877C16.0406 18.9239 15.873 18.4115 14.5316 18.4115H9.76226C8.42089 18.4115 8.22528 18.9891 7.9924 19.6877L7.8061 20.2466C7.62911 20.7776 7.48939 21.206 6.48336 21.206H4.73213C3.61432 21.206 2.7387 20.2652 2.84117 19.1754L3.36281 13.5025C3.49322 12.1052 3.76336 10.9595 6.20391 10.9595H18.0899C20.5305 10.9595 20.8006 12.1052 20.931 13.5025L21.4527 19.1754Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.69518 8.16504H3.76367" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.5301 8.16504H19.5986" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.1465 3.50732V5.37034" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.75 5.37036H13.5445" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.55762 14.6855H9.35214" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.9414 14.6855H17.7359" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.0625 6.30156C4.0625 5.52985 4.68808 4.9043 5.45976 4.9043H17.5693C18.3411 4.9043 18.9666 5.52985 18.9666 6.30156V11.4248H4.0625V6.30156Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.125 17.0156V18.8786" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.8984 17.0156V18.8786" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.65272 9.09766H6.8582C6.08649 9.09766 5.46094 9.72321 5.46094 10.4949V11.4264H11.05V10.4949C11.05 9.72321 10.4244 9.09766 9.65272 9.09766Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.1762 9.09766H13.3816C12.6099 9.09766 11.9844 9.72321 11.9844 10.4949V11.4264H17.5734V10.4949C17.5734 9.72321 16.9479 9.09766 16.1762 9.09766Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.20312 12.823C2.20312 12.0513 2.8287 11.4258 3.60039 11.4258H19.436C20.2077 11.4258 20.8333 12.0513 20.8333 12.823V17.0148H2.20312V12.823Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2749 10.4658V17.2845C17.2749 19.4549 15.5144 21.2061 13.3533 21.2061H6.48805C4.32695 21.2061 2.56641 19.4456 2.56641 17.2845V10.4658C2.56641 8.29542 4.32695 6.54419 6.48805 6.54419H13.3533C15.5144 6.54419 17.2749 8.30474 17.2749 10.4658Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.82617 4.43897V2.80884" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.55273 4.43897V2.80884" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.2783 4.43897V2.80884" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.1951 12.9717C21.1951 15.1328 19.4345 16.8933 17.2734 16.8933V9.05005C19.4345 9.05005 21.1951 10.8013 21.1951 12.9717Z" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.56641 11.8909H17.0141" stroke="#767C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-center mb-[10px]">
                <div className="flex items-center justify-center w-[40px] xs:w-[50px] h-[40px] xs:h-[50px] rounded-full bg-[#F9F9F9]">
                  <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_797_12001)">
                    <path d="M6.3071 21.524H10.1828M10.1828 21.524H14.0586H10.221V16.0445L15.2531 10.2786M10.1828 21.524V16.0445L5.18571 10.2786M15.2531 10.2786L18.469 6.59375H13.3331H1.99219L5.18571 10.2786M15.2531 10.2786H5.18571" stroke="#767C83" strokeWidth="1.5"/>
                    <path d="M12.7578 6.59527C12.7578 5.7546 13.0012 4.93191 13.4587 4.22658C13.9161 3.52127 14.568 2.96349 15.3356 2.62064C16.1032 2.2778 16.9537 2.16455 17.7842 2.29458C18.6147 2.42461 19.3899 2.79235 20.016 3.35339C20.642 3.91442 21.0923 4.64474 21.3123 5.45611C21.5323 6.26748 21.5126 7.12522 21.2557 7.92568C20.9988 8.72613 20.5155 9.43507 19.8644 9.96681C19.2133 10.4986 18.4221 10.8305 17.5865 10.9223" stroke="#767C83" strokeWidth="1.5" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_797_12001">
                    <rect width="22.3562" height="22.3562" fill="white" transform="translate(0.0703125 0.712891)"/>
                    </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] p-[10px] mb-[20px]">
          <div className="flex flex-row justify-start items-center space-x-[17px] w-full mb-[10px]">
            <div className="w-[44px] h-[44px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center rtl:ml-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.25 1.5C1.5 1.5 1.5 1.708 1.5 4.25V4.275C1.5 5.382 1.5 6.182 1.771 6.52C2.036 6.848 2.823 7 4.25 7C5.677 7 6.464 6.847 6.729 6.519C7 6.182 7 5.382 7 4.274C7 1.708 7 1.5 4.25 1.5ZM4.25 8.5C2.564 8.5 1.299 8.323 0.604 7.46C0 6.711 0 5.689 0 4.275L0.75 4.25H0C0 1.38 0.181 0 4.25 0C8.319 0 8.5 1.38 8.5 4.25C8.5 5.688 8.5 6.711 7.896 7.46C7.201 8.323 5.936 8.5 4.25 8.5Z" fill="#767C83"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.25 1.5C12.5 1.5 12.5 1.708 12.5 4.25V4.275C12.5 5.382 12.5 6.182 12.771 6.52C13.036 6.848 13.823 7 15.25 7C16.677 7 17.464 6.847 17.729 6.519C18 6.182 18 5.382 18 4.274C18 1.708 18 1.5 15.25 1.5ZM15.25 8.5C13.564 8.5 12.299 8.323 11.604 7.46C11 6.711 11 5.689 11 4.275L11.75 4.25H11C11 1.38 11.181 0 15.25 0C19.319 0 19.5 1.38 19.5 4.25C19.5 5.688 19.5 6.711 18.896 7.46C18.201 8.323 16.936 8.5 15.25 8.5Z" fill="#767C83"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M4.25 12.5C1.5 12.5 1.5 12.708 1.5 15.25V15.275C1.5 16.382 1.5 17.182 1.771 17.52C2.036 17.848 2.823 18 4.25 18C5.677 18 6.464 17.847 6.729 17.519C7 17.182 7 16.382 7 15.274C7 12.708 7 12.5 4.25 12.5ZM4.25 19.5C2.564 19.5 1.299 19.323 0.604 18.46C0 17.711 0 16.689 0 15.275L0.75 15.25H0C0 12.38 0.181 11 4.25 11C8.319 11 8.5 12.38 8.5 15.25C8.5 16.688 8.5 17.711 7.896 18.46C7.201 19.323 5.936 19.5 4.25 19.5Z" fill="#767C83"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.25 12.5C12.5 12.5 12.5 12.708 12.5 15.25V15.275C12.5 16.382 12.5 17.182 12.771 17.52C13.036 17.848 13.823 18 15.25 18C16.677 18 17.464 17.847 17.729 17.519C18 17.182 18 16.382 18 15.274C18 12.708 18 12.5 15.25 12.5ZM15.25 19.5C13.564 19.5 12.299 19.323 11.604 18.46C11 17.711 11 16.689 11 15.275L11.75 15.25H11C11 12.38 11.181 11 15.25 11C19.319 11 19.5 12.38 19.5 15.25C19.5 16.688 19.5 17.711 18.896 18.46C18.201 19.323 16.936 19.5 15.25 19.5Z" fill="#767C83"/>
              </svg>
            </div>
            <p className="font-medium text-lg xs:text-xl text-black">{t('bushiness.contact')}</p>
          </div>
          <div className="w-full h-[1px] bg-[#F2F2F2] rounded-full"></div>
          <div className="flex flex-col items-center justify-center w-full px-[10px] mb-[10px] mt-[20px] space-y-[25px]">
            {/* Name */}
            <div className="flex flex-row items-center space-x-[16px] w-full cursor-pointer hover:opacity-80">
              <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10 rtl:ml-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_797_12711" maskUnits="userSpaceOnUse" x="3" y="10" width="12" height="7">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 10.8721H14.8799V16.4026H3V10.8721Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_797_12711)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.94075 11.9971C5.745 11.9971 4.125 12.5461 4.125 13.6298C4.125 14.7233 5.745 15.2776 8.94075 15.2776C12.1357 15.2776 13.755 14.7286 13.755 13.6448C13.755 12.5513 12.1357 11.9971 8.94075 11.9971ZM8.94075 16.4026C7.4715 16.4026 3 16.4026 3 13.6298C3 11.1578 6.39075 10.8721 8.94075 10.8721C10.41 10.8721 14.88 10.8721 14.88 13.6448C14.88 16.1168 11.49 16.4026 8.94075 16.4026Z" fill="#767C83"/>
                  </g>
                  <mask id="mask1_797_12711" maskUnits="userSpaceOnUse" x="4" y="1" width="9" height="9">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.95703 1.5H12.9221V9.46395H4.95703V1.5Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask1_797_12711)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.9403 2.57076C7.33455 2.57076 6.02805 3.87651 6.02805 5.48226C6.0228 7.08276 7.31955 8.38776 8.91855 8.39376L8.9403 8.92926V8.39376C10.5453 8.39376 11.8511 7.08726 11.8511 5.48226C11.8511 3.87651 10.5453 2.57076 8.9403 2.57076ZM8.9403 9.46401H8.91631C6.72481 9.45726 4.94955 7.67001 4.95705 5.48001C4.95705 3.28626 6.74355 1.49976 8.9403 1.49976C11.1363 1.49976 12.9221 3.28626 12.9221 5.48226C12.9221 7.67826 11.1363 9.46401 8.9403 9.46401Z" fill="#767C83"/>
                  </g>
                </svg>
              </div>
              <div className="flex-col text-left rtl:text-right">
                <p className="text-xs text-[#767C83]">{t('bushiness.name')}</p>
                <p className="text-sm xs:text-base text-black font-medium">Boulangerie Pâtissier</p>
              </div>
            </div>
            {/* website */}
            <div className="flex flex-row items-center space-x-[16px] w-full cursor-pointer hover:opacity-80">
              <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10 rtl:ml-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z" fill="#767C83"/>
                  <path d="M6.74969 16.3125H5.99969C5.69219 16.3125 5.43719 16.0575 5.43719 15.75C5.43719 15.4425 5.67719 15.195 5.98469 15.1875C4.80719 11.1675 4.80719 6.8325 5.98469 2.8125C5.67719 2.805 5.43719 2.5575 5.43719 2.25C5.43719 1.9425 5.69219 1.6875 5.99969 1.6875H6.74969C6.92969 1.6875 7.10219 1.7775 7.20719 1.92C7.31219 2.07 7.34219 2.2575 7.28219 2.43C5.87219 6.6675 5.87219 11.3325 7.28219 15.5775C7.34219 15.75 7.31219 15.9375 7.20719 16.0875C7.10219 16.2225 6.92969 16.3125 6.74969 16.3125Z" fill="#767C83"/>
                  <path d="M11.2498 16.3125C11.1898 16.3125 11.1298 16.305 11.0698 16.2825C10.7773 16.185 10.6123 15.8625 10.7173 15.57C12.1273 11.3325 12.1273 6.66751 10.7173 2.42251C10.6198 2.13001 10.7773 1.80751 11.0698 1.71001C11.3698 1.61251 11.6848 1.77001 11.7823 2.06251C13.2748 6.53251 13.2748 11.4525 11.7823 15.915C11.7073 16.1625 11.4823 16.3125 11.2498 16.3125Z" fill="#767C83"/>
                  <path d="M9 12.9001C6.9075 12.9001 4.8225 12.6076 2.8125 12.0151C2.805 12.3151 2.5575 12.5626 2.25 12.5626C1.9425 12.5626 1.6875 12.3076 1.6875 12.0001V11.2501C1.6875 11.0701 1.7775 10.8976 1.92 10.7926C2.07 10.6876 2.2575 10.6576 2.43 10.7176C6.6675 12.1276 11.34 12.1276 15.5775 10.7176C15.75 10.6576 15.9375 10.6876 16.0875 10.7926C16.2375 10.8976 16.32 11.0701 16.32 11.2501V12.0001C16.32 12.3076 16.065 12.5626 15.7575 12.5626C15.45 12.5626 15.2025 12.3226 15.195 12.0151C13.1775 12.6076 11.0925 12.9001 9 12.9001Z" fill="#767C83"/>
                  <path d="M15.7498 7.31252C15.6898 7.31252 15.6298 7.30502 15.5698 7.28252C11.3323 5.87252 6.65984 5.87252 2.42234 7.28252C2.12234 7.38002 1.80734 7.22252 1.70984 6.93002C1.61984 6.63002 1.77734 6.31502 2.06984 6.21752C6.53984 4.72502 11.4598 4.72502 15.9223 6.21752C16.2148 6.31502 16.3798 6.63752 16.2748 6.93002C16.2073 7.16252 15.9823 7.31252 15.7498 7.31252Z" fill="#767C83"/>
                </svg>
              </div>
              <div className="flex-col text-left truncate rtl:text-right">
                <p className="text-xs text-[#767C83]">{t('bushiness.Website')}</p>
                <p className="text-sm xs:text-base text-[#0079FF] font-medium truncate">www.boulangerie.com</p>
              </div>
            </div>
            {/* phone */}
            <div className="flex flex-row items-center space-x-[16px] w-full cursor-pointer hover:opacity-80">
              <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10 rtl:ml-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_797_11795" maskUnits="userSpaceOnUse" x="1" y="1" width="16" height="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 1.50024H16.8747V16.8749H1.5V1.50024Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_797_11795)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.26931 3.79562C3.27081 3.79562 3.23331 3.83462 3.18606 3.88112C3.00456 4.05737 2.62881 4.42412 2.62506 5.19137C2.61906 6.26462 3.32481 8.25737 6.72306 11.6549C10.1056 15.0359 12.0953 15.7499 13.1708 15.7499H13.1866C13.9538 15.7461 14.3198 15.3696 14.4968 15.1889C14.5508 15.1334 14.5943 15.0929 14.6251 15.0674C15.3721 14.3159 15.7546 13.7564 15.7508 13.3979C15.7456 13.0319 15.2903 12.5991 14.6611 12.0006C14.4608 11.8101 14.2433 11.6031 14.0138 11.3736C13.4191 10.7804 13.1243 10.8816 12.4763 11.1096C11.5801 11.4239 10.3501 11.8514 8.43906 9.93962C6.52506 8.02712 6.95331 6.79862 7.26681 5.90237C7.49331 5.25437 7.59681 4.95887 7.00131 4.36337C6.76806 4.13087 6.55881 3.91037 6.36606 3.70787C5.77131 3.08237 5.34231 2.63012 4.97856 2.62487H4.97256C4.61331 2.62487 4.05531 3.00887 3.26556 3.79862C3.26781 3.79637 3.26856 3.79562 3.26931 3.79562ZM13.1716 16.8749C11.3026 16.8749 8.86581 15.3869 5.92806 12.4506C2.97906 9.50237 1.48881 7.05812 1.50006 5.18537C1.50681 3.94787 2.15556 3.31412 2.39931 3.07637C2.41206 3.06062 2.45556 3.01787 2.47056 3.00287C3.54606 1.92662 4.27131 1.49162 4.99281 1.49987C5.83056 1.51112 6.42681 2.13812 7.18131 2.93237C7.36806 3.12887 7.57056 3.34262 7.79631 3.56762C8.89131 4.66262 8.57931 5.55587 8.32881 6.27287C8.05581 7.05512 7.81956 7.73012 9.23406 9.14462C10.6501 10.5591 11.3251 10.3229 12.1043 10.0476C12.8221 9.79712 13.7131 9.48362 14.8096 10.5786C15.0316 10.8006 15.2423 11.0009 15.4366 11.1861C16.2346 11.9444 16.8646 12.5436 16.8751 13.3836C16.8841 14.0999 16.4491 14.8296 15.3751 15.9044L14.8996 15.5819L15.3016 15.9749C15.0638 16.2186 14.4308 16.8681 13.1926 16.8749H13.1716Z" fill="#767C83"/>
                  </g>
                </svg>
              </div>
              <div className="flex-col text-left rtl:text-right">
                <p className="text-xs text-[#767C83]">{t('bushiness.phone')}</p>
                <p className="text-sm xs:text-base text-black font-medium break-words">555-100-1000</p>
              </div>
            </div>
            {/* email */}
            <div className="flex flex-row items-center space-x-[16px] w-full cursor-pointer hover:opacity-80">
              <div className="bg-[#F9F9F9] p-[11px] rounded-full w-10 h-10 rtl:ml-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.83279 10.0986C8.33104 10.0986 7.83079 9.93287 7.41229 9.60137L4.04854 6.88937C3.80629 6.69437 3.76879 6.33962 3.96304 6.09812C4.15879 5.85737 4.51279 5.81912 4.75429 6.01337L8.11504 8.72237C8.53729 9.05687 9.13204 9.05687 9.55729 8.71937L12.8843 6.01487C13.1258 5.81762 13.4798 5.85512 13.6763 6.09662C13.872 6.33737 13.8353 6.69137 13.5945 6.88787L10.2615 9.59687C9.84004 9.93137 9.33604 10.0986 8.83279 10.0986Z" fill="#767C83"/>
                  <mask id="mask0_797_11802" maskUnits="userSpaceOnUse" x="0" y="1" width="17" height="16">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.75 1.5H16.8749V16.125H0.75V1.5Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_797_11802)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.12925 15H12.4943C12.4958 14.9985 12.5017 15 12.5063 15C13.362 15 14.121 14.694 14.703 14.1128C15.3787 13.44 15.75 12.4732 15.75 11.391V6.24C15.75 4.14525 14.3805 2.625 12.4943 2.625H5.13075C3.2445 2.625 1.875 4.14525 1.875 6.24V11.391C1.875 12.4732 2.247 13.44 2.922 14.1128C3.504 14.694 4.26375 15 5.11875 15H5.12925ZM5.1165 16.125C3.95925 16.125 2.92575 15.705 2.12775 14.91C1.239 14.0235 0.75 12.774 0.75 11.391V6.24C0.75 3.53775 2.63325 1.5 5.13075 1.5H12.4943C14.9918 1.5 16.875 3.53775 16.875 6.24V11.391C16.875 12.774 16.386 14.0235 15.4972 14.91C14.7 15.7042 13.6658 16.125 12.5063 16.125H12.4943H5.13075H5.1165Z" fill="#767C83"/>
                </g>
              </svg>
              </div>
              <div className="flex-col text-left truncate rtl:text-right">
                <p className="text-xs text-[#767C83]">{t('bushiness.email')}</p>
                <p className="text-sm xs:text-base text-black font-medium truncate">Boulangerie@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white flex flex-col justify-center items-center rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)] py-[20px] mb-[20px] ">
          <h1 className="text-[#131D29] font-medium text-lg xs:text-xl mb-[10px] ">{t('bushiness.about_company')}</h1>
          <div className="w-[38%] h-[1px] bg-[#F2F2F2] rounded-full"></div>
          <p className="text-xs mt-[17px] text-[#767C83] max-w-[250px]">{t('bushiness.about_company_text')}</p>
        </div>
      </div>
    </div>
  
  );
};

export default BusinessPreview;
