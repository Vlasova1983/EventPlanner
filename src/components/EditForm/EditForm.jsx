import { useNavigate,useParams } from 'react-router-dom';
import {useState} from "react";
import { PropTypes } from 'prop-types';
// import { useLang } from '../../hooks/useLang';
import styles from './EditForm.module.css';

const EditForm = ({ events, editEvent }) => {
    // const {lang} = useLang();
    const navigate = useNavigate();
    const { eventId } = useParams();
    const event = events.filter((item) => item.id.includes(eventId));
    const item = event[0];
    
    const [title, setInTitle] = useState(item.title);
    const [description, setInDescription] = useState(item.description);
    const [date, setInDate] = useState(item.date);
    const [time, setInTime] = useState(item.time);
    const [location, setInLocation] = useState(item.location);
    const [category, setInCategory] = useState(item.category);
    const [priority, setInPriority] = useState(item.priority); 

    const handleChange = event => {       
      const { name, value } = event.target; 
      
      if (name === 'title') { setInTitle(value) }
      if (name === 'description') { setInDescription(value) }
      if (name === 'date') { setInDate(value) }
      if (name === 'time') { setInTime(value) }
      if (name === 'location') { setInLocation(value) }
      if (name === 'category') { setInCategory(value) }
      if (name === 'priority') { setInPriority(value) }
    }; 
   
  
    const handleFormSubmit = evt => {       
        evt.preventDefault();        
        editEvent({title, description, date, time, location, category, priority,eventId});
        setInTitle('');
        setInDescription('');
        setInDate('');
        setInTime('');
        setInLocation('');
        setInCategory('');
        setInPriority('');
        navigate(-1);
  }; 
   
  return (
      <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.flex}>               
        <div className={styles.box1}>
          <label className={styles.lable} htmlFor="title">           
            <p>Title</p>            
          </label>          
          <input className={styles.input} id="title" type="text" name="title" onChange={handleChange} value={title} placeholder="Search title..." required />
        </div>
        <div className={styles.box2}>
          <label className={styles.lable} htmlFor="description">            
            <p>Description</p>              
          </label>           
            <input className={styles.description} id="description" type="text" name="description" onChange={handleChange} value={description} placeholder="Search description..." required />              
        </div>
        <div className={styles.box3}>
          <label className={styles.lable} htmlFor="date" >           
            <p>Select date</p> 
          </label>
          <input className={styles.input} id="date" type="date" name="date" onChange={handleChange} value={date} placeholder="" required/>
        </div>
        <div className={styles.box4}>
          <label className={styles.lable} htmlFor="time" >            
            <p>Select time</p> 
          </label>
          <input className={styles.input} id="time" type="time" name="time" onChange={handleChange} value={time} placeholder="" required/>
        </div>                
        <div className={styles.box5}>
          <label className={styles.lable} htmlFor="location" >           
            <p>Location</p> 
          </label>         
          <input className={styles.input} id="location" type="text" name="location" onChange={handleChange} value={location} placeholder="Search location..." required />
        </div>              
        <div className={styles.box6}>
          <label className={styles.lable} htmlFor="category">            
            <p>Сategory</p> 
          </label>        
          <select id="category" className={styles.select} value={category} name='category' onChange={handleChange} required >
            <option  value={'Art'}>Art</option>
            <option  value={'Music'}>Music</option>
            <option  value={'Business'}>Business</option>
            <option  value={'Conference'}>Conference</option>
            <option  value={'Workshop'}>Workshop</option>
            <option  value={'Party'}>Party</option>
            <option  value={'Sport'}>Sport</option>
          </select>       
        </div>
        <div className={styles.box7}>
          <label className={styles.lable} htmlFor="picture">           
            <p>Add picture</p> 
          </label>
          <input className={styles.input} id="picture" type="text" name="picture" onChange={handleChange}  disabled placeholder="" required/>
        </div>
        <div className={styles.box8}>
          <label className={styles.lable} htmlFor="priority" >            
            <p>Priority</p> 
          </label>        
          <select  onChange={handleChange} className={styles.select} value={priority} name='priority' id="priority" required >
            <option value={'Hight'}>Hight</option>
            <option value={'Medium'}>Medium</option>
            <option value={'Low'}>Low</option>
          </select>           
        </div>                      
      </div>
      <div className={styles.boxButton}>
        <button className={styles.button} type="submit">Save</button> 
      </div>        
    </form>      
  );    
}

export default EditForm;

EditForm.propTypes = {
    events: PropTypes.array,
    editEvent:PropTypes.func
}