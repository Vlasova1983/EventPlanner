import styles from './AddForm.module.css';
import { PropTypes } from 'prop-types';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useLang } from '../../hooks/useLang';

const AddForm = ({ addEvent }) => {
    const {lang} = useLang();
    const navigate = useNavigate();
    const [title, setInTitle] = useState('');
    const [description, setInDescription] = useState('');
    const [date, setInDate] = useState('');
    const [time, setInTime] = useState('');
    const [location, setInLocation] = useState('');
    const [category, setInCategory] = useState('');
    const [priority, setInPriority] = useState(''); 
 

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
        addEvent({title, description, date, time, location, category, priority});
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
            {lang === 'en' ?
              <p>Title</p> :
              <p>Назва</p>
            }
          </label>
          {lang === 'en' ?
            <input className={styles.input} id="title" type="text" name="title" onChange={handleChange} value={title} placeholder="Search title..." required /> :
            <input className={styles.input} id="title" type="text" name="title" onChange={handleChange} value={title} placeholder="Введіть назву події..." required />
          }
        </div>
        <div className={styles.box2}>
          <label className={styles.lable} htmlFor="description">
            {lang === 'en' ?
              <p>Description</p> :
              <p>Опис</p>
            }
          </label>
            {lang === 'en' ?
              <input className={styles.description} id="description" type="text" name="description" onChange={handleChange} value={description} placeholder="Search description..." required /> :
              <input className={styles.description} id="description" type="text" name="description" onChange={handleChange} value={description} placeholder="Введіть опис події..." required />
            }
        </div>
        <div className={styles.box3}>
          <label className={styles.lable} htmlFor="date" >
            {lang === 'en' ?
              <p>Select date</p> :
              <p>Оберіть дату</p>
            }
          </label>
          <input className={styles.input} id="date" type="date" name="date" onChange={handleChange} value={date} placeholder="" required/>
        </div>
        <div className={styles.box4}>
          <label className={styles.lable} htmlFor="time" >
            {lang === 'en' ?
              <p>Select time</p> :
              <p>Оберіть час</p>
            }
          </label>
          <input className={styles.input} id="time" type="time" name="time" onChange={handleChange} value={time} placeholder="" required/>
        </div>                
        <div className={styles.box5}>
          <label className={styles.lable} htmlFor="location" >
            {lang === 'en' ?
              <p>Location</p> :
              <p>Місце події</p>
            }
          </label>
          {lang === 'en' ?
            <input className={styles.input} id="location" type="text" name="location" onChange={handleChange} value={location} placeholder="Search location..." required /> :
            <input className={styles.input} id="location" type="text" name="location" onChange={handleChange} value={location} placeholder="Введіть місце події..." required />
          }
        </div>              
        <div className={styles.box6}>
          <label className={styles.lable} htmlFor="favorite-category">
            {lang === 'en' ?
              <p>Сategory</p> :
              <p>Категорія</p>
            }
          </label> 
          {lang === 'en' ?
            <div>
              <input className={styles.input} onChange={handleChange} list="categoryEn" required />
              <datalist id="categoryEn" >
                <option >Art</option>
                <option>Music</option>
                <option >Business</option>
                <option >Conference</option>
                <option >Workshop</option>
                <option>Party</option>
                <option>Sport</option>
              </datalist>
            </div> :
            <div>
              <input className={styles.input} onChange={handleChange} list="categoryUk" required />
              <datalist id="categoryUk" >
                <option >Мистецтво</option>
                <option>Музика</option>
                <option >Бізнес</option>
                <option >Конференція</option>
                <option >Майстерня</option>
                <option>Вечірка</option>
                <option>Спорт</option>
              </datalist>
            </div>
          }
        </div>
        <div className={styles.box7}>
          <label className={styles.lable} htmlFor="picture">
            {lang === 'en' ?
              <p>Add picture</p> :
              <p>Додати фото</p>
            }
          </label>
          <input className={styles.input} id="picture" type="text" name="picture" onChange={handleChange}  disabled placeholder="" required/>
        </div>
        <div className={styles.box8}>
          <label className={styles.lable} htmlFor="favorite-priority" >
            {lang === 'en' ?
              <p>Priority</p> :
              <p>Пріоритет</p>
            }  
          </label>
          {lang === 'en' ?
            <div>
              <input className={styles.input} onChange={handleChange} list="priorityEn"  required />
              <datalist id="priorityEn">
                <option >Hight</option>
                <option >Medium</option>
                <option>Low</option>
              </datalist>
            </div> :
            <div>
              <input className={styles.input} onChange={handleChange} list="priorityUk"  required />
              <datalist id="priorityUk">
                <option >Високий</option>
                <option >Середній</option>
                <option>Низький</option>
              </datalist>
            </div>
          }  
        </div>                      
      </div>
      <div className={styles.boxButton}>
          {lang === 'en' ?
            <button className={styles.button} type="submit">Add event</button> :
            <button className={styles.button} type="submit">Додати подію</button>
          }
      </div>        
    </form>      
  );    
}

export default AddForm;
 AddForm.propTypes = {    
    addEvent:PropTypes.func
}