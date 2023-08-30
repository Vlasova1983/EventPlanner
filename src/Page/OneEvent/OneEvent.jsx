import { useParams } from 'react-router-dom';
import { useEvent } from '../../hooks/useEvent';
import OneCard from '../../components/OneCard/OneCard';
import BackButton from '../../components/BackButton/BackButton';
import styles from '../OneEvent/OneEvent.module.css';


const OneEvent = () => {
    const { events} = useEvent();
    const { eventId } = useParams();  

    return (        
        <section className={styles.conteiner}>
            <BackButton/>                
            <div className={styles.conteinerPage}>                
                <OneCard event={events.filter((item)=>item.id.includes(eventId))}/>                   
            </div>
        </section>                
    );
};

export default OneEvent;
