import styles  from '../OneEvent/OneEvent.module.css';
import { PropTypes } from 'prop-types';
import { useParams} from 'react-router-dom';
import OneCard from '../../components/OneCard/OneCard';
import BackButton from '../../components/BackButton/BackButton';

const OneEvent= ({events, onDelete}) => {
    const { eventId } = useParams();    
    const event= events.filter((item)=>item.id.includes(eventId))    

    return (       
        <> 
            <div className={styles.conteiner}>
                <BackButton/>                
                <div className={styles.conteinerPage}>                
                    <OneCard event={event} onDelete={ onDelete } />                   
                </div>
            </div>
        </>          
    );
};

export default OneEvent;
OneEvent.propTypes = {       
    event: PropTypes.object,
    onDelete:PropTypes.func
}