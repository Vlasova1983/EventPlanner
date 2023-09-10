import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {usePaginator} from '../../hooks/usePaginator';
import { setInActivePage } from '../../redux/events/events.slice';
// import { makePaginatorArray } from '../../utils/helpers/listPagination/makePaginatorArray ';
// import { elementOfPage } from '../../data/constants';
import { ReactComponent as IconLeft } from "./chevron left.svg";
import { ReactComponent as IconRight } from "./chevron right.svg";
import { ReactComponent as IconSquare } from "./square.svg";
import styles from './Pagination.module.css';
    
const Pagination = () => {
    const dispatch = useDispatch();
    const [isShow, setInIsShow] = useState(true);    
    const isActivPage = useSelector(state => state.events.isActivPage); 
    const filter=useSelector(state => state.events.filter);
    const data = useSelector(state => state.events.data);
    const {arrayPage}=usePaginator();
    console.log(arrayPage)
    const [arrayPageNew, setInArrayPage] = useState(() => {    
        return JSON.parse(localStorage.getItem('paginator'))|| arrayPage ;
    });

    const filterEvents = data.filter((event) => event.title.toLowerCase().includes(filter));
    // const arrayPage = makePaginatorArray(Math.ceil(filterEvents.length / elementOfPage));         

    useEffect(() => {    
        localStorage.setItem('paginator', JSON.stringify(arrayPage))
        localStorage.setItem('page', JSON.stringify(isActivPage));
    }, [arrayPage,isActivPage]);
  
    const hendlePageRight = () => {        
        const lastElement = arrayPage.slice(arrayPage.length - 1);
        const firstElement = arrayPage.slice(0, 1);       
        const noFirstElement = arrayPage.slice(1);
        const noLastElement=noFirstElement.slice(0, noFirstElement.length - 1)
        if (arrayPage[2]=== lastElement[0]-2) {
            setInIsShow(false);
        }
        const newArray = [...noLastElement, ...firstElement, ...lastElement];
        

        if (firstElement[0]!==lastElement[0]-3) {
            setInArrayPage(newArray);           
        }              
    }

    const hendlePageLeft = () => {
        setInIsShow(true);
        const lastElement = arrayPage.slice(arrayPage.length - 1);        
        const noLastElement = arrayPage.slice(0, arrayPage.length - 1);
        const penultimateElement = noLastElement.slice(noLastElement.length - 1);
        const noLastTwoElement = noLastElement.slice(0, noLastElement.length - 1);
        
        const newArray = [...penultimateElement, ...noLastTwoElement, ...lastElement];
        if (penultimateElement[0]!==lastElement[0]-1) {
            setInArrayPage(newArray)
        }        
    }

    return (
        <>
            {arrayPage.length > 4 &&
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
                        onClick={(e) => {
                            dispatch(setInActivePage(Number(e.target.id)));                             
                        }}
                    >{event}
                    </button>))}
                {isShow && <div>
                    <IconSquare />
                </div>}
                <button
                    className={`${styles.button} ${isActivPage === arrayPage[arrayPage.length - 1]
                        ? styles.activButton
                        : ''
                        }`}
                    type='button'
                    id={arrayPage[arrayPage.length - 1]}
                    onClick={(e) => {
                        dispatch(setInActivePage(Number(e.target.id)));                        
                    }}
                >
                    {arrayPage[arrayPage.length - 1]}
                </button>
                <button type='button' onClick={hendlePageRight} className={styles.button}>
                    <IconRight />
                </button>
                </div>
            }
            {arrayPage.length <= 4 &&
                <div className={styles.conteiner}>               
                {arrayPage.map(event => (
                    <button type='button'
                        className={`${styles.button} ${isActivPage === event
                            ? styles.activButton
                            : ''
                            }`}
                        key={`#${event}`}
                        id={event}
                        onClick={(e) => {
                            dispatch(setInActivePage(Number(e.target.id)));                           
                        }}
                    >{event}
                    </button>))}               
                </div>
            }
        
        
        </>

                      
    )
}
export default Pagination;

