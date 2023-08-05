import styles  from '../AllEvent/AllEvent.module.css';
import Card from '../../components/Card/Card';
import AddButton from "../../components/AddButton/AddButton";
import SortButton from "../../components/SortButton/SortButton";
import FilterButton from "../../components/FilterButton/FilterButton";
import data from "../../data/data.json";

const AllEvent = () => {   
    const events=data; 

    return (
        <div className={styles.conteiner}>
            <div className={styles.conteinerTitel}>
                <div className={styles.conteinerButton}> 
                    <FilterButton/>
                    <SortButton/>
                    <AddButton/>               
                </div>
                <h2 className={styles.titel} >My events</h2> 
            </div>  
                       
            <div className={styles.wrapper}>
                {events.map (event=>(
                <Card item={event}   key={event.id}/>))}   
            </div>            
        </div>        
    )
};

export default AllEvent;