import styles from "./EditEvent.module.css";
import { PropTypes } from 'prop-types';
import BackButton from "../../components/BackButton/BackButton";
import EditForm from '../../components/EditForm/EditForm';
import { useLang } from '../../hooks/useLang';

const EditEvent = ({ events, editEvent }) => {  
     const {lang} = useLang();
    return(
        <div className={styles.conteiner}>
            <BackButton />            
            <div className={styles.conteinerPage}>                
                <div>
                    {lang === 'en' ?
                        <h2 className={styles.title}>Edit event</h2> :
                        <h2 className={styles.title}>Редагувати подію</h2>
                    }    
                    <div className={styles.card}>
                        <EditForm events={events} editEvent={editEvent}/> 
                    </div>
                </div>
            </div>
        </div>        
    )
}
export default EditEvent;

EditEvent.propTypes = {
    events: PropTypes.array,
    editEvent: PropTypes.func,
   
}
