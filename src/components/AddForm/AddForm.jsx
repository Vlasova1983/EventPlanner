import { useNavigate,useParams } from 'react-router-dom';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useFormik } from 'formik';
import { useLang } from '../../hooks/useLang';
import SelectList from '../SelectList/SelectList';
import { Calendar } from '../Calendar/Calendar';
import { formatDate } from '../../utils/helpers/date/';
import Time from '../Time/Time';
import AddFormSchema from './AddFormSchema';
import { ReactComponent as IconСhoice } from "./chevron-down-small.svg";
import { ReactComponent as IconСhoiceUp } from "./chevron-up-small.svg";
import { ReactComponent as IconCross } from './cross-small.svg';
import styles from './AddForm.module.css'; 

const listCategory = ['Art', 'Music', 'Business', 'Conference', 'Workshop', 'Party', 'Sport'];
const listPriority = ['Hight', 'Medium', 'Low'];


const AddForm = ({ addEvent, editEvent, event }) => {  
  const navigate = useNavigate();
  const { eventId } = useParams();
  const { lang } = useLang();  
  const [isShowDate, setIsShowDate] = useState(false);
  const [isShowTime, setIsShowTime] = useState(false);
  const [isShowListCategory, setIsShowCategory] = useState(false);
  const [isShowListPriority, setIsShowPriority] = useState(false);
  const [selectedDate, setSelectedDay] = useState(new Date());

  const item = event[0]; 
  const { title,description,date,location,category,priority }=item


  const onChangeInput = e => {    
    const { name, value } = e.target;
    formik.setFieldValue(name, value);    
  }

  const onClearInput = (e) => {
    const { id } = e.target;    
    formik.setFieldValue(id, '');    
  }

  const hendleShowDate = () => {    
    isShowDate === false ? setIsShowDate(true) : setIsShowDate(false);
  }

  const hendleShowTime = () => { 
    switch (isShowTime) {
      case false:
        setIsShowTime(true)
        formik.setFieldValue('time', 'Select Time');
        break
      case true:
        setIsShowTime(false);
        break
      default: throw new Error(`Unsupported variant prop value - ${isShowTime}`);
    }   
  }

  const hendleShowCategory = () => {
    switch (isShowListCategory) {
      case false:
        setIsShowCategory(true);
        formik.setFieldValue('category', 'Select Categoty');
        break
      case true:
        setIsShowCategory(false);
        break
      default: throw new Error(`Unsupported variant prop value - ${isShowListCategory}`);
    }
  }

  const hendleShowPriority = () => {
    switch (isShowListPriority) {
      case false:
        setIsShowPriority(true);
        formik.setFieldValue('priority', 'Select Categoty');
        break
      case true:
        setIsShowPriority(false)
        break
      default: throw new Error(`Unsupported variant prop value - ${isShowListPriority}`);
    }
  }

  const onSelect = (e) => {    
    const { name, id } = e.target;    
    switch (id) {
      case 'date':
        formik.setFieldValue('date', formatDate(selectedDate, 'DDD DD MMM YYYY'));       
        break
      case 'date_clear':
        formik.setFieldValue('date', 'Select Date');       
        break
      case 'time':
        
        break      
      case 'category':
        formik.setFieldValue('category', name);       
        break
      case 'priority':
        formik.setFieldValue('priority', name);       
        break      
      default:
        throw new Error(`Unsupported variant prop value - ${id}`);
    }    
  }   
 
  const onSubmit = async (values, actions) => {    
    navigate(-1);   
    addEvent(values);
    actions.resetForm()
  } 
  
  const formik = useFormik({    
    initialValues: {
      title: ''||title,
      description: ''||description,
      location: ''||location,
      category: ''||category,
      priority: ''||priority,
      date: ''||date,
      hour: '',
      minutes: '',
      timeOfDay:''
    },
    validationSchema:AddFormSchema,
    onSubmit,
  })  
  
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>     
      <div className={styles.flex}>
        <div className={styles.box1}>
          <label className={styles.lable} htmlFor="title">
            <p>Title</p>                
          </label>    
          <button id="title" onClick={onClearInput} type="button" className={styles.crossButton} >                
            <IconCross
              className={`${styles.iconButton} ${formik.touched.title && formik.errors.title
                ? styles.errorIcon
                : ''                  
              }`}
              aria-label={'icon-cross'}
            />
          </button>   
          <input
            className={`${styles.input} ${
              formik.touched.title && formik.errors.title
              ? styles.errorInput
              :""
                
            }`}
            id='title'
            name="title"
            type="text"
            placeholder="input"
            onBlur={formik.handleBlur}
            onChange={onChangeInput}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
                <div className={styles.errorLabel}>{formik.errors.title}</div>
          ) : null}
        </div>
        <div className={styles.box2}>
          <label className={styles.lable} htmlFor="description">
            <p>Description</p>                
          </label>
          <button id='description' type="button" onClick={onClearInput} className={styles.crossButton} >                
            <IconCross                  
              className={`${styles.iconButton} ${
                formik.touched.description && formik.errors.description
                ? styles.errorIcon
                :''
                    
              }`}
              aria-label={'icon-cross'}
              id='description'
            />
          </button>   
          <input
            className={`${styles.description} ${
              formik.touched.description && formik.errors.description
              ? styles.errorInput
              :""                
            }`}
            id='description'
            name="description"
            type="text"
            placeholder="input"
            onBlur={formik.handleBlur}
            onChange={onChangeInput}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
                <div className={styles.errorLabel}>{formik.errors.description}</div>
          ) : null}
        </div>
        <div className={styles.box3}>
          <label className={styles.lable} htmlFor="date" >           
            <p>Select date</p> 
          </label>
          <button type="button" id='date' onClick={hendleShowDate} className={styles.crossButton} > 
            {!isShowDate && <IconСhoice aria-label={'icon-choice'} />}
            {isShowDate && <IconСhoiceUp aria-label={'icon-choice'} />}
          </button>
          <input 
            readOnly  
            className={`${styles.input} ${
              formik.touched.date && formik.errors.date
              ? styles.errorInput
              :""                
            }`}
            name='date'
            id='date'
            onBlur={formik.handleBlur}
            onChange={onChangeInput}
            value={formik.values.date}
            placeholder="input"               
          />              
          {formik.touched.date && formik.errors.date ? (
            <div className={styles.errorLabel}>{formik.errors.date}</div>
          ) : null}
          {isShowDate &&
            <div className={styles.conteinerCalendar}>
              <Calendar locale={lang} selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
              <div className={styles.conteinerButton}> 
                <button className={styles.canselButton} onClick={onSelect} id='date_clear' type='button'>Cancel</button>
                <button className={styles.chooseButton} onClick={onSelect} id='date' type='button'>Choose date</button>
              </div> 
            </div>
          }
        </div>           
        <div className={styles.box4}>
          <label className={styles.lable} htmlFor="time">
            <p>Select time</p>                
          </label>
          <button type="button" onClick={hendleShowTime}  className={styles.crossButton} > 
            {!isShowTime && <IconСhoice aria-label={'icon-choice'} />}
            {isShowTime && <IconСhoiceUp aria-label={'icon-choice'} />}
          </button>  
          <input
            className={`${styles.input} ${
              formik.touched.time && formik.errors.time
              ? styles.errorInput
              :""
                
            }`}
            id='time'
            name="time"
            type="text"
            placeholder="input"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.hour + formik.values.minutes + formik.values.timeOfDay}            
          />
          {formik.touched.time && formik.errors.time ? (
            <div className={styles.errorLabel}>{formik.errors.time}</div>
          ) : null}
          {isShowTime &&
            <Time onClick={formik.setFieldValue } />
          }
        </div>
        <div className={styles.box5}>   
          <label className={styles.lable} htmlFor="location">
            <p>Location</p>                
          </label>
          <button  id="location" onClick={onClearInput} type="button" className={styles.crossButton} >                
            <IconCross
              className={`${styles.iconButton} ${
                formik.touched.location && formik.errors.location
                ? styles.errorIcon
                :''                  
              }`}
              aria-label={'icon-cross'}
              id="location"
            />
          </button>   
          <input
            className={`${styles.input} ${
              formik.touched.location && formik.errors.location
              ? styles.errorInput
              :""                
            }`}
            id='location'
            name="location"
            type="text"
            placeholder="input"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.location}
          />
          {formik.touched.location && formik.errors.location ? (
            <div className={styles.errorLabel}>{formik.errors.location}</div>
          ) : null}
        </div>
        <div className={styles.box6}>
          <label className={styles.lable} htmlFor="category">            
            <p>Сategory</p> 
          </label>
          <button type="button" onClick={hendleShowCategory} className={styles.crossButton} > 
            {!isShowListCategory && <IconСhoice aria-label={'icon-choice'} />}
            {isShowListCategory && <IconСhoiceUp aria-label={'icon-choice'} />}
          </button>
          <input
            readOnly 
            className={`${styles.input} ${
              formik.touched.category && formik.errors.category
              ? styles.errorInput
              :""                
            }`}
            id="category"
            name='category'
            placeholder="input"
            onBlur={formik.handleBlur}
            onChange={onChangeInput}
            value={formik.values.category}
          />
          {isShowListCategory && 
            <SelectList onSelect={onSelect} id={"category"} data={listCategory} />
          }            
          {formik.touched.category && formik.errors.category ? (
            <div className={styles.errorLabel}>{formik.errors.category}</div>
          ) : null}
        </div>
        <div className={styles.box7}>
          <label className={styles.lablePicture} htmlFor="picture">           
            <p>Add picture</p> 
          </label>
          <button  type="button" className={styles.crossButton} >                
            <IconCross
              className={styles.iconPicture}
              aria-label={'icon-cross'}
            />
          </button> 
          <input
            className={styles.input}
            id="picture"
            name="picture"
            type="text"
            onBlur={formik.handleBlur}
            placeholder="input" disabled
          />
        </div>
        <div className={styles.box8}>
          <label className={styles.lable} htmlFor="priority" >            
            <p>Priority</p> 
          </label> 
          <button type="button" onClick={hendleShowPriority} className={styles.crossButton} > 
            {!isShowListPriority && <IconСhoice aria-label={'icon-choice'} />}
            {isShowListPriority && <IconСhoiceUp aria-label={'icon-choice'} />}
          </button>
          <input
            readOnly 
            className={`${styles.input} ${
              formik.touched.priority && formik.errors.priority
              ? styles.errorInput
              :""                
            }`}
            id="priority"
            name='priority'
            placeholder="input"
            onBlur={formik.handleBlur}
            onChange={onChangeInput}
            value={formik.values.priority}
          />
          {isShowListPriority && 
            <SelectList onSelect={onSelect} id={"priority"} data={listPriority} />
          }            
          {formik.touched.priority && formik.errors.priority ? (
            <div className={styles.errorLabel}>{formik.errors.priority}</div>
          ) : null} 
        </div>        
      </div>           
      <div className={styles.boxButton}>
        {eventId ===undefined  &&<button className={styles.buttonSubmit} type="submit" disabled={!formik.isValid || !formik.dirty}>Add event</button>}
        {eventId !==undefined && <button className={styles.buttonSubmit} type="submit" disabled={!formik.isValid || !formik.dirty}>Save</button>}
      </div>
    </form>
  ) 
};
 
export default AddForm;
 
AddForm.propTypes = {   
  addEvent: PropTypes.func,
  editEvent: PropTypes.func,
  event: PropTypes.array,  
}