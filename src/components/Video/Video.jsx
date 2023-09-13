import { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "../Modal/Modal";
import styles from './Video.module.css';

class Video extends Component{
    state = {
       isOpen:false, 
    }

    toggle = () => {
        this.setState(prevState=>({isOpen:!prevState.isOpen}))
    }

    render() {
        const { isOpen } = this.state;
        return (
            <>
                <button type="button" onClick={ this.toggle} className={styles.Button}>Video</button>
                {isOpen && (
                    <Modal onClose={this.toggle}>
                        <ReactPlayer
                            width="100%"
                            height="100%"
                            controls="false"
                            playing={true}
                            url={`https://youtu.be/3P47j9wU9D4`}
                        />                                                                   
                    </Modal>
                )}
            </>
        )   
    }    
}

export default Video;