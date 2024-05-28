function linkFixer(url){
    url = String(url);
    if(url === ''){
        return null;
    }else if(url.startsWith('http://') || url.startsWith('https://') || url.startsWith("skype:")){
        return url;
    }else{
        return `//${url}`;
    }
};

export default linkFixer;