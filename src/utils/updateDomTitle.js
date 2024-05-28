import { useEffect } from "react";

function useUpdateDomTitle(title,themeColor){
    useEffect(()=>{
        document.title = title ? title : "Scanned Page";
        document.querySelector("meta[name=\"theme-color").content = themeColor ? themeColor : "#ffffff";
    })
}

export default useUpdateDomTitle;