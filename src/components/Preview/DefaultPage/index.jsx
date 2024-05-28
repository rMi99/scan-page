import "aos/dist/aos.css";
import useLanguage from "../../../utils/useLanguage";
import { useEffect} from "react";
import i18n from 'i18next';

export default function DefaultPage(){
    const t = useLanguage();

    const currentLanguage = i18n.language;

    useEffect(() => {
  
        if(currentLanguage === 'arabic'){
          document.dir = 'rtl';
        }else{
          document.dir = 'ltr';
        }
        
    }, [currentLanguage]);
    
    document.title = t('defaultPage.title');

    return (
        <div className="default-section">
            <div className="flex flex-row items-center justify-evenly gap-[7%] border-b-2 border-black pb-16 section">
                <div className="flex flex-col items-start left-side">
                    <img 
                        src="/images/new_logo.webp" 
                        alt="logo" 
                        loading="lazy"
                        className="w-80 pb-4"
                    />
                    <p className="text-[40px] font-bold pb-4 px-2 title">{ t('defaultPage.title') }</p>
                    <p className="text-xl text-left font-medium px-2 para rtl:text-right">
                        { t('defaultPage.para_1') }
                    </p>
                    <p className="text-lg text-left font-medium pt-4 px-2 para rtl:text-right">
                        { t('defaultPage.para_2') }
                    </p>
                    <a 
                        className="px-[60px] py-[20px] bg-[#28c254] hover:bg-[#2bce59] rounded-md text-white font-semibold text-xl flex flex-row items-center mt-5 create-btn"
                        href="https://online-qr-generator.com/"
                    >
                        <img src="/images/qr-code.svg" alt="qr-code" className="pr-2 rtl:pl-2 rtl:pr-0"/>
                        <span>{ t('defaultPage.create_qr_btn') }</span>
                    </a>
                </div>
                <div 
                    className="bg-[#28c254] flex flex-col w-[100%] p-[20px] px-[38px] bg-no-repeat max-h-[616px] overflow-y-clip right-side"
                    style={{
                        backgroundImage: "url('/images/radial-banding-login.svg')",
                        backgroundSize: '180px 286px',
                        backgroundPosition: '0% 125%'
                    }}
                >
                    <h1 className=" text-left text-[42px] font-semibold text-white right-title text-right">{ t('defaultPage.image_title') }</h1>
                    <div className="mt-5 w-[400px] h-[584px] qr-cards relative">
                        <img 
                            src="/images/qr-cards-no-text.png" 
                            alt="qr-cards"
                        />
                        <div
                            className="qr-card-text bg-[#ffffff] absolute top-[43%] left-[10.5%] w-[133px]">
                            { t('defaultPage.qr_card_text') }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between px-2 py-8 df-footer">
                <div className="font-medium">{ t('defaultPage.footer_text_1') }</div>
                <div className="font-medium">{ t('defaultPage.footer_text_2') }</div>
            </div>
        </div>
    )
}