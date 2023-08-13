import {useState} from 'react';
import { PropTypes } from 'prop-types';
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
            <button  type="submit" className={styles.search_button} >                
                <IconSearch aria-label={'icon-search'}/>
            </button>
            {lang === 'en' ?
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    value={value}
                    placeholder="Search event title"
                    onChange={handleChange}
                /> :
                <input
                    className={styles.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    value={value}
                    placeholder="Введіть назву події..."
                    onChange={handleChange}
                />
            }
            <button  type="button" className={styles.delete_button} >                
                <IconDelete aria-label={'icon-delete'}/>
            </button>
        </form>               
    ) 
}

export default SearchForm;

SearchForm.propTypes = {   
    onFilter:PropTypes.func
}