import { useParams} from 'react-router-dom';
import { PropTypes } from 'prop-types';
import OneCard from '../../components/OneCard/OneCard';
import BackButton from '../../components/BackButton/BackButton';
import styles from '../OneEvent/OneEvent.module.css';


const OneEvent= ({events, onDelete,onBack}) => {
    const { eventId } = useParams();    
    const event= events.filter((item)=>item.id.includes(eventId))    

    return (        
        <section className={styles.conteiner}>
            <BackButton onBack={onBack} />                
            <div className={styles.conteinerPage}>                
                <OneCard event={event} onDelete={ onDelete } />                   
            </div>
        </section>                
    );
};

export default OneEvent;
OneEvent.propTypes = {       
    event: PropTypes.object,
    onDelete: PropTypes.func,
    onBack:PropTypes.func
}