import React from 'react';

import styles from './TopBanner.module.css';
import classNames from 'classnames';

export default function TopBanner() {

  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
      </div>
        <img className={styles.containerBackdrop} src={'./backdrop.svg'} alt={'line'} />

      	<div className={classNames(styles.birdContainer, styles.containerOne)}>
      		<div className={classNames(styles.bird, styles.birdOne)}></div>
      	</div>

        <div className={classNames(styles.birdContainer, styles.containerTwo)}>
      		<div className={classNames(styles.bird, styles.birdTwo)}></div>
      	</div>

        <div className={classNames(styles.birdContainer, styles.containerThree)}>
      		<div className={classNames(styles.bird, styles.birdThree)}></div>
      	</div>

        <div className={classNames(styles.birdContainer, styles.containerFour)}>
      		<div className={classNames(styles.bird, styles.birdFour)}></div>
      	</div>
    </div>
  )
}
