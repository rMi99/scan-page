import { useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom";

import {WebsitePreview, WebsiteShowcase} from "./Preview/Step01/Website";
import {PDFPreview, PDFShowcase} from "./Preview/Step01/PDF";
import {ListOfLinksPreview, ListOfLinksShowcase} from "./Preview/Step01/ListOfLinks";
import {VcardPreview,VcardShowcase} from "./Preview/Step01/Vcard";
import {BusinessPreview, BusinessShowcase} from "./Preview/Step01/Business";
import {ImagesPreview, ImagesShowcase} from "./Preview/Step01/Images";
import {VideoPreview, VideoShowcase} from "./Preview/Step01/Video";
import {AppsPreview, AppsShowcase} from "./Preview/Step01/Apps";
import {CouponPreview, CouponShowcase} from "./Preview/Step01/Coupon";
import {Mp3Preview, Mp3Showcase} from "./Preview/Step01/Mp3";
import {MenuPreview, MenuShowcase} from "./Preview/Step01/Menu";
import {WIFIPreview, WIFIShowcase} from "./Preview/Step01/Wifi";
import DefaultPage from "./Preview/DefaultPage";
import "../index.css";
import LiveController from "./liveController";
import Default from "./Preview/Step01/Default";


export default function StepController() {

    const location = useLocation();
    const query = useMemo(()=>(new URLSearchParams(location.search)),[location]) ;

    const [sseData, setSseData] = useState(null);
    
    const isShowcase = ()=>(query.get('isShowcase') === 'true');

    useEffect(() => {
        const catchData = (e) => {
            console.log(e.data)
            if (e.data?.live) {
                setSseData(e.data?.live ? e.data : null);
            }
        }
        window.addEventListener("message", catchData, false);
        return () => { window.removeEventListener('message', catchData) }
    },[])

    useEffect(()=>{
        if(query.get('isShowcase')){
            document.body.classList.add('showcase');
        }else{
            document.body.classList.remove('showcase');
        }
    },[query])
    
    if(sseData?.step || query.get('preview')){
        if(query.get('isShowcase')){
            switch (sseData?.type || query.get('type')) {
                case 'website':
                    return isShowcase() ? <WebsiteShowcase /> : <WebsitePreview />;
                case 'pdf':
                    return isShowcase() ? <PDFShowcase /> : <PDFPreview /> ;
                case 'links':
                    return isShowcase() ? <ListOfLinksShowcase/> :<ListOfLinksPreview />;
                case 'vcard':
                    return isShowcase() ? <VcardShowcase/> : <VcardPreview />;
                case 'business':
                    return isShowcase() ? <BusinessShowcase /> : <BusinessPreview />;
                case 'images':
                    return isShowcase() ? <ImagesShowcase /> : <ImagesPreview />;
                case 'video':
                    return isShowcase() ? <VideoShowcase/> : <VideoPreview />;
                case 'app':
                    return isShowcase() ? <AppsShowcase/> : <AppsPreview/>;
                case 'coupon':
                    return isShowcase() ? <CouponShowcase /> : <CouponPreview />;
                case 'mp3':
                    return isShowcase() ? <Mp3Showcase /> : <Mp3Preview />;
                case 'menu':
                    return isShowcase()? <MenuShowcase /> : <MenuPreview />;
                case 'wifi':
                    return isShowcase() ? <WIFIShowcase/> : <WIFIPreview />;
                default:
                    return <Default />
            }
        }else if(sseData?.step || query.get('type')){
            return <LiveController postData={sseData} defaultType={query.get('type')}/>
        }else {
            return <Default/>
        }
    }else{
        return <DefaultPage/>
    }
}

    