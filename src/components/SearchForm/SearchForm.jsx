import { useEffect} from 'react';
import { useLang } from '../../hooks/useLang';
import { useFilter } from '../../hooks/useFilter';
import { ReactComponent as IconSearch } from './search.svg';
import { ReactComponent as IconDelete } from './cross-small.svg';
import styles from '../SearchForm/SearchForm.module.css';

const SearchForm = () => {
    const { lang } = useLang();
    const { filter, setInFilter } = useFilter();

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
                    onChange={(e) => {setInFilter(e.target.value.toLowerCase())}}
                    id='search'
                /> :
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"                  
                    value={filter}
                    placeholder="Введіть назву події..."
                    onChange={(e)=>setInFilter(e.target.value.toLowerCase())}
                    id='search'
                />
            }
            <button type="button"
                onClick={() => {
                    setInFilter('');                   
                    window.location.reload();
                }}
                className={styles.deleteButton} id='search'>                
                <IconDelete className={styles.icon} aria-label={'icon-cross'} id='search'/>
            </button>
        </form>               
    ) 
}

export default SearchForm;

