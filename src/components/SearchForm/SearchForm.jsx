import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInFilter } from '../../redux/events/events.slice';
import { useLang } from '../../hooks/useLang';
import { ReactComponent as IconSearch } from './search.svg';
import { ReactComponent as IconDelete } from './cross-small.svg';
import styles from '../SearchForm/SearchForm.module.css';

const SearchForm = () => {
    const dispatch = useDispatch();
    const { lang } = useLang();
    const filter=useSelector(state => state.events.filter);    

    useEffect(() => {    
        localStorage.setItem('filter', JSON.stringify(filter));        
    }, [filter]);
   

    return (       
        <form className={styles.form}>                    
            <button  type="submit" className={styles.searchButton} >                
                <IconSearch className={styles.icon} aria-label={'icon-search'}/>
            </button>
            {lang === 'en' ?
                <input                   
                    className={styles.input}
                    type="text"
                    autoComplete="off"                    
                    value={filter}
                    placeholder="Search event title"
                    onChange={(e) => dispatch(setInFilter(e.target.value.toLowerCase()))}
                    id='search'
                /> :
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"                  
                    value={filter}
                    placeholder="Введіть назву події..."
                    onChange={(e)=>dispatch(setInFilter(e.target.value.toLowerCase()))}
                    id='search'
                />
            }
            <button type="button"
                onClick={() => {
                    dispatch(setInFilter(''));                   
                }}
                className={styles.deleteButton} id='search'>                
                <IconDelete className={styles.icon} aria-label={'icon-cross'} id='search'/>
            </button>
        </form>               
    ) 
}

export default SearchForm;

