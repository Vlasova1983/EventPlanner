import styles  from '../FilterButton/FilterButton.module.css';

import Icon from '@mdi/react';
import { mdiFilterOutline } from '@mdi/js';

const FilterButton=()=>{
    return (       
        <button  className={styles.sortButton}>           
            <p className={styles.sortButtonText}>Busines</p>
            <Icon className={styles.iconButton} path={mdiFilterOutline} size={1} />
        </button>              
    )
}
export default FilterButton;