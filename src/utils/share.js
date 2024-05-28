import { enqueueSnackbar } from "notistack";

export default async function ShareOrCopy(data) {
    if (data?.uId && !data?.live) {
        const shareData = {
            url: "https://scanned.page/" + data?.uId,
        };


        if(navigator.share && navigator.canShare(shareData) ){
            try {
                await navigator.share(shareData)
              } catch (err) {
              }
        }else{
            if(navigator.clipboard && navigator.clipboard.writeText){
                navigator.clipboard.writeText(shareData.url)
                                    .then(()=>enqueueSnackbar('Link Copied to clipboard!.',{variant:"success"}));
            }else{
                const t = document.createElement("textarea");
                t.value = shareData.url;
                document.body.appendChild(t);
                t.select();
                if(document.execCommand("copy")){
                    enqueueSnackbar('Link Copied to clipboard!.',{variant:"success"});
                }else{
                    enqueueSnackbar('Sorry! Share feature is not available on your device.',{variant:"error"})
                }
                document.body.removeChild(t);
            }
        }
    }
}

/** @param {String|Number} text  */
export function CopyToClipBoard(text){
    if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text)
        .catch((err)=>{
            // console.log(err);
        }).then((err)=>{
            enqueueSnackbar("Copied to clipboard!",{variant:"success"})
        });
    }
}