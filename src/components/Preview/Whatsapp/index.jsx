import {React} from "react";
import "../index.css";
// import useLanguage from "../../../utils/useLanguage";
import useUpdateDomTitle from "../../../utils/updateDomTitle";

let WhatsappPreview = (props) => {

    useUpdateDomTitle('Online QR Generator - Scanned Page | Whatsapp',"#008069");
    return (
        <div className="flex flex-col justify-center items-center" >
            <div className="flex flex-col items-center justify-center w-full max-w-[700px] min-h-screen h-screen">
                <div className="flex items-end justify-between w-full h-20 px-[15px] bg-[#008069] pb-2">
                    <div className="flex flex-row items-center justify-between  w-full">
                        <div className="flex flex-row justify-between items-center space-x-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12.2739C20 12.6536 19.7178 12.9674 19.3518 13.0171L19.25 13.0239L4.25 13.0239C3.83579 13.0239 3.5 12.6881 3.5 12.2739C3.5 11.8942 3.78215 11.5804 4.14823 11.5308L4.25 11.5239L19.25 11.5239C19.6642 11.5239 20 11.8597 20 12.2739Z" fill="white"/>
                                <path d="M10.829 17.767C11.1225 18.0593 11.1235 18.5342 10.8313 18.8277C10.5656 19.0945 10.149 19.1196 9.85489 18.9024L9.77062 18.83L3.72062 12.806C3.45298 12.5395 3.42863 12.1214 3.64759 11.8273L3.72057 11.7431L9.77057 5.71808C10.0641 5.4258 10.5389 5.42678 10.8312 5.72028C11.0969 5.9871 11.1203 6.40381 10.9018 6.69697L10.829 6.78094L5.313 12.2748L10.829 17.767Z" fill="white"/>
                            </svg>
                            <div className="h-9 w-9 rounded-full" style={{backgroundColor:"#12BB18", backgroundImage: "url(/images/images/new/whatsapp.png)", backgroundSize: "cover"}}></div>
                        </div>
                        <div className="flex flex-row justify-between items-center space-x-5">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.44117 4.5H12.2332C14.6552 4.5 16.3463 6.16904 16.3463 8.56091V15.4391C16.3463 17.831 14.6552 19.5 12.2332 19.5H6.44117C4.01914 19.5 2.32812 17.831 2.32812 15.4391V8.56091C2.32812 6.16904 4.01914 4.5 6.44117 4.5ZM20.2861 6.87898C20.7251 6.65563 21.2401 6.67898 21.6591 6.94294C22.0781 7.20589 22.3281 7.66274 22.3281 8.16223V15.8384C22.3281 16.3389 22.0781 16.7947 21.6591 17.0577C21.4301 17.2008 21.1741 17.2739 20.9161 17.2739C20.7011 17.2739 20.4861 17.2231 20.2851 17.1206L18.8041 16.3734C18.2561 16.0952 17.9161 15.5369 17.9161 14.9165V9.08305C17.9161 8.46173 18.2561 7.90335 18.8041 7.62721L20.2861 6.87898Z" fill="white"/>
                            </svg>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.8599 12.4724C15.8489 16.4604 16.7539 11.8467 19.2938 14.3848C21.7424 16.8328 23.1497 17.3232 20.0474 20.4247C19.6588 20.737 17.1897 24.4943 8.51273 15.8197C-0.165353 7.144 3.58971 4.67244 3.90209 4.28395C7.01199 1.17385 7.49399 2.58938 9.94262 5.03733C12.4825 7.5765 7.87078 8.48441 11.8599 12.4724Z" fill="white"/>
                            </svg>
                            <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.328125 18C0.328125 16.8954 1.22356 16 2.32813 16C3.43269 16 4.32812 16.8954 4.32812 18C4.32812 19.1046 3.43269 20 2.32812 20C1.22356 20 0.328125 19.1046 0.328125 18ZM0.328125 10C0.328125 8.89543 1.22356 8 2.32813 8C3.43269 8 4.32813 8.89543 4.32813 10C4.32813 11.1046 3.43269 12 2.32813 12C1.22356 12 0.328125 11.1046 0.328125 10ZM0.328125 2C0.328125 0.89543 1.22356 0 2.32813 0C3.43269 0 4.32813 0.89543 4.32813 2C4.32813 3.10457 3.43269 4 2.32813 4C1.22356 4 0.328125 3.10457 0.328125 2Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full relative" style={{backgroundImage: "url(/images/images/new/whatsapp-background.webp)", backgroundSize: "cover"}}>
                    <div className="w-full flex flex-col mt-5 xsm:mt-8 sm:mt-14 space-y-4 xsm:space-y-8 sm:space-y-14">
                        <div className="w-full flex justify-end pr-5">
                            <div className="bg-[#008069] space-y-3 pt-5 pb-8 px-5 w-3/4 rounded-lg relative">
                                <div className="w-full bg-[#00745F] h-[7px] animate-pulse rounded-md"></div>
                                <div className="w-10/12 bg-[#00745F] h-[7px] animate-pulse rounded-md"></div>
                                <div className="w-full bg-[#00745F] h-[7px] animate-pulse rounded-md"></div>
                                <div className="w-10/12 bg-[#00745F] h-[7px] animate-pulse rounded-md"></div>
                                
                                <svg className="absolute right-2 bottom-4" width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9903 0.474189L14.4893 0.960964L9.08968 8.36523L6.90091 6.20358L7.82783 4.93168L9.08968 5.66762L13.9903 0.474189ZM9.60851 0.365234L10.1075 0.852009L4.7079 8.25628L0.989258 4.59881L1.81959 3.78878L4.7079 5.55867L9.60851 0.365234Z" fill="#D3D4D9"/>
                                </svg>
                                
                                <svg className="absolute right-[-14px] bottom-[10px]" width="18" height="44" viewBox="0 0 18 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_f_3176_370)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.26172 24.6279C2.26172 24.6279 2.48691 25.0398 13.5547 31.1371L14.3007 31.5368C15.4514 32.1362 16.0393 33.9363 15.614 35.5575C15.4544 36.1654 15.1649 36.6886 14.7853 37.0547C10.8746 40.8267 2.26172 24.6279 2.26172 24.6279Z" fill="black" fill-opacity="0.4"/>
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.44043 0C2.44043 15.0999 6.9788 25.6581 15.2899 31.6747L15.8501 32.0691C16.7142 32.6605 17.1557 34.4367 16.8363 36.0365C16.7165 36.6364 16.4991 37.1526 16.214 37.5139C13.2774 41.236 8.53954 43.392 2.00061 43.9821L2.00092 39.6276L2.00001 0.44043C2 0.197189 2.19719 0 2.44043 0V0Z" fill="#008069"/>
                                    <defs>
                                        <filter id="filter0_f_3176_370" x="0.63075" y="22.997" width="16.7522" height="16.258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="0.815485" result="effect1_foregroundBlur_3176_370"/>
                                    </filter>
                                    </defs>
                                </svg>

                            </div>
                        </div>

                        <div className="w-full flex justify-start pl-5">
                            <div className="bg-white space-y-3 pt-5 pb-8 px-5 w-3/4 rounded-lg relative">
                                <div className="w-full bg-[#DBDBDB] h-[7px] animate-pulse rounded-md"></div>
                                <div className="w-3/4 bg-[#DBDBDB] h-[7px] animate-pulse rounded-md"></div>
                                <div className="w-full bg-[#DBDBDB] h-[7px] animate-pulse rounded-md"></div>
                                <div className="w-3/4 bg-[#DBDBDB] h-[7px] animate-pulse rounded-md"></div>
                                <div className="w-full bg-[#DBDBDB] h-[7px] animate-pulse rounded-md"></div>
                                
                                <svg className="absolute left-[-14px] bottom-[10px]" style={{transform: "scale(-1, 1)"}} width="18" height="44" viewBox="0 0 18 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_f_3176_370)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.26172 24.6279C2.26172 24.6279 2.48691 25.0398 13.5547 31.1371L14.3007 31.5368C15.4514 32.1362 16.0393 33.9363 15.614 35.5575C15.4544 36.1654 15.1649 36.6886 14.7853 37.0547C10.8746 40.8267 2.26172 24.6279 2.26172 24.6279Z" fill="black" fill-opacity="0.4"/>
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.44043 0C2.44043 15.0999 6.9788 25.6581 15.2899 31.6747L15.8501 32.0691C16.7142 32.6605 17.1557 34.4367 16.8363 36.0365C16.7165 36.6364 16.4991 37.1526 16.214 37.5139C13.2774 41.236 8.53954 43.392 2.00061 43.9821L2.00092 39.6276L2.00001 0.44043C2 0.197189 2.19719 0 2.44043 0V0Z" fill="#fff"/>
                                    <defs>
                                        <filter id="filter0_f_3176_370" x="0.63075" y="22.997" width="16.7522" height="16.258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="0.815485" result="effect1_foregroundBlur_3176_370"/>
                                    </filter>
                                    </defs>
                                </svg>

                            </div>
                        </div>

                        <div className="w-full flex justify-end pr-5">
                            <div className="bg-[#008069] space-y-3 pt-5 pb-8 px-5 w-3/4 rounded-lg relative">
                                <div className="w-full bg-[#00745F] h-[7px] animate-pulse rounded-md"></div>
                                <div className="w-4/6 bg-[#00745F] h-[7px] animate-pulse rounded-md"></div>
                                <div className="w-4/6 bg-[#00745F] h-[7px] animate-pulse rounded-md"></div>
                                
                                <svg className="absolute right-2 bottom-4" width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9903 0.474189L14.4893 0.960964L9.08968 8.36523L6.90091 6.20358L7.82783 4.93168L9.08968 5.66762L13.9903 0.474189ZM9.60851 0.365234L10.1075 0.852009L4.7079 8.25628L0.989258 4.59881L1.81959 3.78878L4.7079 5.55867L9.60851 0.365234Z" fill="#D3D4D9"/>
                                </svg>
                                
                                <svg className="absolute right-[-14px] bottom-[10px]" width="18" height="44" viewBox="0 0 18 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_f_3176_370)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.26172 24.6279C2.26172 24.6279 2.48691 25.0398 13.5547 31.1371L14.3007 31.5368C15.4514 32.1362 16.0393 33.9363 15.614 35.5575C15.4544 36.1654 15.1649 36.6886 14.7853 37.0547C10.8746 40.8267 2.26172 24.6279 2.26172 24.6279Z" fill="black" fill-opacity="0.4"/>
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.44043 0C2.44043 15.0999 6.9788 25.6581 15.2899 31.6747L15.8501 32.0691C16.7142 32.6605 17.1557 34.4367 16.8363 36.0365C16.7165 36.6364 16.4991 37.1526 16.214 37.5139C13.2774 41.236 8.53954 43.392 2.00061 43.9821L2.00092 39.6276L2.00001 0.44043C2 0.197189 2.19719 0 2.44043 0V0Z" fill="#008069"/>
                                    <defs>
                                        <filter id="filter0_f_3176_370" x="0.63075" y="22.997" width="16.7522" height="16.258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feGaussianBlur stdDeviation="0.815485" result="effect1_foregroundBlur_3176_370"/>
                                    </filter>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-1 w-full px-[15px] absolute bottom-6">
                        <div className="bg-white flex-1 rounded-full flex items-center justify-between pl-2 pr-4">
                            <div className="flex items-center justify-between space-x-2">
                                {/* Emoji */}
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 15.9688C9.5 15.9688 10.625 16.9688 12.5 16.9688C14.375 16.9688 15.5 15.9688 15.5 15.9688M17.5 10.9688C17.5 11.521 17.0523 11.9688 16.5 11.9688C15.9477 11.9688 15.5 11.521 15.5 10.9688C15.5 10.4165 15.9477 9.96875 16.5 9.96875C17.0523 9.96875 17.5 10.4165 17.5 10.9688ZM22.5 12.9688C22.5 18.4916 18.0228 22.9688 12.5 22.9688C6.97715 22.9688 2.5 18.4916 2.5 12.9688C2.5 7.4459 6.97715 2.96875 12.5 2.96875C18.0228 2.96875 22.5 7.4459 22.5 12.9688ZM9.5 10.9688C9.5 11.521 9.05228 11.9688 8.5 11.9688C7.94772 11.9688 7.5 11.521 7.5 10.9688C7.5 10.4165 7.94772 9.96875 8.5 9.96875C9.05228 9.96875 9.5 10.4165 9.5 10.9688Z" stroke="#687681" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="text-base text-[#687681] ">Message</p>
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                {/* Attach */}
                                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.267 24.5687L15.1993 23.501C14.9094 23.2111 14.9094 22.7303 15.1993 22.4403C15.4892 22.1504 15.9701 22.1504 16.26 22.4403L17.3277 23.5081C19.1803 25.3607 22.1926 25.3607 24.0452 23.5081C25.8978 21.6555 25.8978 18.6432 24.0452 16.7906L22.9846 15.7299C22.6946 15.44 22.6946 14.9592 22.9846 14.6692C23.2745 14.3793 23.7482 14.3723 24.0452 14.6692L25.1059 15.7299C27.5454 18.1694 27.5454 22.1292 25.1059 24.5687C22.6664 27.0083 18.7066 27.0083 16.267 24.5687Z" fill="#8596A0"/>
                                    <path d="M10.9694 19.2662L9.90871 18.2055C7.46919 15.766 7.46919 11.8062 9.90871 9.36668C12.3482 6.92716 16.308 6.92716 18.7475 9.36668L19.8082 10.4273C20.0981 10.7173 20.0981 11.1981 19.8082 11.488C19.5183 11.7779 19.0375 11.7779 18.7475 11.488L17.6869 10.4273C15.8343 8.57472 12.822 8.57472 10.9694 10.4273C9.11675 12.28 9.11675 15.2922 10.9694 17.1449L12.03 18.2055C12.3199 18.4954 12.3199 18.9763 12.03 19.2662C11.7401 19.5561 11.2593 19.5561 10.9694 19.2662Z" fill="#8596A0"/>
                                    <path d="M19.8062 20.326L14.1494 14.6691C13.8594 14.3792 13.8594 13.8984 14.1494 13.6085C14.4393 13.3185 14.9201 13.3185 15.21 13.6085L20.8669 19.2653C21.1568 19.5552 21.1568 20.0361 20.8669 20.326C20.577 20.6159 20.0961 20.6159 19.8062 20.326Z" fill="#8596A0"/>
                                </svg>
                                {/* Camera */}
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7056 6.46394C17.7456 6.53387 17.8156 6.58381 17.9056 6.58381C20.3056 6.58381 22.2656 8.54163 22.2656 10.939V16.8724C22.2656 19.2697 20.3056 21.2275 17.9056 21.2275H6.62563C4.21563 21.2275 2.26562 19.2697 2.26562 16.8724V10.939C2.26562 8.54163 4.21563 6.58381 6.62563 6.58381C6.70563 6.58381 6.78562 6.54385 6.81563 6.46394L6.87563 6.34408C6.9101 6.27151 6.94549 6.19697 6.98141 6.1213C7.23723 5.58246 7.52025 4.98633 7.69562 4.63597C8.15562 3.73697 8.93563 3.23753 9.90562 3.22754H14.6156C15.5856 3.23753 16.3756 3.73697 16.8356 4.63597C16.9931 4.95062 17.2331 5.45744 17.4643 5.94593C17.5121 6.04675 17.5594 6.14678 17.6056 6.24419L17.7056 6.46394ZM16.9756 10.2997C16.9756 10.7991 17.3756 11.1987 17.8756 11.1987C18.3756 11.1987 18.7856 10.7991 18.7856 10.2997C18.7856 9.80024 18.3756 9.39069 17.8756 9.39069C17.3756 9.39069 16.9756 9.80024 16.9756 10.2997ZM10.5356 11.848C11.0056 11.3785 11.6156 11.1288 12.2656 11.1288C12.9156 11.1288 13.5256 11.3785 13.9856 11.838C14.4456 12.2975 14.6956 12.9068 14.6956 13.5561C14.6856 14.8946 13.6056 15.9834 12.2656 15.9834C11.6156 15.9834 11.0056 15.7336 10.5456 15.2742C10.0856 14.8147 9.83563 14.2053 9.83563 13.5561V13.5461C9.82562 12.9168 10.0756 12.3075 10.5356 11.848ZM15.0356 16.333C14.3256 17.0422 13.3456 17.4817 12.2656 17.4817C11.2156 17.4817 10.2356 17.0722 9.48563 16.333C8.74563 15.5838 8.33563 14.6049 8.33563 13.5561C8.32562 12.5172 8.73563 11.5383 9.47563 10.7891C10.2256 10.04 11.2156 9.63042 12.2656 9.63042C13.3156 9.63042 14.3056 10.04 15.0456 10.7791C15.7856 11.5283 16.1956 12.5172 16.1956 13.5561C16.1856 14.6449 15.7456 15.6238 15.0356 16.333Z" fill="#8596A0"/>
                                </svg>
                            </div>
                        </div>
                        <div className="bg-[#00A884] w-12 h-12 rounded-full flex items-center justify-center">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6591 16.1861H12.3094C9.90604 16.1861 7.95795 14.2615 7.95795 11.8891V7.26581C7.95795 4.89248 9.90604 2.96875 12.3094 2.96875H12.6591C15.0625 2.96875 17.0116 4.89248 17.0116 7.26581V11.8891C17.0116 14.2615 15.0625 16.1861 12.6591 16.1861ZM19.0469 11.7516C19.0469 11.2226 19.4809 10.795 20.0157 10.795C20.5504 10.795 20.9844 11.2226 20.9844 11.7516C20.9844 16.0554 17.6849 19.6092 13.4536 20.0865V22.0121C13.4536 22.5402 13.0196 22.9688 12.4849 22.9688C11.9492 22.9688 11.5161 22.5402 11.5161 22.0121V20.0865C7.28382 19.6092 3.98438 16.0554 3.98438 11.7516C3.98438 11.2226 4.41836 10.795 4.95309 10.795C5.48782 10.795 5.92181 11.2226 5.92181 11.7516C5.92181 15.3245 8.86574 18.2316 12.4849 18.2316C16.103 18.2316 19.0469 15.3245 19.0469 11.7516Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default WhatsappPreview;
