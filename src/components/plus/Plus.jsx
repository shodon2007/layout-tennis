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
      <PlusBlock img={bg2} title={"Зал с покрытием “Искусственная трава”"} />
      <PlusBlock img={bg3} title={"Зал с покрытием “Хард”"} />
    </div>
  )
}

export default Plus