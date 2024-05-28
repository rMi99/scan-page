import {React, useRef, useState} from "react";
import "../index.css";
import "./index.css";
import useUpdateDomTitle from "../../../utils/updateDomTitle";
import { useAdjustBackdropHeight } from "../../backdrop";
import { Rating } from "@mui/material";


let RatePreview = (props) => {

  const [rating, setRating] = useState(4);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleStarHover = (hoveredStar) => {
    setHoveredRating(hoveredStar);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  useUpdateDomTitle('Online QR Generator - Scanned Page | Rate',"#97000F");
  let backdropElement = useRef(null);
  let backdropEndElement = useRef(null);
  let backdropEndFallbackElement = useRef(null);
  useAdjustBackdropHeight(backdropElement, backdropEndElement, backdropEndFallbackElement);

  // const [value, setValue] = useState(4.5);
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="flex items-center justify-center relative w-full h-full -z-10 overflow-x-clip">
        <div ref={backdropElement} className="qr-backdrop" style={{'--bg-color': "#97000F"}}>
          <svg width="375" height="526" viewBox="0 0 375 526" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H375V506C375 506 293.5 461 187.5 506C81.5 551 0 506 0 506V0Z" fill={'var(--bg-color)'}/>
          </svg>
        </div>
      </div>
      <div ref={backdropEndFallbackElement} ></div>
      <div
        className="flex flex-col items-center justify-center mt-[45px] xs:mt-[54px] w-full max-w-[600px] px-[16px]"
        >
        <h1 className="text-white text-xl xs:text-2xl font-bold mb-[14px] xs:mb-[28px]">Los Angeles Bus Tour</h1>
        <div ref={backdropEndElement} className="w-full bg-white flex flex-col justify-center items-center p-[15px] rounded-[4px] mb-[10px] xs:mb-[20px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <img ref={backdropEndElement} src="/images/images/new/rate.webp" className="w-full rounded-[4px] mb-6" width="324" height="259" alt=""/>
          <p className="text-base xxs:text-lg xs:text-xl sm:text-2xl font-bold mb-5" >Leave a review</p>
          <div class="w-full flex justify-between max-w-80">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                // onClick={() => handleStarClick(star)} //will be enabled in dynamic version
                // onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarLeave}
                style={{
                  cursor: 'pointer',
                  fill: star <= (hoveredRating || rating) ? '#FEB629' : '#C1C1C1',
                }}
                // style={{ cursor: 'pointer', fill: star <= rating ? '#FEB629' : '#C1C1C1' }}
                width="45"
                height="45"
                viewBox="0 0 45 45"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M33.1006 27.0758C32.6258 27.5359 32.4076 28.2014 32.5158 28.8541L34.1456 37.8741C34.2831 38.6386 33.9605 39.4123 33.3206 39.8541C32.6936 40.3124 31.8595 40.3674 31.1756 40.0008L23.0558 35.7658C22.7735 35.6154 22.46 35.5348 22.1391 35.5256H21.6423C21.47 35.5513 21.3013 35.6063 21.1473 35.6906L13.0256 39.9458C12.6241 40.1474 12.1695 40.2189 11.724 40.1474C10.6386 39.9421 9.91445 38.9081 10.0923 37.8173L11.724 28.7973C11.8321 28.1391 11.614 27.4699 11.1391 27.0024L4.51895 20.5858C3.96529 20.0486 3.77279 19.2419 4.02579 18.5141C4.27145 17.7881 4.89845 17.2583 5.65562 17.1391L14.7673 15.8173C15.4603 15.7458 16.069 15.3241 16.3806 14.7008L20.3956 6.46909C20.491 6.28576 20.6138 6.1171 20.7623 5.9741L20.9273 5.84576C21.0135 5.75043 21.1125 5.6716 21.2225 5.60743L21.4223 5.5341L21.734 5.40576H22.5058C23.1951 5.47726 23.802 5.88976 24.1191 6.50576L28.1873 14.7008C28.4806 15.3003 29.0508 15.7164 29.709 15.8173L38.8206 17.1391C39.5906 17.2491 40.2341 17.7808 40.489 18.5141C40.7291 19.2493 40.522 20.0559 39.9573 20.5858L33.1006 27.0758Z" />
              </svg>
            ))}
          </div>
          <div className="w-full flex justify-center items-center bg-[#97000F] rounded-[4px] py-[14px] mt-5 cursor-pointer">
            <p className="text-base xs:text-lg text-white font-semibold">Send Rating</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          <div className="mb-[20px] flex flex-col w-full cursor-pointer rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
            <div className="flex flex-row justify-between items-center p-[5px] rounded-[4px] w-full">
              <div className="space-x-[5px] sm:space-x-[14px] max-w-full items-center flex flex-row">
                <div className="xs:w-[45px] h-[45px] w-[35px] rounded-[4px] bg-[#FFF6F4] flex justify-center items-center">
                  <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0003 21.5781C6.31741 21.5781 1.69824 17.0594 1.69824 11.5C1.69824 5.94063 6.31741 1.42188 12.0003 1.42188C17.6832 1.42188 22.3024 5.94063 22.3024 11.5C22.3024 17.0594 17.6832 21.5781 12.0003 21.5781ZM12.0003 2.82812C7.11283 2.82812 3.13574 6.71875 3.13574 11.5C3.13574 16.2812 7.11283 20.1719 12.0003 20.1719C16.8878 20.1719 20.8649 16.2812 20.8649 11.5C20.8649 6.71875 16.8878 2.82812 12.0003 2.82812Z" fill="#F76B4C"/>
                    <path d="M9.12547 20.6406H8.16714C7.77422 20.6406 7.44839 20.3219 7.44839 19.9375C7.44839 19.5531 7.75505 19.2437 8.14797 19.2344C6.64339 14.2094 6.64339 8.79063 8.14797 3.76562C7.75505 3.75625 7.44839 3.44687 7.44839 3.0625C7.44839 2.67812 7.77422 2.35938 8.16714 2.35938H9.12547C9.35547 2.35938 9.57589 2.47187 9.71005 2.65C9.84422 2.8375 9.88255 3.07187 9.80589 3.2875C8.00422 8.58437 8.00422 14.4156 9.80589 19.7219C9.88255 19.9375 9.84422 20.1719 9.71005 20.3594C9.57589 20.5281 9.35547 20.6406 9.12547 20.6406Z" fill="#F76B4C"/>
                    <path d="M14.8753 20.6405C14.7986 20.6405 14.722 20.6311 14.6453 20.603C14.2715 20.4811 14.0607 20.078 14.1949 19.7124C15.9965 14.4155 15.9965 8.58427 14.1949 3.27802C14.0703 2.91239 14.2715 2.50927 14.6453 2.38739C15.0286 2.26552 15.4311 2.46239 15.5557 2.82802C17.4628 8.41552 17.4628 14.5655 15.5557 20.1436C15.4599 20.453 15.1724 20.6405 14.8753 20.6405Z" fill="#F76B4C"/>
                    <path d="M12 16.375C9.32625 16.375 6.66208 16.0094 4.09375 15.2687C4.08417 15.6437 3.76792 15.9531 3.375 15.9531C2.98208 15.9531 2.65625 15.6344 2.65625 15.25V14.3125C2.65625 14.0875 2.77125 13.8719 2.95333 13.7406C3.145 13.6094 3.38458 13.5719 3.605 13.6469C9.01958 15.4094 14.99 15.4094 20.4046 13.6469C20.625 13.5719 20.8646 13.6094 21.0562 13.7406C21.2479 13.8719 21.3533 14.0875 21.3533 14.3125V15.25C21.3533 15.6344 21.0275 15.9531 20.6346 15.9531C20.2417 15.9531 19.9254 15.6531 19.9158 15.2687C17.3379 16.0094 14.6737 16.375 12 16.375Z" fill="#F76B4C"/>
                    <path d="M20.6246 9.39053C20.548 9.39053 20.4713 9.38115 20.3946 9.35303C14.98 7.59053 9.00963 7.59053 3.59505 9.35303C3.21171 9.4749 2.80921 9.27803 2.68463 8.9124C2.56963 8.5374 2.77088 8.14365 3.14463 8.02178C8.8563 6.15615 15.143 6.15615 20.845 8.02178C21.2188 8.14365 21.4296 8.54678 21.2955 8.9124C21.2092 9.20303 20.9217 9.39053 20.6246 9.39053Z" fill="#F76B4C"/>
                  </svg>
                </div>
                <div className="flex items-center text-left">
                  <p className="text-sm xs:text-base sm:text-xl text-[#767C83] break-all">www.bustour.com</p>
                </div>
              </div>
              <svg className="hidden xxs:flex mr-[5px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11.7256C4 11.3459 4.28215 11.0321 4.64823 10.9824L4.75 10.9756H19.75C20.1642 10.9756 20.5 11.3114 20.5 11.7256C20.5 12.1053 20.2178 12.4191 19.8518 12.4687L19.75 12.4756L4.75 12.4756C4.33579 12.4756 4 12.1398 4 11.7256Z" fill="#767C83"/>
                <path d="M13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88012 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.547 11.4603 20.5714 11.8784 20.3524 12.1724L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L18.687 11.7249L13.171 6.23271Z" fill="#767C83"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default RatePreview;
