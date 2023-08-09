import styles  from '../SortButton/SortButton.module.css';
import { ReactComponent as FilterIcon } from './filters.svg';
import { ReactComponent as UpArrow } from './arrow-up-small.svg';
import { ReactComponent as DownArrow } from './arrow-down-small.svg'
import { PropTypes } from 'prop-types';

const SortButton = ({ onSort }) => {

    const onClickSort = (evt) => {
        evt.preventDefault(); 
        const { name, id } = evt.target;       
        onSort({name, id})
    }
    return ( 
        <>               
            <div className={styles.dropdown}>
                    <button className={styles.sortButton} >
                        <p className={styles.sortButtonText}> Sort by</p>
                        <FilterIcon className={styles.sortIcon} />
                    </button>
                <div className={styles.dropdownContent}>
                    <button onClick={onClickSort} name='title' id='up'>by name
                        <UpArrow/>
                    </button>
                    <button onClick={onClickSort} name='title' id='down'>by name
                        <DownArrow/>
                    </button>
                    <button onClick={onClickSort} name='date' id='up'>by data
                        <UpArrow />
                    </button>
                    <button onClick={onClickSort} name='date' id='down'>by data
                        <DownArrow/>
                    </button>
                    <button onClick={onClickSort} name='priority' id='up'>by priority
                         <UpArrow/>
                    </button>
                    <button onClick={onClickSort}  name='priority' id='down'>by priority
                        <DownArrow/>
                    </button>
                </div>
            </div>            
        </>       
    )
}
export default SortButton;

SortButton.propTypes = {     
    onSort:PropTypes.func
}

