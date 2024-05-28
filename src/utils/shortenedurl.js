import { useEffect, useState } from "react";
import validateURL from "./validateurl";

export default function ShortenedUrl({ url }) {
    const [shortUrl, setShortUrl] = useState("");

    useEffect(() => {
        // Extract the domain name from the URL
        if(validateURL(url)){
            try{
                const urlObj = new URL(url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`);
                const domain = urlObj?.hostname
                // Update the state with the shortened URL
                setShortUrl(domain);
            }catch(e){
                // console.warn(e);
                setShortUrl("");
            }
        }
    }, [url]);

    return shortUrl;
}
