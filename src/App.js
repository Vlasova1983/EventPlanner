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

  useEffect(() => {    
    localStorage.setItem('events', JSON.stringify(events));    
  }, [events]);
  
  const handleAdd = ({ title, description, date, time, location, category, priority }) => {
    setEvents([...events, { id:getRandomID(),title, description, date, time, location, category, priority,url}]);
  };

  
 
  const hendleDelete = (data) => { 
    setEvents(events.filter((event)=>event.id !== data));     
  }  

  const hendleSort = (data) => {
    const { name } = data;
    // ToDo  id button  (sort revers) 
    let sortEvents = {};

    if (name === 'title') {
        sortEvents = events.sort((x, y) =>{    
      if (x.title < y.title) {
        return -1;
      } 
      if (x.title > y.title) {
        return 1;
      }
        return 0
      });
    }

    if (name === 'date') {
        sortEvents = events.sort((x, y) =>{    
      if (x.date < y.date) {
        return -1;
      } 
      if (x.date > y.date) {
        return 1;
      }
        return 0
      });
    }

    if (name === 'priority') {
        sortEvents = events.sort((x, y) =>{    
      if (x.priority < y.priority) {
        return -1;
      } 
      if (x.priority > y.priority) {
        return 1;
      }
        return 0
      });
    }
     
    localStorage.setItem('events', JSON.stringify(sortEvents));
    window.location.reload();
  }
  
  const handleFilter = (data) => {    
    setInFilter(data);  
  }
  const getFilter = () => { 
    if (filter === 'Art' ||
      filter === 'Music' ||
      filter === 'Business' ||
      filter === 'Conference' ||
      filter === 'Workshop' ||
      filter === 'Party' ||
      filter === 'Sport'
    ){return events.filter((event) => event.category.includes(filter));
    } else {
      return events.filter((event) => event.title.toLowerCase().includes(filter));
    }    
  };   
 
  return(
    <BrowserRouter >    
      <Suspense >
        < Layout onFilter={handleFilter} >        
          <Routes>   
            <Route path="" element={<AllEvent events={getFilter()} onSort={hendleSort} onFilter={handleFilter} />} />
            <Route path="event" element={<AddEvent addEvent={handleAdd}/>}/>    
            <Route path="event/:eventId" element={<OneEvent onDelete={hendleDelete} events={events}/>}/>
            <Route path="event/:eventId/edit" element={<EditEvent  events={events}/>}/>               
          </Routes>       
        </Layout> 
      </Suspense>        
    </BrowserRouter>
  );
   
 
};


export default App;
