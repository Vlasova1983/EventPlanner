import { PropTypes } from 'prop-types';

import { ReactComponent as IconLeft } from "./chevron left.svg";
import { ReactComponent as IconRight } from "./chevron right.svg";
import { ReactComponent as IconSquare } from "./square.svg";

import styles from '../Pagination/Pagination.module.css';
    
const Pagination = ({setInActivPage,array,isActivPage}) => { 
    return (       
        <div className={styles.conteiner}>
            <button type='button' className={styles.button}>
                <IconLeft/>
            </button>
             {array.slice(0, 3).map (event=>(
                <button type='button' 
                    className={`${styles.button} ${isActivPage===event
                        ? styles.activButton
                        : ''                  
                    }`} 
                    key={`#${event}`}
                    id={event}
                    onClick={(e)=>setInActivPage(Number(e.target.id))}
                >{event}                    
                </button>))}
            <div>
                <IconSquare/>
            </div>
            <button 
                className={`${styles.button} ${isActivPage===array[array.length-1]
                    ? styles.activButton
                    : ''                  
                }`}
                type='button'
                id={array[array.length-1]}
                onClick={(e)=>setInActivPage(Number(e.target.id))}
            >
               {array[array.length-1]}
            </button>
            <button type='button' className={styles.button}>
                <IconRight/>
            </button>          
        </div>              
    )
}
export default Pagination;

Pagination.propTypes = {   
    setInActivPage: PropTypes.func, 
    array: PropTypes.array,
    isActivPage:PropTypes.number
}