import { useState } from "react";
import useLanguage from "../../../../utils/useLanguage";

export default function Default(){
    const t = useLanguage();
    const [isImgLoad,setImgLoad] = useState(false);

    return <div className="w-screen h-screen relative flex items-start justify-center">
        <img src="/images/funnel-default-phone-mockup-2.webp" alt="default" className={isImgLoad ? 'block' : 'hidden'} onLoad={()=>setImgLoad(true)}/>
        <span 
            className={`absolute top-[67%] w-full right-0 text-center font-extrabold px-1 ${isImgLoad ? 'block' : 'hidden'} step-def-text`} style={{paddingTop: '4px'}}
        >{t('global.step1_default')}</span>
    </div>
}