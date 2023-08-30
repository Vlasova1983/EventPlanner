import { Suspense,lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';

const AllEvent = lazy(() => import('./Page/AllEvent/AllEvent'));
const AddEvent= lazy(() => import('./Page/AddEvent/AddEvent'));
const OneEvent = lazy(() => import('./Page/OneEvent/OneEvent'));
const EditEvent = lazy(() => import('./Page/EditEvent/EditEvent'));
const Layout = lazy(() => import('./components/Layout/Layout'));

const App = () => {  
  return(
    <BrowserRouter  basename="EventPlanner">    
      <Suspense >
        <Layout>        
          <Routes>   
            <Route path=""element={<AllEvent/>}/>
            <Route path="event" element={<AddEvent/>}/>    
            <Route path="event/:eventId" element={<OneEvent/>}/>
            <Route path="event/:eventId/edit" element={<EditEvent/>}/>               
          </Routes>       
        </Layout> 
      </Suspense>        
    </BrowserRouter>
  );
 
};


export default App;
