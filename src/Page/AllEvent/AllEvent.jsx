import { PropTypes } from 'prop-types';
import { useLang } from '../../hooks/useLang';
import Card from '../../components/Card/Card';
import AddButton from "../../components/AddButton/AddButton";
import SortButton from "../../components/SortButton/SortButton";
import FilterButton from "../../components/FilterButton/FilterButton";
import styles from '../AllEvent/AllEvent.module.css';

const AllEvent = ({ events, onSort, onFilter }) => { 
     const {lang} = useLang();
    return (
        <section className={styles.conteiner}>
            <div className={styles.conteinerTitel}>
                <div className={styles.conteinerButton}> 
                    <FilterButton onFilter={ onFilter} />
                    <SortButton onSort={onSort} />
                    <AddButton/>               
                </div>
                {lang === 'en' ?
                    <h2 className={styles.titel} >My events</h2> :
                    <h2 className={styles.titel} >Мої події</h2>
                }
            </div>                        
            <div className={styles.wrapper}>
                {events.map (event=>(
                <Card item={event}   key={event.id}/>))}   
            </div>            
        </section>        
    )
};

export default AllEvent;

AllEvent.propTypes = {    
    events: PropTypes.arrayOf(PropTypes.shape()), 
    onSort: PropTypes.func,
    onFilter:PropTypes.func
}