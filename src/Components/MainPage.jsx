import React from 'react';

import styles from './MainPage.module.css';

export function MainPage(props) {
    return (
    <div className={styles.mpContainer}>
        <div className={styles.topContainer}>
            <div className={styles.topContent}>
            </div>    
            <img className={styles.backdrop} src={'./backdrop.svg'} alt={'line'} />
        
        </div>    
        <div className={styles.btmContainer}>
            <div className={styles.names}>
                <span className={'adam'}>{'Adam Scott'}</span>
                <span className={'annd'}>{'&'}</span>
                <span className={'jossie'}>{'Josefin Ondrus'}</span>
            </div>    
            <div className={styles.ph2}>
            </div>    
        </div>    
    </div>);
}
