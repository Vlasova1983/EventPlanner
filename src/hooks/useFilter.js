import { useState } from "react";

export const useFilter =()=>{
  const [filter, setInFilter] = useState(() => {    
    return JSON.parse(localStorage.getItem('filter')) || '';
  });
 
  return {filter, setInFilter}
}