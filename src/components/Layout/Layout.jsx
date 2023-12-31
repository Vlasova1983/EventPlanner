import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useLang } from '../../hooks/useLang';
import SearchForm from '../SearchForm/SearchForm';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';
import styles from '../Layout/Layout.module.css';

const Layout = ({ children }) => {   
    const {lang} = useLang();
    return (      
        <>
           <header className={styles.layoutConteiner}>
                <div className={styles.box1}>
                    {lang === 'en' ?                       
                        <Link>
                            <span className={styles.title}>Event Planner</span>
                        </Link> :
                        <Link>
                            <span className={styles.title}>Планувальник подій</span>
                        </Link>                        
                    }   
                </div>
                <div className={styles.box2}>
                    <SearchForm />
                </div> 
                <div className={styles.box3}>               
                    <ChangeLanguage />                                          
                </div>
            </header>             
            <main className={styles.main}>{children}</main>             
        </>                
    ) 
}

export default Layout;

Layout.propTypes = {   
    children: PropTypes.object,    
}