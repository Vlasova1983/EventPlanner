import Icon from '@mdi/react';
import { mdiFilterOutline } from '@mdi/js';
import { useLang } from '../../hooks/useLang';
import styles from '../FilterButton/FilterButton.module.css';

const FilterButton = () => {
    const { lang } = useLang();
    
    const onClickFilter = (evt) => {             
        const { name } = evt.target;
        console.log(name);           
    }

    return ( 
        <div className={styles.dropdown}>
            <button className={styles.filterButton}  type="button">
                {lang === 'en' ?
                    <p className={styles.filterButtonText}>Category</p> :
                    <p className={styles.filterButtonText}>Категорія</p>
                }
                <Icon className={styles.iconButton} path={mdiFilterOutline} size={1} aria-label={'icon-filter'}/>
            </button>
            {lang === 'en' ?
                <div className={styles.dropdownContent}>
                    <button onClick={onClickFilter} name={'Art'}>Art</button>
                    <button onClick={onClickFilter} name={'Music'}>Music</button>
                    <button onClick={onClickFilter} name={'Business'}>Business</button>
                    <button onClick={onClickFilter} name={'Conference'}>Conference</button>
                    <button onClick={onClickFilter} name={'Workshop'}>Workshop</button>
                    <button onClick={onClickFilter} name={'Party'}>Party</button>
                    <button onClick={onClickFilter} name={'Sport'}>Sport</button>
                    <button onClick={onClickFilter} name={'All'}>All</button>
                </div> :
                <div className={styles.dropdownContent}>
                    <button onClick={onClickFilter} name={'Art'}>Мистецтво</button>
                    <button onClick={onClickFilter} name={'Music'}>Музика</button>
                    <button onClick={onClickFilter} name={'Business'}>Бізнес</button>
                    <button onClick={onClickFilter} name={'Conference'}>Конференції</button>
                    <button onClick={onClickFilter} name={'Workshop'}>Майстерня</button>
                    <button onClick={onClickFilter} name={'Party'}>Вечірка</button>
                    <button onClick={onClickFilter} name={'Sport'}>Спорт</button>
                    <button onClick={onClickFilter} name={'All'}>Всі категорії</button>
                </div>
            }
        </div>   
    )
}
export default FilterButton;

