import { useEffect, useState, React } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useUpdateDomTitle from "../../utils/updateDomTitle";
import { isLight } from "../../utils/Color";
import useScroller from "../../utils/Scroller";
import WelcomeScreen from "../common/WelcomeScreen";
import SocialNetWorks from "../common/socialNetwork";
import useLanguage from "../../utils/useLanguage";
import linkFixer from "../../utils/LinkFixer";
// import StatusBar from "../StatusBar";

//unities

let ListOfLinks = ({qrData}) => {
  const [welcomeScreen, showWelcomeScreen] = useState(false);
  const data = qrData;

  const t = useLanguage();
  useUpdateDomTitle(data?.list_title,data?.primaryColor);

  useEffect(()=>{
    showWelcomeScreen(data?.screen ? true : false);
  },[data?.screen])

  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [isGreater, setIsGreater] = useState(false);

  const imageH = Math.floor(((imageHeight * 60)  / (imageWidth) ) );
  const devH =  Math.floor(imageH + 78);
  useEffect(() => {
    const img = new Image();
    img.src = data?.companyLogo;
    img.onload = ()=>{
      const { naturalWidth, naturalHeight } = img;
      setImageWidth(naturalWidth);
      setImageHeight(naturalHeight);
    }
  }, [data?.companyLogo]);
  
  useEffect(() => {
    setIsGreater(imageH > 60);
  }, [imageH]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const d = setTimeout(() => {
      showWelcomeScreen(false);
      data.screen = false;
    }, 3000);
    
    return ()=>clearTimeout(d); 
  }, [data, data.linkImages, data.list_URL, data?.list_text, data.screen]);

  const light = isLight(data?.primaryColor.replace('#',''));

  useScroller(data);

  return welcomeScreen ? (
    <WelcomeScreen screen={data?.screen} />
  ) : (
    <div className="flex flex-col justify-center items-center">
      {data?.companyLogo ? (
        <>
          <div 
            className="flex items-center justify-center relative w-full h-[138px] -z-10 duration-500"
            id="color_palette"
            style={{
              backgroundColor: data?.primaryColor || "#37C1B4",
              height : isGreater? devH+"px" : "138px"
            }}
          ></div>
          <div
            className="flex flex-col items-center justify-center bg-white relative -mt-[10px] w-full max-w-[700px] px-[16px] rounded-t-[10px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
          >
            {data?.companyLogo ? (
              <img 
                src={data.companyLogo} 
                className={`w-[120px] border-[14px] mb-0 xs:mb-[33px] bg-white border-white mt-[-${imageH+"px"}] rounded-full`}
                style={{
                  marginTop: "-"+imageH+"px"
                }}
                alt={data?.list_title}
              />
            ) : (
              <span className="pt-[15px]"/>
            )}
            {data?.list_title || data?.list_description ? (
              <div id="list_title" className=" text-[#131D29] pb-[7px] xs:pb-[14px] border-b-[1px] border-black/[.05] whitespace-break-spaces">
                {data?.list_title ? (
                  <h1 className=" text-lg xs:text-xl sm:text-2xl mb-[5px] xs:mb-[9px] font-bold" style={{fontFamily: data?.font_title}}>{data?.list_title}</h1>
                ) : (
                  <></>
                )}
                {data?.list_description ? (
                  <h2 className="text-sm xs:text-base whitespace-break-spaces text-balance" style={{fontFamily: data?.font_text, overflowWrap: "anywhere"}}>{data?.list_description}</h2>
                ) : (
                  <></> 
                )}
              </div>
            ) : (
              <></>
            )}

            <div className="mt-[10px] xs:mt-[25px] mb-[10px] xs:mb-[25px] w-full flex flex-col  text-white items-start justify-center">
              {data?.linkList ? (
                <div className="w-full space-y-[8px] xs:space-y-[15px]">
                {data?.linkList?.filter((i,e)=>(i.name !== '' ? true : false)).map((i, idx) => (
                  <a 
                    key={idx}
                    href={linkFixer(i.link)}
                    target="_blank"
                    className="flex flex-col w-full rounded-[4px] cursor-pointer hover:opacity-80 duration-500" 
                    style={{backgroundColor: data?.linkColor || "#37C1B4"}} 
                    rel="noreferrer"
                    id={`list_text_${idx+1}`}
                  >
                    <div className="flex flex-row w-full justify-between items-center p-[5px] xs:p-[10px]">
                      <div className="space-x-[7px] xs:space-x-[15px] sm:space-x-[22px] flex flex-row items-center">
                        {i.image ? (
                          <img src={i.image} width="84" height="84" className="w-[42px] rtl:ml-2" alt={i.name}/>
                        ):(
                          <></>
                        )}
                          <p className="text-[13px] xs:text-lg sm:text-xl text-left font-medium duration-500 rtl:text-base rtl:leading-4 rtl:text-right" style={{color: data.linkTextColor, fontFamily: data?.font_text}}>{i.name}</p>
                      </div>
                      <svg className="min-w-[25px] mr-[2px] xs:mr-[5px] rtl:rotate-180" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill={data.linkTextColor} className="duration-500"/>
                        <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill={data.linkTextColor} className="duration-500"/>
                      </svg>
                    </div>
                  </a>
                ))}
                </div>
              ) : (
                <></> 
              )}
            </div>
            
            <SocialNetWorks data={data} title={t('links.findMe')}/>
            
          </div>
        </>

      ) : (
        <>
          <div className="flex items-center justify-center relative w-full pt-[40px] xs:pt-[50px] -z-10 duration-500 whitespace-break-spaces" style={{backgroundColor: data?.primaryColor || "#37C1B4"}} id="color_palette">
            {data?.list_title || data?.list_description ? (
              <div className={` text-${light ? "[#131D29]" : "white"} pb-[30px] pt-[10px] w-full max-w-[700px] px-[16px]`}>
                {data?.list_title ? (
                  <h1 className=" text-lg xs:text-xl sm:text-2xl mb-[5px] xs:mb-[9px] font-bold" style={{fontFamily: data?.font_title}}>{data?.list_title}</h1>
                ) : (
                  <></>
                )}
                {data?.list_description ? (
                  <h2 className="text-sm xs:text-base whitespace-break-spaces" style={{fontFamily: data?.font_text}}>{data?.list_description}</h2>
                ) : (
                  <></> 
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
            <div
              className="flex flex-col items-center justify-center bg-white relative -mt-[10px] w-full max-w-[700px] px-[16px] rounded-t-[10px] shadow-[1px_6px_30px_rgba(0,31,14,0.05)]"
              >
              <div className="mt-[10px] xs:mt-[25px] mb-[10px] xs:mb-[25px] w-full flex flex-col  text-white items-start justify-center">
                {data?.linkList ? (
                  <div className="w-full space-y-[8px] xs:space-y-[15px]">
                  {data?.linkList?.filter((i,e)=>(i.name !== '' ? true : false)).map((i, idx) => (
                    <a 
                      key={idx}
                      href={linkFixer(i.link)}
                      target="_blank"
                      className="flex flex-col w-full rounded-[4px] cursor-pointer hover:opacity-80 duration-500" 
                      style={{backgroundColor: data?.linkColor || "#37C1B4"}}
                      rel="noreferrer"
                      id={`list_text_${idx+1}`}
                    >
                      <div className="flex flex-row w-full justify-between items-center p-[5px] xs:p-[10px]">
                        <div className="space-x-[7px] xs:space-x-[15px] sm:space-x-[22px] flex flex-row items-center">
                          {i.image ? (
                            <img src={i.image} width="84" height="84" className="w-[42px] rtl:ml-2" alt={i}/>
                          ):(
                            <></>
                          )}
                            <p className="text-[13px] xs:text-lg sm:text-xl text-left font-medium duration-500 rtl:text-base rtl:leading-4 rtl:text-right" style={{color: data.linkTextColor, fontFamily: data?.font_text}}>{i.name}</p>
                        </div>
                        <svg className="min-w-[25px] mr-[2px] xs:mr-[5px] rtl:rotate-180" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 11.7547C4 11.3741 4.28215 11.0595 4.64823 11.0098L4.75 11.0029H19.75C20.1642 11.0029 20.5 11.3395 20.5 11.7547C20.5 12.1354 20.2178 12.4499 19.8518 12.4997L19.75 12.5066L4.75 12.5066C4.33579 12.5066 4 12.17 4 11.7547Z" fill={data.linkTextColor} className="duration-500"/>
                          <path d="M13.171 6.2482C12.8775 5.95522 12.8765 5.47917 13.1687 5.18493C13.4344 4.91743 13.851 4.89226 14.1451 5.11002L14.2294 5.18264L20.2794 11.2215C20.547 11.4887 20.5714 11.9078 20.3524 12.2026L20.2794 12.287L14.2294 18.3269C13.9359 18.6199 13.4611 18.6189 13.1688 18.3247C12.9031 18.0572 12.8797 17.6395 13.0982 17.3456L13.171 17.2614L18.687 11.754L13.171 6.2482Z" fill={data.linkTextColor} className="duration-500"/>
                        </svg>
                      </div>
                    </a>
                  ))}
                  </div>
                ) : (
                  <></> 
                )}
              </div>
              
              <SocialNetWorks data={data} title={t('links.findMe')}/>
  
          </div>
        </>
      )}
      
    </div>
  );
};

export default ListOfLinks;
