import { Suspense, useState,useEffect,lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notiflix from 'notiflix';
import  data  from "./data/data.json";
import { useLang } from './hooks/useLang';
import { url } from './data/constants';
import { url2  } from './data/constants';
import { elementOfPage } from './data/constants';
import { getRandomID } from './utils/helpers/createId/getRandomID';
import { makePaginatorArray } from './utils/helpers/listPagination/makePaginatorArray ';
import './app.css';

const AllEvent = lazy(() => import('./Page/AllEvent/AllEvent'));
const AddEvent= lazy(() => import('./Page/AddEvent/AddEvent'));
const OneEvent = lazy(() => import('./Page/OneEvent/OneEvent'));
const EditEvent = lazy(() => import('./Page/EditEvent/EditEvent'));
const Layout = lazy(() => import('./components/Layout/Layout'));

const App = () => {
  const [jumpBack, setInJumpBack] = useState('');
  const { lang } = useLang();
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem('events')) || data;
  });  
  const [filter, setInFilter] = useState(() => {
    return JSON.parse(localStorage.getItem('filter')) || '';
    });
  const[isActivPage,setInActivPage]=useState(() => {
    return JSON.parse(localStorage.getItem('page')) || 1;
  }); 
   

  
  useEffect(() => {    
    localStorage.setItem('events', JSON.stringify(events));
    localStorage.setItem('page', JSON.stringify(isActivPage));
    localStorage.setItem('filter', JSON.stringify(filter));        
  }, [events,jumpBack,lang,isActivPage,filter]);
  
  const handleAdd = (data) => {
    lang === 'en' ? Notiflix.Notify.success('Congratulations! You have successfully added an event.') : Notiflix.Notify.failure('Вітаємо!Ви успішно додали подію.');
    const { title, description, date, time, location, category, priority } = data;
    
    setEvents([{ id: getRandomID(), title, description, date, time, location, category, priority, url, url2 }, ...events]);
    setInActivPage(1);    
  };

  const handleEditEvent = (data, eventId) => {
    lang === 'en' ? Notiflix.Notify.success('Congratulations! You have successfully edited the event.') : Notiflix.Notify.failure('Вітаємо!Ви успішно відредагували подію.');
    const { title, description, date, time, location, category, priority } = data;
    const newEvent = { title, description, date, time, location, category, priority, id: eventId, url: url, url2: url2 };
    const event = events.find((event) => event.id === eventId);
    const index = events.indexOf(event);
    events.splice(index, 1, newEvent);
    // setEvents(events.splice(index, 1, newEvent))
    localStorage.setItem('events', JSON.stringify(events));
  };
 
  const hendleDelete = (data) => {
    lang === 'en' ? Notiflix.Notify.success('Congratulations! You have successfully deleted the event') : Notiflix.Notify.failure('Вітаємо!Ви успішно видалили подію.');
    setEvents(events.filter((event) => event.id !== data));
  };

  const hendleSort = (data) => {
    const { name, id } = data;
    let sortEvents = {};
    
    if (name === 'title') {
      sortEvents = events.sort((x, y) => {
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
      sortEvents = events.sort((x, y) => {
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
      sortEvents = events.sort((x, y) => {
        if (x.priority < y.priority) {
          return -1;
        }
        if (x.priority > y.priority) {
          return 1;
        }
        return 0
      });
    }

    id === "down" ? localStorage.setItem('events', JSON.stringify(sortEvents.reverse())) : localStorage.setItem('events', JSON.stringify(sortEvents))
    
    window.location.reload();
  }; 
 

  // const getFilter = () => {
  //   if (filter === 'All') {
  //     window.location.reload();
  //   }
  //   if (filter === 'Art' ||
  //     filter === 'Music' ||
  //     filter === 'Business' ||
  //     filter === 'Conference' ||
  //     filter === 'Workshop' ||
  //     filter === 'Party' ||
  //     filter === 'Sport'
  //   ) {
  //     return events.filter((event) => event.category.includes(filter));
  //   } else {
  //     return events.filter((event) => event.title.toLowerCase().includes(filter));
  //   }
  // };
  
  
  const filterEvents = events.filter((event) => event.title.toLowerCase().includes(filter)); 
  
  const eventsOfPage = () => {    
    const array = [];    
    for (let i = 0; i < filterEvents.length; i++) {
      if (i >= elementOfPage * (isActivPage - 1) && i < elementOfPage * isActivPage) {
        array.push(filterEvents[i])
      }
    };
    localStorage.setItem('paginator', JSON.stringify(makePaginatorArray(Math.ceil(filterEvents.length / elementOfPage))))
    return array
  };
  
  return(
    <BrowserRouter  basename="EventPlanner">    
      <Suspense >
        < Layout onFilter={setInFilter} value={filter} >        
          <Routes>   
            <Route path=""
              element={<AllEvent
                events={eventsOfPage()}
                onSort={hendleSort}
                setInActivPage={setInActivPage}
                arrayPage={makePaginatorArray(Math.ceil(filterEvents.length / elementOfPage))}
                isActivPage={isActivPage}
                onFilter={setInFilter}
              />}
            />
            <Route path="event" element={<AddEvent addEvent={handleAdd}/>}/>    
            <Route path="event/:eventId" element={<OneEvent onDelete={hendleDelete} onBack={setInJumpBack} events={events}/>}/>
            <Route path="event/:eventId/edit" element={<EditEvent editEvent={handleEditEvent}  events={events}/>}/>               
          </Routes>       
        </Layout> 
      </Suspense>        
    </BrowserRouter>
  );
 
};


export default App;
