import { useState } from "react";

export const usePaginator =()=>{    
    const[arrayPage,setInArrayPage]=useState(localStorage.getItem('paginator')||[]);    
    return { arrayPage,setInArrayPage }
}