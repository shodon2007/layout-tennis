import React from 'react'

import styles from './Plus.module.scss';

function PlusBlock({img, title}) {
  return (
    <div className={styles.block}>
      <img className={styles.img} src={img} alt="bgImage" />
      <div className={styles.text}>{title}</div>
    </div>
  )
}

export default PlusBlock