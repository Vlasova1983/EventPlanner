import styles  from '../FilterButton/FilterButton.module.css';
import { PropTypes } from 'prop-types';
import Icon from '@mdi/react';
import { mdiFilterOutline } from '@mdi/js';

const FilterButton = ({onFilter}) => {

    const onClickFilter = (evt) => {
        evt.preventDefault();       
        const { name } = evt.target; 
        onFilter(name);       
    }


    return ( 
        <div className={styles.dropdown}>
            <button className={styles.sortButton} >
                <p className={styles.sortButtonText}>Category</p>
                <Icon className={styles.iconButton} path={mdiFilterOutline} size={1} />
            </button>
             <div className={styles.dropdownContent}>
                <button onClick={onClickFilter} name={'Art'}>Art</button>
                <button onClick={onClickFilter} name={'Music'}>Music</button>
                <button onClick={onClickFilter} name={'Business'}>Business</button>
                <button onClick={onClickFilter} name={'Conference'}>Conference</button>
                <button onClick={onClickFilter} name={'Workshop'}>Workshop</button>
                <button onClick={onClickFilter} name={'Party'}>Party</button>
                <button onClick={onClickFilter} name={'Sport'}>Sport</button>
                <button onClick={onClickFilter} name={'All'}>All</button>  
            </div>
        </div>   
    )
}
export default FilterButton;

FilterButton.propTypes = {     
    onFilter:PropTypes.func
}
