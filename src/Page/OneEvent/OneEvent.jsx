import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OneCard from '../../components/OneCard/OneCard';
import BackButton from '../../components/BackButton/BackButton';
import styles from '../OneEvent/OneEvent.module.css';

const OneEvent = () => {
    const { eventId } = useParams();
    const data = useSelector(state => state.events.data);      

    return (        
        <section className={styles.conteiner}>
            <BackButton/>                
            <div className={styles.conteinerPage}>                
                <OneCard event={data.filter((item)=>item.id.includes(eventId))}/>                   
            </div>
        </section>                
    );
};

export default OneEvent;
