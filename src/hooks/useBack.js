import { useState } from "react";

export const useBack =()=>{
    const[jumpBack,setInJumpBack]=useState();
    
    return { jumpBack, setInJumpBack }
}