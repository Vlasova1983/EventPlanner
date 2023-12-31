
import { useLang } from '../../hooks/useLang';
import BackButton from "../../components/BackButton/BackButton";
import EditForm from '../../components/EditForm/EditForm';
import styles from "./EditEvent.module.css";

const EditEvent = () => {    
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
                        <EditForm/> 
                    </div>
                </div>
            </div>
        </section>        
    )
}
export default EditEvent;

