
import styles  from '../Layout/Layout.module.css';
import SearchForm from '../SearchForm/SearchForm';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';


const Layout = ({children}) => {
    return (      
        <>
           <div className={styles.layoutConteiner}>
                <div className={styles.box1}>
                    <h1 className={styles.title}>Event Planner</h1>
                </div>
                <div className={styles.box2}>
                    <SearchForm />
                </div> 
                <div className={styles.box3}>               
                    <ChangeLanguage />                                          
                </div>
            </div>             
            <div >{children}</div>             
        </>                
    ) 
}

export default Layout;