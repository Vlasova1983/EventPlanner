import styles from './AddEvent.module.css';
import { PropTypes } from 'prop-types';
import BackButton from '../../components/BackButton/BackButton';
import AddForm from '../../components/AddForm/AddForm';


const AddEvent = ({ addEvent}) => {    
    return (
       <div className={styles.conteiner}> 
            <BackButton/> 
            <div className={styles.conteinerPage}>                
                <div>
                    <h2  className={styles.title}>Create new event</h2>                        
                    <div className={styles.card}>
                       <AddForm  addEvent={addEvent}/> 
                    </div>
                </div>
            </div>
       </div>         
    );   
}
 
export default AddEvent;

AddEvent.propTypes = {   
    addEvent:PropTypes.func
}
