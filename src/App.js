import { Suspense, useState,useEffect,lazy} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useLang } from './hooks/useLang';
import data from "./data/data.json";

const AllEvent = lazy(() => import('./Page/AllEvent/AllEvent'));
const AddEvent= lazy(() => import('./Page/AddEvent/AddEvent'));
const OneEvent = lazy(() => import('./Page/OneEvent/OneEvent'));
const EditEvent = lazy(() => import('./Page/EditEvent/EditEvent'));
const Layout = lazy(() => import('./components/Layout/Layout'));

const getRandomID=()=> {
  return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const App = () => {
  const {lang} = useLang();
  const url = "https://images.pexels.com/photos/461199/pexels-photo-461199.jpeg?dpr=2&h=480&w=640";
  const [test, setTest] = useState('');
  const [filter, setInFilter] = useState('');
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem('events')) || data;
  })
 
  useEffect(() => {    
    localStorage.setItem('events', JSON.stringify(events));    
  }, [events,test,lang]);
  
  const handleAdd = ({ title, description, date, time, location, category, priority }) => {
    setEvents([...events, { id:getRandomID(),title, description, date, time, location, category, priority,url}]);
  }

  const handleEditEvent = ({ title, description, date, time, location, category, priority,eventId}) => {
    const newEvent = { title, description, date, time, location, category, priority, id: eventId,url:url };
    const event = events.find((event) => event.id === eventId);   
    const index = events.indexOf(event);
    events.splice(index, 1, newEvent);   
    localStorage.setItem('events', JSON.stringify(events));    
  }
 
  const hendleDelete = (data) => { 
    setEvents(events.filter((event)=>event.id !== data));     
  }  

  const hendleSort = (data) => {
    const { name,id } = data;    
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

    id==="down"?localStorage.setItem('events', JSON.stringify(sortEvents.reverse())):localStorage.setItem('events', JSON.stringify(sortEvents))
    
    window.location.reload();    
  }
  
  const handleFilter = (data) => {    
    setInFilter(data);  
  }

  const getFilter = () => { 
    if (filter === 'All') {
      window.location.reload();
    }
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
  }
  
  return(
    <BrowserRouter >    
      <Suspense >
        < Layout onFilter={handleFilter} >        
          <Routes>   
            <Route path="" element={<AllEvent events={getFilter()} onSort={hendleSort} onFilter={handleFilter} />} />
            <Route path="event" element={<AddEvent addEvent={handleAdd}/>}/>    
            <Route path="event/:eventId" element={<OneEvent onDelete={hendleDelete} onBack={setTest} events={events}/>}/>
            <Route path="event/:eventId/edit" element={<EditEvent editEvent={handleEditEvent}  events={events}/>}/>               
          </Routes>       
        </Layout> 
      </Suspense>        
    </BrowserRouter>
  );
 
};


export default App;
