import { React } from "react";
import "../index.css";
import { Card, Typography, Icon } from "@mui/material";
import useLanguage from "../../../utils/useLanguage";
import useUpdateDomTitle from "../../../utils/updateDomTitle";


let AppsPreview = (props) => {

  const t = useLanguage();
  useUpdateDomTitle('Online QR Generator - Scanned Page | App',"#CA182B");

  return (
    <div className="flex flex-col min-h-screen min-w-full bg-[#CA182B] items-center">
      <div
        className="flex flex-col items-center justify-center text-white mt-[50px] xs:mt-[60px] w-full max-w-[450px] px-[16px]"
      >
        <h1 className="text-lg xs:text-2xl font-bold text-center mb-[8px] xs:mb-[14px]">Nourish</h1>
        <p className="w-full mb-[10px] text-sm xs:text-base">{t('app.base')}</p>
        <div className="flex flex-col items-center justify-center w-full bg-white pb-[31px] mb-[22px] mt-[35px] xs:mt-[48px] rounded-[10px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <img src="/images/images/new/nourish.webp" className="w-[100px] -mt-[38px] mb-[10px] xs:mb-[25px] border-[1px] border-black rounded-[5px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]" width="200" height="200" alt=""/>
          <p className="w-full text-[#767C83] mb-[10px] xs:mb-[20px] px-[15px] text-[13px] xs:text-lg">{t('app.description')}</p>
          <div
            style={{
              height: "auto",
              width: "100%",
            }}
          >
            <Card className="hover:opacity-70 active:opacity-[.85] cursor-pointer w-[150px] xxs:w-[160px] xs:w-[180px] sm:w-[200px] "
              style={{
                backgroundColor: "black",
                height: "auto",
                margin: "0px auto 8px auto",
                display: "flex",
                color: "white",
                borderRadius: 4,
                userSelect: "none",
                WebkitTouchCallout: "none",
                WebkitTapHighlightColor: "transparent",

              }}
            >
              <div className="px-[16px] py-[14px] md:pl-[26px] md:pr-[20px] "
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Icon
                  style={{
                    height: "auto",
                    width: "auto",
                    fontSize: 0,
                  }}
                >
                  <img
                    src="/apple.png"
                    alt="apple"
                    style={{
                      width: 26,
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Icon>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className="text-left rtl:text-right"
              >
                <Typography style={{ fontSize: 10, lineHeight: "10px", }}> {t('app.download')}</Typography>
                <Typography style={{ fontWeight: "bold", fontSize: 14.5, lineHeight: "20px", }}>
                App Store
                </Typography>
              </div>
            </Card>

            <Card className="hover:opacity-70 active:opacity-[.85] cursor-pointer w-[150px] xxs:w-[160px] xs:w-[180px] sm:w-[200px]"
              style={{
                backgroundColor: "black",
                height: "auto",
                margin: "0px auto 8px auto",
                display: "flex",
                color: "white",
                borderRadius: 4,
                userSelect: "none",
                WebkitTouchCallout: "none",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <div className="px-[16px] py-[14px] md:pl-[26px] md:pr-[20px]"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Icon
                  style={{
                    height: "auto",
                    width: "auto",
                    fontSize: 0,
                  }}
                >
                  <img
                    src="/playstore.png"
                    alt="playstore"
                    style={{
                      width: 25,
                      height: "auto",
                      maxMidth: "100%"
                    }}
                  />
                </Icon>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className="text-left rtl:text-right"
              >
                <Typography style={{ fontSize: 10, lineHeight: "10px", }}> {t('app.get')}</Typography>
                <Typography style={{ fontWeight: "bold", fontSize: 14.5, lineHeight: "20px", }}>Google Play</Typography>
              </div>
            </Card>


            <Card className="hover:opacity-70 active:opacity-[.85] cursor-pointer w-[150px] xxs:w-[160px] xs:w-[180px] sm:w-[200px]"
              style={{
                backgroundColor: "black",
                height: "auto",
                margin: "0px auto",
                display: "flex",
                color: "white",
                borderRadius: 4,
                userSelect: "none",
                WebkitTouchCallout: "none",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <div className="px-[16px] py-[14px] md:pl-[26px] md:pr-[20px]"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Icon
                  style={{
                    height: "auto",
                    width: "auto",
                    fontSize: 0,
                  }}
                >
                  <img
                    src="/amazon.png"
                    alt="apple"
                    style={{
                      width: 26,
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Icon>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className="text-left rtl:text-right"
              >
                <Typography style={{ fontSize: 10, lineHeight: "10px", }}> {t('app.available')}</Typography>
                <Icon
                  style={{
                    height: "auto",
                    width: "auto",
                    fontSize: 0,
                  }}
                >
                  <img
                    src="/images/images/new/az.webp"
                    alt="apple"
                    style={{
                      width: 60,
                      marginTop: 4,
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Icon>
              </div>
            </Card>

          </div>
        </div>
        <button className="flex flex-row justify-between items-center bg-white w-full mb-[30px] cursor-pointer p-[10px] rounded-[4px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]">
          <div className="space-x-[5px] xss:space-x-[15px] w-full mr-[5px] flex flex-row">
            <div className="w-[45px] h-[45px] min-w-[30px] rounded-[4px] bg-[#F9F9F9] flex justify-center items-center mr-[5px] rtl:ml-2">
              <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0003 21.5781C6.31741 21.5781 1.69824 17.0594 1.69824 11.5C1.69824 5.94063 6.31741 1.42188 12.0003 1.42188C17.6832 1.42188 22.3024 5.94063 22.3024 11.5C22.3024 17.0594 17.6832 21.5781 12.0003 21.5781ZM12.0003 2.82812C7.11283 2.82812 3.13574 6.71875 3.13574 11.5C3.13574 16.2812 7.11283 20.1719 12.0003 20.1719C16.8878 20.1719 20.8649 16.2812 20.8649 11.5C20.8649 6.71875 16.8878 2.82812 12.0003 2.82812Z" fill="#767C83" />
                <path d="M9.12547 20.6406H8.16714C7.77422 20.6406 7.44839 20.3219 7.44839 19.9375C7.44839 19.5531 7.75505 19.2437 8.14797 19.2344C6.64339 14.2094 6.64339 8.79063 8.14797 3.76562C7.75505 3.75625 7.44839 3.44687 7.44839 3.0625C7.44839 2.67812 7.77422 2.35938 8.16714 2.35938H9.12547C9.35547 2.35938 9.57589 2.47187 9.71005 2.65C9.84422 2.8375 9.88255 3.07187 9.80589 3.2875C8.00422 8.58437 8.00422 14.4156 9.80589 19.7219C9.88255 19.9375 9.84422 20.1719 9.71005 20.3594C9.57589 20.5281 9.35547 20.6406 9.12547 20.6406Z" fill="#767C83" />
                <path d="M14.8753 20.6405C14.7986 20.6405 14.722 20.6311 14.6453 20.603C14.2715 20.4811 14.0607 20.078 14.1949 19.7124C15.9965 14.4155 15.9965 8.58427 14.1949 3.27802C14.0703 2.91239 14.2715 2.50927 14.6453 2.38739C15.0286 2.26552 15.4311 2.46239 15.5557 2.82802C17.4628 8.41552 17.4628 14.5655 15.5557 20.1436C15.4599 20.453 15.1724 20.6405 14.8753 20.6405Z" fill="#767C83" />
                <path d="M12 16.375C9.32625 16.375 6.66208 16.0094 4.09375 15.2687C4.08417 15.6437 3.76792 15.9531 3.375 15.9531C2.98208 15.9531 2.65625 15.6344 2.65625 15.25V14.3125C2.65625 14.0875 2.77125 13.8719 2.95333 13.7406C3.145 13.6094 3.38458 13.5719 3.605 13.6469C9.01958 15.4094 14.99 15.4094 20.4046 13.6469C20.625 13.5719 20.8646 13.6094 21.0562 13.7406C21.2479 13.8719 21.3533 14.0875 21.3533 14.3125V15.25C21.3533 15.6344 21.0275 15.9531 20.6346 15.9531C20.2417 15.9531 19.9254 15.6531 19.9158 15.2687C17.3379 16.0094 14.6737 16.375 12 16.375Z" fill="#767C83" />
                <path d="M20.6246 9.39053C20.548 9.39053 20.4713 9.38115 20.3946 9.35303C14.98 7.59053 9.00963 7.59053 3.59505 9.35303C3.21171 9.4749 2.80921 9.27803 2.68463 8.9124C2.56963 8.5374 2.77088 8.14365 3.14463 8.02178C8.8563 6.15615 15.143 6.15615 20.845 8.02178C21.2188 8.14365 21.4296 8.54678 21.2955 8.9124C21.2092 9.20303 20.9217 9.39053 20.6246 9.39053Z" fill="#767C83" />
              </svg>
            </div>
            <div className="flex items-center text-left">
              <p className="text-sm xs:text-base sm:text-xl text-[#0079FF] break-all">www.nourish.com</p>
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

export default AppsPreview;
