import {Suspense} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import AllEvent from "./Page/AllEvent/AllEvent";
import AddEvent from "./Page/AddEvent/AddEvent";
import OneEvent from "./Page/OneEvent/OneEvent";
import Layout from "./components/Layout/Layout";
import EditEvent from './Page/EditEvent/EditEvent';


const App = () => {
 return(
  <BrowserRouter >    
    <Suspense >
      < Layout >        
          <Routes>   
            <Route path="" element={<AllEvent/>} />
            <Route path="event" element={<AddEvent/>} />    
            <Route path="event/:eventId" element={<OneEvent/>}/>
            <Route path="event/edit" element={<EditEvent/>}/>               
          </Routes>       
      </Layout> 
    </Suspense>        
  </BrowserRouter>
 );
};


export default App;
