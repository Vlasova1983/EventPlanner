import {useState} from 'react';
import { PropTypes } from 'prop-types';
import { onClear } from '../../utils/helpers/clear/onClear';
import { useLang } from '../../hooks/useLang';
import { ReactComponent as IconSearch } from './search.svg';
import { ReactComponent as IconDelete } from './cross-small.svg';
import styles from '../SearchForm/SearchForm.module.css';

const SearchForm = ({ onFilter }) => {
    const {lang} = useLang();
    const [value,setIsValue] = useState('');    
    
    const  handleChange = event => {    
        const { value}  = event.target;       
        setIsValue(value);
        onFilter(value.toLowerCase());
    };
        
    const handleSubmit = event => {       
        event.preventDefault();
        onFilter('');                       
        setIsValue('');                      
    };     

    return (       
        <form className={styles.form} onSubmit={handleSubmit}>                    
            <button  type="submit" className={styles.searchButton} >                
                <IconSearch aria-label={'icon-search'}/>
            </button>
            {lang === 'en' ?
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"                    
                    value={value}
                    placeholder="Search event title"
                    onChange={handleChange}
                    id='search'
                /> :
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"                  
                    value={value}
                    placeholder="Введіть назву події..."
                    onChange={handleChange}
                    id='search'
                />
            }
            <button  type="button" onClick={onClear} className={styles.deleteButton} id='search'>                
                <IconDelete aria-label={'icon-cross'} id='search'/>
            </button>
        </form>               
    ) 
}

export default SearchForm;

SearchForm.propTypes = {   
    onFilter:PropTypes.func
}