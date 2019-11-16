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
            <img className={styles.namesSvg} src={'./names.svg'} alt={'line'} />

            <InfoSectionHeader text={"Info"} />

            <p className={styles.infoTextRow}>
                Var? Chalmersbastun
            </p>
            <p className={styles.infoTextRow}>
                När? 4/7 16:00
            </p>
            <p className={styles.infoTextRow}>
                Hur? O.S.A. och kom dit!
            </p>
        </div>    
    </div>);
}



function InfoSectionHeader(props) {
    const {text} = props;

    return (<div className={styles.infoSectionHeader}>
        <p className={styles.infoSectionHeaderText}>{text}</p>
    </div>);
}