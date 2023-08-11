import styles  from '../AddButton/Addbutton.module.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { useLang } from '../../hooks/useLang';

const AddButton = () => {
    const { lang} = useLang();

    return (       
        <Link  className={styles.addButton} to="event">                    
            <Icon path={mdiPlus} size={1} className={styles.iconButton} />
            {lang === 'en' ?
                <p className={styles.addButtonText}> Add new event</p> :
                <p className={styles.addButtonText}> Додати нову подію </p>
            }
        </Link>              
    )
}
export default AddButton;