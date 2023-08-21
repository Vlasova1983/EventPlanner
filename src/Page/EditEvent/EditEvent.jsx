import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useLang } from '../../hooks/useLang';
import BackButton from "../../components/BackButton/BackButton";
// import EditForm from '../../components/EditForm/EditForm';
import AddForm from '../../components/AddForm/AddForm';
import styles from "./EditEvent.module.css";

const EditEvent = ({ events, editEvent }) => {
    const { eventId } = useParams();
    const event = events.filter((item) => item.id.includes(eventId))
     const {lang} = useLang();
    return(
        <section className={styles.conteiner}>
            <BackButton />            
            <div className={styles.conteinerPage}>                
                <div>
                    {lang === 'en' ?
                        <h2 className={styles.title}>Edit event</h2> :
                        <h2 className={styles.title}>Редагувати подію</h2>
                    }    
                    <div className={styles.card}>
                        <AddForm event={event} editEvent={editEvent}/>
                        {/* <EditForm events={events} editEvent={editEvent}/>  */}
                    </div>
                </div>
            </div>
        </section>        
    )
}
export default EditEvent;

EditEvent.propTypes = {
    events: PropTypes.array,
    editEvent: PropTypes.func,   
}
