import { useState } from "react";
import data from "../data/data.json";

export const useEvent =()=>{
   const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem('events')) || data;
  }); 
    return {events, setEvents}
}