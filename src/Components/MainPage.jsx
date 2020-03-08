import React from 'react';

import styles from './MainPage.module.css';
import TopBanner from './TopBanner';
import MapContainer from './MapContainer';

export function MainPage(props) {
    return (
    <div className={styles.mpContainer}>
        <TopBanner />
        <div className={styles.btmContainer}>
            <img className={styles.namesSvg} src={'./names.svg'} alt={'line'} />

            <NormalText text={"VÄLKOMNAR TILL BRÖLLOP LÖRDAGEN 4 JULI 2020"} />
            <NormalText text={"vänligen svara här senast den 30e april. tänk på att svara en gång för varje person i sällskapet."} />
            <Button text={"svara"} />

            <InfoSectionHeader text={"info"} />
            {/* <NormalText text={"ursäkta röran, vi bygger om"} /> */}
            <NormalText text={"vi kommer att anordna gemensam bussfärd för dem som vill, från posthotellet vid göteborgs centralstation till härryda."} />
            <NormalText text={"vigsel, mingel, middag och fest kommer att ske på samma adress. vi räknar med dans in på småtimmarna! hem tar ni er enklast själva. vi rekommenderar att ni delar på en taxi."} />


            <NormalText text={"mer information kommer när det börjar närma sig."} />

            {/* <MapContainer /> */}

        </div>
    </div>);
}

function NormalText(props) {
    return (<p className={styles.infoTextRow}>
        {props.text}
    </p>)
}

function Button(props) {
    const gotoForm = () => window.open("https://forms.gle/atNtrd7xsbP5AMHS8");
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