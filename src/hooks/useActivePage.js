import { useState } from "react";

export const useActivePage =()=>{
     const[isActivPage,setInActivPage]=useState(() => {
    return JSON.parse(localStorage.getItem('page')) || 1;
  });
    return {isActivPage,setInActivPage}
}