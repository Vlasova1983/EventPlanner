import styles  from '../SearchForm/SearchForm.module.css';
import {useState} from 'react';
import { useSearchParams} from 'react-router-dom';

const SearchForm = () => {
    const [value,setIsValue] = useState('');
    const [searchParams, setSearchParams]=useSearchParams(); 
    
    const  handleChange = event => {    
        const { value}  = event.target;       
        setIsValue(value);              
    };

    const handleSubmit = event =>{ 
        event.preventDefault();
        setSearchParams({quary:value})                        
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
                placeholder="Search by keywords"
                onChange={handleChange} 
            />                    
        </form>               
    ) 
}

export default SearchForm;