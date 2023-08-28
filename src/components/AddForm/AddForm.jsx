import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useFormik } from 'formik';
import { formatDate } from '../../utils/helpers/date/';
import { listCategoryEn } from '../../data/constants';
import { listPriorityEn } from '../../data/constants';
import { listCategoryUa } from '../../data/constants';
import { listPriorityUa } from '../../data/constants';
import { useLang } from '../../hooks/useLang';
import SelectList from '../SelectList/SelectList';
import { Calendar } from '../Calendar/Calendar';
import Time from '../Time/Time';
import AddFormSchema from './AddFormSchema';
import { ReactComponent as IconСhoice } from "./chevron-down-small.svg";
import { ReactComponent as IconСhoiceUp } from "./chevron-up-small.svg";
import { ReactComponent as IconCross } from './cross-small.svg';
import styles from './AddForm.module.css';


const AddForm = ({ addEvent}) => {  
  const navigate = useNavigate();
  const { lang } = useLang();  
  const [isShowDate, setIsShowDate] = useState(false);
  const [isShowTime, setIsShowTime] = useState(false);
  const [isShowListCategory, setIsShowCategory] = useState(false);
  const [isShowListPriority, setIsShowPriority] = useState(false);
  const [selectedDate, setSelectedDay] = useState(new Date());  
  

  const onChangeInput = e => {    
    const { name, value } = e.target;
    formik.setFieldValue(name, value);    
  }

  const onClearInput = (e) => {
    const { id } = e.target;    
    formik.setFieldValue(id, '');    
  }

  const hendleShow = (e) => {   
    switch (e){
      case 'isShowDate':
        if(isShowDate === false){
          setIsShowDate(true);
          lang === 'en'?formik.setFieldValue('date', 'Select Date'):formik.setFieldValue('date', 'Оберіть дату')
        }else{
          setIsShowDate(false)
        }        
        if(formik.values.date==='Select Date'||formik.values.date==='Оберіть дату'){
          formik.setFieldValue('date', '')
        }
        break
      case 'isShowTime':
        isShowTime === false?setIsShowTime(true):setIsShowTime(false);                
        break
      case 'isShowListCategory':
        if(isShowListCategory === false){
          setIsShowCategory(true);
          lang === 'en'?formik.setFieldValue('category', 'Select Category'):formik.setFieldValue('category', 'Оберіть категорію');
        }else{
          setIsShowCategory(false)
        }         
        break
      case 'isShowListPriority':
        if( isShowListPriority === false){
          setIsShowPriority(true);
          lang === 'en'?formik.setFieldValue('priority', 'Select Priority'):formik.setFieldValue('priority', 'Оберіть пріоритет');
        }else{
          setIsShowPriority(false)
        }   
        break      
      default: throw new Error(`Unsupported variant prop value - ${e}`); 
    }   
  } 

  const onSelect = (e) => {    
    const { name, id } = e.target;   
    switch (id) {
      case 'date':
        formik.setFieldValue('date', formatDate(selectedDate, 'DDD DD MMM YYYY'));       
        break
      case 'date_clear':
        lang === 'en'?formik.setFieldValue('date', 'Select Date'):formik.setFieldValue('date', 'Оберіть дату');       
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
 
  const onSubmit = async (values) => {    
    addEvent(values);   
    navigate(-1);
  } 
  
  const formik = useFormik({    
    initialValues: {
      title: '',
      description: '',
      location: '',
      category: '',
      priority: '',
      date: '',     
      time:''
    },
    validationSchema:AddFormSchema,
    onSubmit
  })  

  return (    
      <form className={styles.form} onSubmit={formik.handleSubmit}>       
        <div className={styles.flex}>       
          <div className={styles.box1}>
            <label className={styles.lable} htmlFor="title">
              {lang === 'en' 
                ?<p>Title</p> 
                :<p>Назва події</p>
              }
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
            {lang === 'en' 
                ? <input
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
                : <input
                className={`${styles.input} ${
                  formik.touched.title && formik.errors.title
                  ? styles.errorInput
                  :""                
                }`}
                id='title'
                name="title"
                type="text"
                placeholder="введіть"
                onBlur={formik.handleBlur}
                onChange={onChangeInput}
                value={formik.values.title}
              />
            } 
            {formik.touched.title && formik.errors.title ? (
                  <div className={styles.errorLabel}>{formik.errors.title}</div>
            ) : null}
          </div>
          <div className={styles.box2}>
            <label className={styles.lable} htmlFor="description">
              {lang === 'en' 
                ?<p>Description</p> 
                :<p>Oпис події</p>
              }                            
            </label>
            <button id='description' type="button" onClick={onClearInput} className={styles.crossButton} >                
              <IconCross                  
                className={`${styles.iconButton} ${
                  formik.touched.description && formik.errors.description
                  ? styles.errorIcon
                  :''
                      
                }`}
                aria-label={'icon-cross'}             
              />
            </button>
            {lang === 'en'?
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
            : <input
            className={`${styles.description} ${
              formik.touched.description && formik.errors.description
              ? styles.errorInput
              :""                
            }`}
            id='description'
            name="description"
            type="text"
            placeholder="введіть"
            onBlur={formik.handleBlur}
            onChange={onChangeInput}
            value={formik.values.description}
          />
          }            
            {formik.touched.description && formik.errors.description ? (
                  <div className={styles.errorLabel}>{formik.errors.description}</div>
            ) : null}
          </div>
          <div className={styles.box3}>
            <label className={styles.lable} htmlFor="date" >
              {lang === 'en' 
                ?<p>Select date</p> 
                :<p>Оберіть дату</p>
              }              
            </label>
            <button type="button" id='date' onClick={()=>hendleShow('isShowDate')} className={styles.crossButton} > 
              {!isShowDate && <IconСhoice className={styles.icon} id='date' aria-label={'icon-choice'} />}
              {isShowDate && <IconСhoiceUp className={styles.icon} id='date' aria-label={'icon-choice'} />}
            </button>
            {lang === 'en' ?
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
            : <input 
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
            placeholder="введіть"               
          /> 
          }
                         
            {formik.touched.date && formik.errors.date ? (
              <div className={styles.errorLabel}>{formik.errors.date}</div>
            ) : null}
            {isShowDate &&
              <div className={styles.conteinerCalendar}>
                <Calendar locale={lang} selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
                {lang === 'en' ?
                <div className={styles.conteinerButton}> 
                  <button className={styles.canselButton} onClick={onSelect} id='date_clear' type='button'>Cancel</button>
                  <button className={styles.chooseButton} onClick={onSelect} id='date' type='button'>Choose date</button>
                </div> 
                :<div className={styles.conteinerButton}> 
                  <button className={styles.canselButton} onClick={onSelect} id='date_clear' type='button'>Відмінити</button>
                  <button className={styles.chooseButton} onClick={onSelect} id='date' type='button'>Обрати дату</button>
                </div> 
                }               
              </div>
            }
          </div>           
          <div className={styles.box4}>
            <label className={styles.lable} htmlFor="time">
              {lang === 'en' 
                ?<p>Select time</p> 
                :<p>Оберіть час</p>
              }                            
            </label>
            <button type="button" onClick={()=>hendleShow('isShowTime')}  className={styles.crossButton} > 
              {!isShowTime && <IconСhoice aria-label={'icon-choice'} />}
              {isShowTime && <IconСhoiceUp aria-label={'icon-choice'} />}
            </button> 
            {lang === 'en' ?
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
            value={formik.values.time}            
          />
            :<input
            className={`${styles.input} ${
              formik.touched.time && formik.errors.time
              ? styles.errorInput
              :""
                
            }`}
            id='time'
            name="time"
            type="text"
            placeholder="введіть"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.time}            
          />
            } 
            
            {formik.touched.time && formik.errors.time ? (
              <div className={styles.errorLabel}>{formik.errors.time}</div>
            ) : null}
            {isShowTime &&
             
              <Time onClick={formik.setFieldValue } />
            }
          </div>
          <div className={styles.box5}>   
            <label className={styles.lable} htmlFor="location">
              {lang === 'en' 
                ?<p>Location</p> 
                :<p>Місце події</p>
              }                              
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
            {lang === 'en'?
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
            :<input
            className={`${styles.input} ${
              formik.touched.location && formik.errors.location
              ? styles.errorInput
              :""                
            }`}
            id='location'
            name="location"
            type="text"
            placeholder="введіть"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.location}
          />
          }             
            {formik.touched.location && formik.errors.location ? (
              <div className={styles.errorLabel}>{formik.errors.location}</div>
            ) : null}
          </div>
          <div className={styles.box6}>
            <label className={styles.lable} htmlFor="category"> 
              {lang === 'en' 
                ?<p>Сategory</p>  
                :<p>Категорія</p>
              }              
            </label>
            <button type="button" onClick={()=>hendleShow('isShowListCategory')} className={styles.crossButton} > 
              {!isShowListCategory && <IconСhoice aria-label={'icon-choice'} />}
              {isShowListCategory && <IconСhoiceUp aria-label={'icon-choice'} />}
            </button>
            {lang === 'en'?
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
              : <input
                readOnly 
                className={`${styles.input} ${
                  formik.touched.category && formik.errors.category
                  ? styles.errorInput
                  :""                
                }`}
                id="category"
                name='category'
                placeholder="введіть"
                onBlur={formik.handleBlur}
                onChange={onChangeInput}
                value={formik.values.category}
              />
            }            
            {isShowListCategory && 
              <SelectList onSelect={onSelect} id={"category"} data={lang === 'en'?listCategoryEn:listCategoryUa} />
            }            
            {formik.touched.category && formik.errors.category ? (
              <div className={styles.errorLabel}>{formik.errors.category}</div>
            ) : null}
          </div>
          <div className={styles.box7}>
            <label className={styles.lablePicture} htmlFor="picture">
              {lang === 'en' 
                ?<p>Add picture</p>   
                :<p>Оберіть зображення</p>
              }              
            </label>
            <button  type="button" className={styles.crossButton} >                
              <IconCross
                className={styles.iconPicture}
                aria-label={'icon-cross'}
              />
            </button> 
            {lang === 'en'?
             <input
             className={styles.input}
             id="picture"
             name="picture"
             type="text"
             onBlur={formik.handleBlur}
             placeholder="input" disabled
           />
            :
            <input
              className={styles.input}
              id="picture"
              name="picture"
              type="text"
              onBlur={formik.handleBlur}
              placeholder="введіть"
              disabled
            />
            }            
          </div>
          <div className={styles.box8}>
            <label className={styles.lable} htmlFor="priority" > 
              {lang === 'en' 
                ? <p>Priority</p>   
                :<p>Пріоритет</p>
              }              
            </label> 
            <button type="button" onClick={()=>hendleShow('isShowListPriority')} className={styles.crossButton} > 
              {!isShowListPriority && <IconСhoice aria-label={'icon-choice'} />}
              {isShowListPriority && <IconСhoiceUp aria-label={'icon-choice'} />}
            </button>
            {lang === 'en'?
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
              :<input
                readOnly 
                className={`${styles.input} ${
                  formik.touched.priority && formik.errors.priority
                  ? styles.errorInput
                  :""                
                }`}
                id="priority"
                name='priority'
                placeholder="введіть"
                onBlur={formik.handleBlur}
                onChange={onChangeInput}
                value={formik.values.priority}
              />
            }            
            {isShowListPriority &&  <SelectList onSelect={onSelect} id={"priority"} data={lang === 'en'?listPriorityEn:listPriorityUa}/>}                           
            {formik.touched.priority && formik.errors.priority ? (
              <div className={styles.errorLabel}>{formik.errors.priority}</div>
            ) : null} 
          </div>        
        </div>           
        <div className={styles.boxButton}>
          {lang === 'en'?
          <button className={styles.buttonSubmit} type="submit" disabled={!formik.isValid || !formik.dirty}>Add event</button>
          :<button className={styles.buttonSubmit} type="submit" disabled={!formik.isValid || !formik.dirty}>Додати подію</button>
          }

                 
        </div>
      </form>   
  ) 
};
 
export default AddForm;
 
AddForm.propTypes = {   
  addEvent: PropTypes.func,  
}