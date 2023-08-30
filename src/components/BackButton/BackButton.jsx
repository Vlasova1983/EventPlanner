import { useParams, useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { useLang } from '../../hooks/useLang';
import { useBack } from '../../hooks/useBack';
import { getRandomID } from '../../utils/helpers/createId/getRandomID';
import styles from './BackButton.module.css';

const BackButton = () => {
    const { lang } = useLang();
    const { setInJumpBack } = useBack();
    const { eventId } = useParams();
    const navigate = useNavigate();
    const currentUrl = window.location.pathname;

    const goBack = () => {        
        if (currentUrl === `/event/${eventId}`) {
           setInJumpBack( getRandomID())
            navigate(-1);
        } else {
            navigate(-1);            
        }        
    }

    return (       
        <button onClick={goBack} type="button" className={styles.backButton}>
            <Icon path={mdiArrowLeft} size={1} />
            {lang === 'en' ?
                <p className={styles.backButtonText}>Back</p> :
                <p className={styles.backButtonText}>Назад</p>
            }               
        </button>           
    )
}
export default BackButton;

