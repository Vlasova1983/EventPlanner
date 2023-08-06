import styles  from './BackButton.module.css';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();
    const goBack= ()=>navigate(-1);   
  
    return (       
        <button onClick={goBack} className={styles.backButton}>
            <Icon path={mdiArrowLeft} size={1} />
            <p className={styles.backButtonText}>Back</p>               
        </button>           
    )
}
export default BackButton;