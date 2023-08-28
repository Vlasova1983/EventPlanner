import { useState,useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { ReactComponent as IconLeft } from "./chevron left.svg";
import { ReactComponent as IconRight } from "./chevron right.svg";
import { ReactComponent as IconSquare } from "./square.svg";
import styles from '../Pagination/Pagination.module.css';
    
const Pagination = ({ setInActivPage, arrayPage, isActivPage }) => {
    const [arrayPageNew, setInArrayPage] = useState(() => {    
        return JSON.parse(localStorage.getItem('paginator'))|| arrayPage ;
    });
    const [isShow, setInIsShow] = useState(true);

    useEffect(() => {    
        localStorage.setItem('paginator', JSON.stringify(arrayPageNew));    
    }, [arrayPageNew]);
  
    const hendlePageRight = () => {        
        const lastElement = arrayPageNew.slice(arrayPageNew.length - 1);
        const firstElement = arrayPageNew.slice(0, 1);       
        const noFirstElement = arrayPageNew.slice(1);
        const noLastElement=noFirstElement.slice(0, noFirstElement.length - 1)
        if (arrayPageNew[2]=== lastElement[0]-2) {
            setInIsShow(false);
        }
        const newArray = [...noLastElement, ...firstElement, ...lastElement];
        

        if (firstElement[0]!==lastElement[0]-3) {
            setInArrayPage(newArray);           
        }              
    }

    const hendlePageLeft = () => {
        setInIsShow(true);
        const lastElement = arrayPageNew.slice(arrayPageNew.length - 1);        
        const noLastElement = arrayPageNew.slice(0, arrayPageNew.length - 1);
        const penultimateElement = noLastElement.slice(noLastElement.length - 1);
        const noLastTwoElement = noLastElement.slice(0, noLastElement.length - 1);
        
        const newArray = [...penultimateElement, ...noLastTwoElement, ...lastElement];
        if (penultimateElement[0]!==lastElement[0]-1) {
            setInArrayPage(newArray)
        }        
    }

    return (
        <>
            {arrayPageNew.length > 4 &&
                <div className={styles.conteiner}>
                <button onClick={hendlePageLeft} type='button' className={styles.button}>
                    <IconLeft />
                </button>
                {!isShow && <div>
                    <IconSquare />
                </div>}
                {arrayPageNew.slice(0, 3).map(event => (
                    <button type='button'
                        className={`${styles.button} ${isActivPage === event
                            ? styles.activButton
                            : ''
                            }`}
                        key={`#${event}`}
                        id={event}
                        onClick={(e) => setInActivPage(Number(e.target.id))}
                    >{event}
                    </button>))}
                {isShow && <div>
                    <IconSquare />
                </div>}
                <button
                    className={`${styles.button} ${isActivPage === arrayPageNew[arrayPageNew.length - 1]
                        ? styles.activButton
                        : ''
                        }`}
                    type='button'
                    id={arrayPageNew[arrayPageNew.length - 1]}
                    onClick={(e) => setInActivPage(Number(e.target.id))}
                >
                    {arrayPageNew[arrayPageNew.length - 1]}
                </button>
                <button type='button' onClick={hendlePageRight} className={styles.button}>
                    <IconRight />
                </button>
                </div>
            }
            {arrayPageNew.length <= 4 &&
                <div className={styles.conteiner}>               
                
                {arrayPageNew.map(event => (
                    <button type='button'
                        className={`${styles.button} ${isActivPage === event
                            ? styles.activButton
                            : ''
                            }`}
                        key={`#${event}`}
                        id={event}
                        onClick={(e) => setInActivPage(Number(e.target.id))}
                    >{event}
                    </button>))}            
                
                </div>
            }
        
        
        </>

                      
    )
}
export default Pagination;

Pagination.propTypes = {   
    setInActivPage: PropTypes.func, 
    arrayPage: PropTypes.array,
    isActivPage:PropTypes.number
}