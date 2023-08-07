import { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState,useEffect} from "react";
import AllEvent from "./Page/AllEvent/AllEvent";
import AddEvent from "./Page/AddEvent/AddEvent";
import OneEvent from "./Page/OneEvent/OneEvent";
import Layout from "./components/Layout/Layout";
import EditEvent from './Page/EditEvent/EditEvent';
import data from "./data/data.json";

const getRandomID=()=> {
  return `${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const App = () => {
  const url = "https://images.pexels.com/photos/461199/pexels-photo-461199.jpeg?dpr=2&h=480&w=640";
 
  const [filter, setInFilter] = useState('');
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem('events')) || data;
  });
console.log('render')
  useEffect(() => {
    console.log('rerender')
    localStorage.setItem('events', JSON.stringify(events));    
  }, [events]);
  
  const handleAdd = ({ title, description, date, time, location, category, priority }) => {
    setEvents([...events, { id:getRandomID(),title, description, date, time, location, category, priority,url}]);
  };

  const handleFilter =(value)=>{ 
    setInFilter(value);       
  };
 
  const hendleDelete = (data) => { 
    setEvents(events.filter((event)=>event.id !== data));     
  }  

  const hendleSort = () => {    
    const sortEvents = events.sort((x, y) =>{    
    if (x.category < y.category) {
      return -1;
    } 
    if (x.category > y.category) {
      return 1;
    }
      return 0
    });
    console.log(sortEvents)
    setEvents(sortEvents ); 
  }

  const getFilter = () => {  
    return events.filter((event) => event.title.toLowerCase().includes(filter));
  };   
 
  return(
    <BrowserRouter >    
      <Suspense >
        < Layout onFilter={handleFilter} >        
          <Routes>   
            <Route path="" element={<AllEvent events={getFilter()} onSort={ hendleSort} />} />
            <Route path="event" element={<AddEvent addEvent={handleAdd}/>}/>    
            <Route path="event/:eventId" element={<OneEvent onDelete={hendleDelete} events={events}/>}/>
            <Route path="event/edit" element={<EditEvent  events={events}/>}/>               
          </Routes>       
        </Layout> 
      </Suspense>        
    </BrowserRouter>
  );
   
 
};


export default App;
