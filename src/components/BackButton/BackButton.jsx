import styles  from './BackButton.module.css';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';

const getRandomID=()=> {
  return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const BackButton = ({ onBack }) => {
     const { eventId } = useParams();
    const navigate = useNavigate();
    const currentUrl = window.location.pathname;

    const goBack = () => {
        if (currentUrl === `/event/${eventId}`) {
           onBack( getRandomID())
            navigate(-1);
        } else {
           navigate(-1); 
        }        
    }


    return (       
        <button onClick={goBack} className={styles.backButton}>
            <Icon path={mdiArrowLeft} size={1} />
            <p className={styles.backButtonText}>Back</p>               
        </button>           
    )
}
export default BackButton;

BackButton.propTypes = {   
    onBack:PropTypes.func
}