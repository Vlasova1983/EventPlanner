import styles  from '../SortButton/SortButton.module.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiSortDescending } from '@mdi/js';


const SortButton=()=>{
    return (       
        <Link  className={styles.sortButton} to="event">           
            <p className={styles.sortButtonText}> Sort by</p>
            <Icon className={styles.iconButton} path={mdiSortDescending} size={1} />
        </Link>              
    )
}
export default SortButton;