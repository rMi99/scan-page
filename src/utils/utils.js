import { useCallback, useEffect, useRef } from "react";

/**
 * 
 * @return {import("react").MutableRefObject} 
 */
export function useAdjustZoom(){
    const element = useRef();

    const setRef = (e)=>{element.current = e}

    const measure = useCallback(()=>{
        if(element.current){
            const zoomRatio = (window.innerWidth/269).toFixed(2);
            // console.log(zoomRatio);
            element.current.style.zoom = zoomRatio;
            // element.current.style.zoom = 0.51;
            // element.current.style.transform = `scale(${zoomRatio})`;
            // element.current.style.transformOrigin = 'left top';
            // const marginR = (100 - (element.current.getBoundingClientRect().width / window.innerWidth)*100)*10;
            // element.current.style.marginRight = `-${marginR}px`;
            // console.log(marginR);
        }
    },[element])
    
    useEffect(()=>{
        measure();
        window.addEventListener("resize",measure);
        return ()=>window.removeEventListener("resize",measure);
    },[element, measure])

    return setRef
}
