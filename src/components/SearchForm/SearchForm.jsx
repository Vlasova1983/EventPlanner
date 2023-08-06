import styles from '../SearchForm/SearchForm.module.css';
import { PropTypes } from 'prop-types';
import {useState} from 'react';


const SearchForm = ({ onFilter }) => {
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
        <form className={styles.SearchForm} onSubmit={handleSubmit}>                    
            <button  type="submit" className={styles.SearchForm_button} >
                <span className={styles.SearchForm_button_label} >Search</span>
            </button>
            <input
                className={styles.SearchForm_input}
                type="text"
                autoComplete="off"
                autoFocus
                value={value}
                placeholder="Search event title"
                onChange={handleChange} 
            />                    
        </form>               
    ) 
}

export default SearchForm;

SearchForm.propTypes = {   
    onFilter:PropTypes.func
}