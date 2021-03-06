import React from "react";

import styles from "./MainPage.module.css";
import TopBanner from "./TopBanner";
// import MapContainer from "./MapContainer";

export function MainPage(props) {
  return (
    <div className={styles.mpContainer}>
      <TopBanner />
      <div className={styles.btmContainer}>
        <img className={styles.namesSvg} src={"./names.svg"} alt={"line"} />

        <WarningText
          text={
            "tyvärr har vi bestämt oss för att skjuta upp bröllopsfesten på grund av covid-19. vi kommer ha en mindre vigsel i sommar och ser fram emot att få fira med er ordentligt vid ett senare tillfälle istället! om ni inte gjort det redan, ber vi er att anmäla er ändå så att vi har era kontaktuppgifter. ta hand om er sålänge så kommer mer information på mail längre fram. ♥"
          }
        />

        <NormalText
          text={"VÄLKOMNAR TILL BRÖLLOP"}
          text2={"LÖRDAGEN 4 JULI 2020"}
        />
        <NormalText
          text={
            "vänligen svara här senast den 30e april. tänk på att svara en gång för varje person i sällskapet."
          }
        />
        <Button text={"svara"} />

        <InfoSectionHeader text={"info"} />
        {/* <NormalText text={"ursäkta röran, vi bygger om"} /> */}
        <NormalText
          text={
            "vi kommer att anordna gemensam bussfärd för dem som vill, från posthotellet vid göteborgs centralstation till härryda."
          }
        />
        <NormalText
          text={
            "vigsel, mingel, middag och fest kommer att ske på samma adress. vi räknar med dans in på småtimmarna! hem tar ni er enklast själva. vi rekommenderar att ni delar på en taxi."
          }
        />

        <NormalText
          text={
            "vill ni hålla tal eller göra något annat spexit så ta kontakt via toast@adamjosefin.se"
          }
        />

        <NormalText text={"mer information kommer när det börjar närma sig."} />

        <img className={styles.cutePic} src={"./cutest_pic.png"} alt={"line"} />
        {/* <MapContainer /> */}
      </div>
    </div>
  );
}

function NormalText(props) {
  return (
    <p className={styles.infoTextRow}>
      {props.text}
      {props.text2 && (
        <>
          <br></br>
          {props.text2}
        </>
      )}
    </p>
  );
}

function WarningText(props) {
  return <p className={styles.warningRow}>{props.text}</p>;
}

function Button(props) {
  const gotoForm = () => window.open("https://forms.gle/atNtrd7xsbP5AMHS8");
  return (
    <button className={styles.button} type={"button"} onClick={gotoForm}>
      {props.text}
    </button>
  );
}

function InfoSectionHeader(props) {
  const { text } = props;

  return (
    <div className={styles.infoSectionHeader}>
      <p className={styles.infoSectionHeaderText}>{text}</p>
    </div>
  );
}
