import { useState} from 'react';
import { PropTypes } from 'prop-types';
import { useLang } from '../../hooks/useLang';
import { ReactComponent as IconSearch } from './search.svg';
import { ReactComponent as IconDelete } from './cross-small.svg';
import styles from '../SearchForm/SearchForm.module.css';

const SearchForm = ({ onFilter, value }) => {
    const[test,setInValue]=useState(() => {
    return JSON.parse(localStorage.getItem('filter')) || value;
    });
    const { lang } = useLang();
   
    return (       
        <form className={styles.form}
            onSubmit={() => {
                onFilter(test);
                         
            }}
        >                    
            <button  type="submit" className={styles.searchButton} >                
                <IconSearch className={styles.icon} aria-label={'icon-search'}/>
            </button>
            {lang === 'en' ?
                <input                   
                    className={styles.input}
                    type="text"
                    autoComplete="off"                    
                    value={test}
                    placeholder="Search event title"
                    onChange={(e) => {
                        setInValue(e.target.value.toLowerCase())                        
                    }}
                    id='search'
                /> :
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"                  
                    value={test}
                    placeholder="Введіть назву події..."
                    onChange={(e)=>setInValue(e.target.value.toLowerCase())}
                    id='search'
                />
            }
            <button type="button" onClick={() => {
                onFilter('');
                setInValue('');
                window.location.reload()
            }
            } className={styles.deleteButton} id='search'>                
                <IconDelete className={styles.icon} aria-label={'icon-cross'} id='search'/>
            </button>
        </form>               
    ) 
}

export default SearchForm;

SearchForm.propTypes = {   
    onFilter: PropTypes.func,
    value:PropTypes.string
}