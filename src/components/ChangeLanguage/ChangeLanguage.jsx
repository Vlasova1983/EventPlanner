import styles  from '../ChangeLanguage/ChangeLanguage.module.css';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';


const ChangeLanguage=()=>{
    return (       
        <button  className={styles.ChangeLanguageButton} to="event"> 
            <p className={styles.addButtonText}>UK</p>              
            <Icon path={mdiChevronDown} size={1} color={'#3F3F3F'} />            
        </button>              
    )
}
export default ChangeLanguage;