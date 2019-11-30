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

            <NormalText text={"VÄLKOMNA DEN 4:E JULI 2020"} /> 
            <NormalText text={"Svara här senast den 30:e april, tänk på att svara en gång för varje person i sällskapet"} /> 
            <Button text={"svara"} /> 

            <InfoSectionHeader text={"mer info kommer snart"} />
            {/* <NormalText text={"ursäkta röran, vi bygger om"} /> */}

        </div>    
    </div>);
}

function NormalText(props) {
    return (<p className={styles.infoTextRow}>
        {props.text}
    </p>)
}

function Button(props) {
    const gotoForm = () => window.location.href = "https://forms.gle/atNtrd7xsbP5AMHS8";
    return (<button className={styles.button} type={"button"} onClick={gotoForm}>
        {props.text}
    </button>)
}

function InfoSectionHeader(props) {
    const {text} = props;

    return (<div className={styles.infoSectionHeader}>
        <p className={styles.infoSectionHeaderText}>{text}</p>
    </div>);
}
