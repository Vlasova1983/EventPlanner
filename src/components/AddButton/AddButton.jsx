import styles  from '../AddButton/Addbutton.module.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';


const AddButton=()=>{
    return (       
        <Link  className={styles.addButton} to="event">                    
            <Icon path={mdiPlus} size={1}  className={styles.iconButton} />
            <p className={styles.addButtonText}> Add new event</p>
        </Link>              
    )
}
export default AddButton;