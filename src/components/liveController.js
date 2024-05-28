
import { useEffect, useState } from "react"

// import DefaultPage from "./Preview/DefaultPage";
import Apps from './Apps';
import PDF from "./PDF";
import Images from "./Images";
import Video from "./Video";
import WIFI from "./Wifi";
import Menu from "./Menu";
import Business from "./Business";
import Vcard from "./Vcard";
import Mp3 from "./MP3";
import ListOfLinks from "./ListOfLinks";
import Coupon from "./Coupon";
import WebsitePreview from "./Preview/Website";
import Instagram from "./Instagram";
import SocialMedia from "./SocialMedia";
import Facebook from "./Facebook";
import { getTemplateData } from "../utils/constants";
import useLanguage from "../utils/useLanguage";
// import Loading from "./loader";
import Default from "./Preview/Step01/Default";

export default function LiveController({postData=null,defaultType}){

    const t = useLanguage();
    const TEMPLATE_DATA = getTemplateData(t);
    const [sseData,setSseData] = useState(null);

    const catchData = (e)=>{
        if(e.data?.live){
            setSseData(e.data?.live ? e.data : null);
        }
    }
    
    const checkDynamicLive = (data)=>{
        return data && data?.live && !data?.static;
    }

    useEffect(()=>{
        if(postData){
            setSseData(postData);
        }else{
            window.addEventListener("message",catchData,false);
        }
        return ()=>{
            if(!postData){window.removeEventListener('message',catchData)}
        }
    },[postData])

    switch(sseData?.type || defaultType){
        case 'website':
            return <WebsitePreview url={sseData?.url} />;
        case 'pdf':
            return <PDF qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.pdf }/>;
        case 'links':
            return <ListOfLinks qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.listOfLinks} />;
        case 'vcard':
            return <Vcard qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.vcard} />;
        case 'business':
            return <Business qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.business} />;
        case 'images':
            return <Images qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.images} />;
        case 'video':
            return <Video qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.video} />;
        case 'app':
            return <Apps qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.app} />;
        case 'coupon':
            return <Coupon qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.coupon} />;
        case 'mp3':
            return <Mp3 qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.mp3} />;
        case 'menu':
            return <Menu qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.menu} />;
        case 'wifi':
            return <WIFI networkName={sseData?.networkName}/>;
        case 'instagram':
            return <Instagram qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.instagram}/>;
        case 'social':
            return <SocialMedia qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.social}/>;
        case 'facebook':
            return <Facebook qrData={checkDynamicLive(sseData) ? sseData : TEMPLATE_DATA.facebook}/>;
        default:
            return <Default/>
    }
}