import styles  from '../OneEvent/OneEvent.module.css';
import {useEffect,useState} from "react";
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { Link, useParams} from 'react-router-dom';
import data from "../../data/data.json";



const OneEvent= () => {
    const { eventId } = useParams();    
    const event= data.filter((item)=>item.id.includes(eventId))    

    return (       
        <> 
            <Link to={'/'} className={styles.backButton}>
                <Icon path={mdiArrowLeft} size={1} />
                <p className={styles.backButtonText}>Back</p>               
            </Link>
            <div className={styles.conteiner}>                
                <div className={styles.conteinerPage}>
                    <h2  className={styles.title}>{event[0].title}</h2>                        
                    <div className={styles.card}>               
                                            
                            <div className={styles.imgConteiner}>
                                <img className={styles.image} src={event[0].url} alt={"Event"} width={'100%'} height={'100%'}/>
                            </div>
                            <div className={styles.conteinerText}>
                                <p className={styles.description}>{event[0].description}</p>
                                <div className={styles.conteinerOptions}>
                                    <p className={styles.categoria}>{event[0].categoria}</p>
                                    <p className={styles.priority}>{event[0].priority}</p>
                                    <p>{event[0].location}</p>
                                    <p>{event[0].date} at {event[0].time}</p>
                                </div>
                            </div>                    
                      
                        <div className={styles.conteinerButton}> 
                            <Link  className={styles.editButton} to={'/edit'} >                       
                                <p>Edit</p>               
                            </Link>
                            <button className={styles.deleteButton}>Delete event</button>  
                        </div>                            
                    </div>                                       
                </div>                               
            </div>            
        </>          
    );
};

export default OneEvent;