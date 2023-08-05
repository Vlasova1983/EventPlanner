// import styles  from '../AddEvent/AddEvent.module.css';

// import {useState,useEffect,useContext} from 'react';
import {Link, useLocation} from 'react-router-dom';


// import { FeatchContext } from '../../context/FetchContext';


const AddEvent = () => {   
    // const [value,setIsValue] = useState('');
    // const [movies,setIsMovies] = useState([]);  
    // const [searchParams, setSearchParams]=useSearchParams();   
    const location = useLocation();    
    // const quary = searchParams.get('quary');
    // const featchContext = useContext(FeatchContext);   
    // const {url,key} = featchContext;
    // useEffect(()=>{
    //     const fetchData = async () => {        
    //         try {           
    //             const response= await axios.get(`${url}/search/movie?${key}&query=${quary}`);
    //             const data=response.data.results;                         
    //             setIsMovies(data);                      
    //         }
    //         catch (error) {
    //             Notiflix.Notify.failure('Sorry, your search did not match any results. Try again.');
    //         }                         
    //     };

    //     if(quary!==null) {fetchData()}
    // },[quary,url,key]);  
    

    // const  handleChange = event => {    
    //     const { value}  = event.target;       
    //     setIsValue(value);              
    // };

    // const handleSubmit = event =>{ 
    //     event.preventDefault();
    //     setSearchParams({quary:value})                        
    //     setIsValue('');                      
    // }; 
    
    // const fetchLink=(item)=>{               
    //     return(
    //         <Link state={{from:location}} to={`/event/${ item.id}`}  className={styles.link} key={item.id}>{item.title} </Link>
    //     )         
    // };
        
    return (
       <> 
        <Link to={location.state?.from?? 'home'} >Go back</Link>             
           
            {/* <ul className={styles.list}>                
                {movies.map ((move)=>(fetchLink(move)))}   
            </ul>             */}
       </> 
        
    );   
}
 
export default AddEvent;
