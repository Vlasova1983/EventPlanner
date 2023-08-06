import styles  from '../SortButton/SortButton.module.css';
import Icon from '@mdi/react';
import { mdiSortDescending } from '@mdi/js';


const SortButton=()=>{
    return (       
        <button  className={styles.sortButton} >           
            <p className={styles.sortButtonText}> Sort by</p>
            <Icon className={styles.iconButton} path={mdiSortDescending} size={1} />
        </button>              
    )
}
export default SortButton;