import React from "react";
import "../index.css";
import useUpdateDomTitle from "../../../utils/updateDomTitle";


let WebsitePreview = ({url}) => {

  useUpdateDomTitle('Online QR Generator - Scanned Page | Website',"#F38B41");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <svg className="hidden md:block top-0 absolute" width="2066" height="272" viewBox="0 0 2066 272" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H2066V261.658C2066 261.658 1616.99 238.388 1033 261.658C449.011 284.928 0 261.658 0 261.658V0Z" fill="#F38B41"/>
        </svg>
        <svg className="block md:hidden top-0 absolute" width="770" height="272" viewBox="0 0 770 272" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H770V261.658C770 261.658 602.653 238.388 385 261.658C167.347 284.928 0 261.658 0 261.658V0Z" fill="#F38B41"/>
        </svg>
      </div>
      <div
        className="flex flex-col items-center justify-center mt-[53px] w-full max-w-[700px] px-[16px]"
        >
        <div className="w-full flex flex-row items-center justify-start bg-white/[.08] border-[1px] border-white/20 p-[7px] xs:p-[14px] mb-[24px] space-x-[5px] xs:space-x-[10px] rounded-[27px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:pl-1">
            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white"/>
            <path d="M9.00219 21.75H8.00219C7.59219 21.75 7.25219 21.41 7.25219 21C7.25219 20.59 7.57219 20.26 7.98219 20.25C6.41219 14.89 6.41219 9.11 7.98219 3.75C7.57219 3.74 7.25219 3.41 7.25219 3C7.25219 2.59 7.59219 2.25 8.00219 2.25H9.00219C9.24219 2.25 9.47219 2.37 9.61219 2.56C9.75219 2.76 9.79219 3.01 9.71219 3.24C7.83219 8.89 7.83219 15.11 9.71219 20.77C9.79219 21 9.75219 21.25 9.61219 21.45C9.47219 21.63 9.24219 21.75 9.00219 21.75Z" fill="white"/>
            <path d="M15.0024 21.7497C14.9224 21.7497 14.8424 21.7397 14.7624 21.7097C14.3724 21.5797 14.1524 21.1497 14.2924 20.7597C16.1724 15.1097 16.1724 8.88969 14.2924 3.22969C14.1624 2.83969 14.3724 2.40969 14.7624 2.27969C15.1624 2.14969 15.5824 2.35969 15.7124 2.74969C17.7024 8.70969 17.7024 15.2697 15.7124 21.2197C15.6124 21.5497 15.3124 21.7497 15.0024 21.7497Z" fill="white"/>
            <path d="M12 17.2C9.21 17.2 6.43 16.81 3.75 16.02C3.74 16.42 3.41 16.75 3 16.75C2.59 16.75 2.25 16.41 2.25 16V15C2.25 14.76 2.37 14.53 2.56 14.39C2.76 14.25 3.01 14.21 3.24 14.29C8.89 16.17 15.12 16.17 20.77 14.29C21 14.21 21.25 14.25 21.45 14.39C21.65 14.53 21.76 14.76 21.76 15V16C21.76 16.41 21.42 16.75 21.01 16.75C20.6 16.75 20.27 16.43 20.26 16.02C17.57 16.81 14.79 17.2 12 17.2Z" fill="white"/>
            <path d="M21.0037 9.75035C20.9237 9.75035 20.8437 9.74035 20.7637 9.71035C15.1137 7.83035 8.88369 7.83035 3.23369 9.71035C2.83369 9.84035 2.41369 9.63035 2.28369 9.24035C2.16369 8.84035 2.37369 8.42035 2.76369 8.29035C8.72369 6.30035 15.2837 6.30035 21.2337 8.29035C21.6237 8.42035 21.8437 8.85035 21.7037 9.24035C21.6137 9.55035 21.3137 9.75035 21.0037 9.75035Z" fill="white"/>
          </svg>
          <p className="text-white text-left text-[10px] xs:text-sm sm:text-base truncate">
            {url ? url : 'https://online-qr-generator.com' }
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full rounded-[4px] mb-[58px] p-[15px] bg-white shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <div className="w-full h-[220px] rounded-[4px] mb-[34px] bg-[#E1E1E1] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"></div>
          <div className="w-full h-[15px] rounded-[27px] animate-pulse mb-[23px] bg-[#E1E1E1] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"></div>
          <div className="w-full h-[15px] rounded-[27px] animate-pulse mb-[23px] bg-[#E1E1E1] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"></div>
          <div className="min-w-[166px] w-[44%] h-[15px] animate-pulse rounded-[27px] mb-[58px] bg-[#E1E1E1] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"></div>
          <div className="w-full h-[55px] rounded-[4px] flex items-center justify-center bg-[#D9D9D9] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
            <div className="w-[67%] h-[15px] rounded-[27px] animate-pulse bg-[#BBBBBB]"></div>
          </div>
        </div>
        <div className="w-full grid grid-cols-3  mb-[60px]">
          <div className="flex flex-col items-center justify-center space-y-[16px]">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div className="w-[66px] h-[15px] bg-[#E1E1E1] rounded-[27px]"></div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-[16px]">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div className="w-[66px] h-[15px] bg-[#E1E1E1] rounded-[27px]"></div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-[16px]">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div className="w-[66px] h-[15px] bg-[#E1E1E1] rounded-[27px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;
