import React from 'react'
import PlusBlock from './PlusBlock'

import styles from './Plus.module.scss';

import bg1 from '@/images/second_1.png';
import bg2 from '@/images/second_2.png';
import bg3 from '@/images/second_3.png';


function Plus() {
  return (
    <div className={styles.plus}>
        <PlusBlock img={bg1} title={"5 летних грунтовых кортов"} />
        <PlusBlock img={bg2} title={"5 летних грунтовых кортов"} />
        <PlusBlock img={bg3} title={"5 летних грунтовых кортов"} />
    </div>
  )
}

export default Plus