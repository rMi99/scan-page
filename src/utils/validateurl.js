export default function validateURL(url){
    var urlValue = (url).trim()
    var expression = /^(http|https|ftp):\/\/[-a-zA-Z0-9@:%_\\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (urlValue === "") {
        return false;
    } else if (!urlValue.match(regex)) {
        if (!(/^[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(urlValue))) {
            return false;
        }
        return true
    } else {
        return true;
    }
}