import { useLayoutEffect, useState } from "react";

export const useLang =()=>{
const [lang,setLang]=useState(localStorage.getItem('language')||'en');
useLayoutEffect(()=>{
    document.documentElement.setAttribute('language', lang);
    localStorage.setItem('language', lang);
    
},[lang])

return {lang,setLang}
}