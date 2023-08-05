import styles  from '../FilterButton/FilterButton.module.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiFilterOutline } from '@mdi/js';

const FilterButton=()=>{
    return (       
        <Link  className={styles.sortButton} to="event">           
            <p className={styles.sortButtonText}>Busines</p>
            <Icon className={styles.iconButton} path={mdiFilterOutline} size={1} />
        </Link>              
    )
}
export default FilterButton;