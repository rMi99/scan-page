import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
// import i18n from 'i18next';

function useLanguage(){
    const location = useLocation();
    const urlParams = useMemo(()=> {return new URLSearchParams(location.search)},[location.search]);
    const lang = urlParams.get('lang');
  
    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      // initialize i18next with catalog and language to use
      if (urlParams.get('lang')) {
        i18n.changeLanguage(urlParams.get('lang'));
      } else {
        i18n.changeLanguage(getLanguageName(navigator.language));
      }

      if(lang === 'arabic'){
        document.dir = 'rtl';
      }else{
        document.dir = 'ltr';
      }
      
    }, [i18n, urlParams ,lang]);

    return t;
}

function getLanguageName(code) {
    const languageCode = code.split('-')[0];
    switch (languageCode) {
      case 'ar':
        return 'arabic';
      
      case 'bg':
        return 'bulgarian';

      case 'hr':
        return 'croatian';

      case 'cs':
        return 'czech';

      case 'da':
        return 'danish';

      case 'nl':
        return 'dutch';

      case 'en':
        return 'english';

      case 'fi':
        return 'finnish';

      case 'fr':
        return 'french';

      case 'de':
        return 'german';

      case 'el':
        return 'greek';

      case 'hu':
        return 'hungarian';

      case 'id':
        return 'indonesian';

      case 'it':
        return 'italian';

      case 'ja':
        return 'japanese';

      case 'ko':
        return 'korean';

      case 'ms':
        return 'malay';

      case 'no':
        return 'norwegian';

      case 'pl':
        return 'polish';

      case 'pt':
        return 'portuguese';

      case 'ro':
        return 'romanian';

      case 'sr':
        return 'serbian';

      case 'sk':
        return 'slovak';

      case 'sl':
        return 'slovenian';

      case 'es':
        return 'spanish';

      case 'sv':
        return 'swedish';

      case 'th':
        return 'thai';

      case 'tr':
        return 'turkish';

      case 'uk':
        return 'ukrainian';

      case 'yo':
        return 'yoruba';

      default:
        console.error('Language code not define');
        return 'english';
      
    }
}


function textWithHref(text=null, href_link=null, replace_with=null, styles=null) {
    const replace_text = "<a href='"+ replace_with +"'>";
    text.replace(replace_text, "<a href={href_link} style={styles}>");
}

export default useLanguage;