import { PropTypes } from 'prop-types';
import styles from "./Time.module.css";


const Time = ({ onClick }) => {   
    const listHour = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const listMinute = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
    const timeOfDay = ['PM', 'AM'];    

    const onSelectTime = (e) => {  
        const { id, innerText } = e.target;       
        const arrayElement = document.getElementsByName(id);
     
        for (let i = 0; i < arrayElement.length; i++){
            arrayElement[i].style.color = '#ACA7C3';
            arrayElement[i].style.fontWeight = '400';
        }   
        
        e.target.style.color = '#3F3F3F';
        e.target.style.fontWeight = '600';
        onClick(id,`  ${innerText}`);       
    } 

    return (
        <div className={styles.box}>
            <div className={styles.line1}>1</div>            
            <div className={styles.line2}>:</div>
            <button type='button'  onClick={onSelectTime} id={'time'}  className={styles.items}>
                <div className={styles.item_box}>
                    {listHour.map (event=>(
                        <div   id="hour" name="hour" className={styles.item} key={event}>{event}</div>))} 
                </div>            
                <div className={styles.item_box}>
                    {listMinute.map (event=>(
                        <div id='minutes' name='minutes' className={styles.item} key={event}>{event }</div>))} 
                </div>                
                <div className={styles.item_box}>
                    {timeOfDay.map (event=>(
                        <div  id='timeOfDay' name='timeOfDay' className={styles.item} key={event}>{event }</div>))} 
                </div>               
            </button>            
        </div>
    )
}

export default Time;

Time.propTypes = {   
    onTest: PropTypes.func,
    name:PropTypes.string
}
