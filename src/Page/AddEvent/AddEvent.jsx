
import {Link, useLocation} from 'react-router-dom';

const AddEvent = () => {   
      
    const location = useLocation();    
    
        
    return (
       <> 
        <Link to={location.state?.from?? 'home'} >Go back</Link>             
           <h4>Страница создания нового события</h4>
       </> 
        
    );   
}
 
export default AddEvent;
