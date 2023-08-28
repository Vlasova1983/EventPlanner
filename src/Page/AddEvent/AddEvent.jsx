import { PropTypes } from 'prop-types';
import { useLang } from '../../hooks/useLang';
import BackButton from '../../components/BackButton/BackButton';
import AddForm from '../../components/AddForm/AddForm';
import styles from './AddEvent.module.css';


const AddEvent = ({ addEvent }) => {  
    const { lang } = useLang();    

    return (
       <section className={styles.conteiner}> 
            <BackButton/> 
            <div className={styles.conteinerPage}>                
                <div>
                    {lang === 'en' ?
                        <h2 className={styles.title}>Create new event</h2> :
                        <h2 className={styles.title}>Додати нову подію</h2> 
                    }    
                    <div className={styles.card}>
                        <AddForm  addEvent={addEvent}/>                      
                    </div>
                </div>
            </div>
       </section>         
    );   
}
 
export default AddEvent;

AddEvent.propTypes = {   
    addEvent:PropTypes.func
}
