import { PropTypes } from 'prop-types';
import { useLang } from '../../hooks/useLang';
import { ReactComponent as SortIcon } from './sort.svg';
import { ReactComponent as UpArrow } from './arrow-up-small.svg';
import { ReactComponent as DownArrow } from './arrow-down-small.svg'
import styles from '../SortButton/SortButton.module.css';

const SortButton = ({ onSort }) => {
    const { lang } = useLang();
    const onClickSort = (evt) => {
        evt.preventDefault(); 
        const { name, id } = evt.target;       
        onSort({name, id})
    }
    return ( 
        <>               
            <div className={styles.dropdown}>
                <button className={styles.sortButton}  type="button">
                    {lang === 'en' ?
                        <p className={styles.sortButtonText}> Sort by</p> :
                        <p className={styles.sortButtonText}> Сортувати</p>
                    }
                    <SortIcon className={styles.sortIcon} aria-label={'icon-sort'}/>
                </button>
                {lang === 'en' ?
                    <div className={styles.dropdownContent}>
                        <button onClick={onClickSort}  type="button" name='title' id='up'>by name
                            <UpArrow aria-label={'icon-arrow-up'}/>
                        </button>
                        <button onClick={onClickSort}  type="button" name='title' id='down'>by name
                            <DownArrow aria-label={'icon-arrow-down'}/>
                        </button>
                        <button onClick={onClickSort}  type="button" name='date' id='up'>by data
                            <UpArrow aria-label={'icon-arrow-up'}/>
                        </button>
                        <button onClick={onClickSort}  type="button" name='date' id='down'>by data
                            <DownArrow aria-label={'icon-arrow-down'}/>
                        </button>
                        <button onClick={onClickSort}  type="button" name='priority' id='up'>by priority
                            <UpArrow aria-label={'icon-arrow-up'}/>
                        </button>
                        <button onClick={onClickSort}  type="button" name='priority' id='down'>by priority
                            <DownArrow aria-label={'icon-arrow-down'} />
                        </button>
                    </div> :
                    <div className={styles.dropdownContent}>
                        <button onClick={onClickSort}  type="button" name='title' id='up'>за ім'ям
                            <UpArrow />
                        </button>
                        <button onClick={onClickSort}  type="button" name='title' id='down'>за ім'ям
                            <DownArrow />
                        </button>
                        <button onClick={onClickSort}  type="button" name='date' id='up'>за датою
                            <UpArrow />
                        </button>
                        <button onClick={onClickSort}  type="button" name='date' id='down'>за датою
                            <DownArrow />
                        </button>
                        <button onClick={onClickSort}  type="button" name='priority' id='up'>за пріорітетом
                            <UpArrow />
                        </button>
                        <button onClick={onClickSort}  type="button" name='priority' id='down'>за пріорітетом
                            <DownArrow />
                        </button>
                    </div>
                }
            </div>            
        </>       
    )
}
export default SortButton;

SortButton.propTypes = {     
    onSort:PropTypes.func
}

