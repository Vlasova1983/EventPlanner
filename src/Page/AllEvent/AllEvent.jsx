import { useSelector } from 'react-redux';
import { useLang } from '../../hooks/useLang';
import { makePaginatorArray } from '../../utils/helpers/listPagination/makePaginatorArray ';
import { elementOfPage } from '../../data/constants';
import AddButton from "../../components/AddButton/AddButton";
import SortButton from "../../components/SortButton/SortButton";
import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Card/Card';
// import FilterButton from "../../components/FilterButton/FilterButton";
import styles from './AllEvent.module.css';

const AllEvent = () => {    
    const { lang } = useLang();
    const filter = useSelector(state => state.events.filter);
    const data = useSelector(state => state.events.data);
    const isActivPage = useSelector(state => state.events.isActivPage); 
    
    const  getFilterEvents =()=> {    
        return  data.filter(( event)=> event.title.toLowerCase().includes(filter));
    };   
    const filterEvents = getFilterEvents();
   
    const arrayPage = makePaginatorArray(Math.ceil(filterEvents.length / elementOfPage));     

    const eventsOfPage = () => {    
        const array = [];    
        for (let i = 0; i < filterEvents.length; i++) {
        if (i >= elementOfPage * (isActivPage - 1) && i < elementOfPage * isActivPage) {
            array.push(filterEvents[i])
        }
        };
        localStorage.setItem('paginator', JSON.stringify(arrayPage))
        return array
    };

    return (
        <>
            <section className={styles.conteiner}>
                <div className={styles.conteinerTitel}>
                    <div className={styles.conteinerButton}> 
                        {/* <FilterButton /> */}
                        <SortButton  />
                        <AddButton/>               
                    </div>
                    {lang === 'en' ?
                        <h2 className={styles.titel} >My events</h2> :
                        <h2 className={styles.titel} >Мої події</h2>
                    }
                </div>                        
                <div className={styles.wrapper}>
                    {eventsOfPage().map (event=>(
                    <Card item={event}   key={event.id}/>))}   
                </div>
                {arrayPage.length!==0 && <div className={styles.conteinerPagination}>
                    <Pagination arrayPage={arrayPage}  />
                </div>}
            </section>            
        </>       
    )
};

export default AllEvent;

