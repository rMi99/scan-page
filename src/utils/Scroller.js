import { useEffect } from "react";

function useScroller(data){
  useEffect(()=>{
    const anchorLocation = document.getElementById(`${data.change}`);
    anchorLocation?.scrollIntoView({
      block:'center',
      behavior:"smooth"
    });
  },[data]);
}

export default useScroller;