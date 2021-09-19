import React from 'react';
import { Input } from 'antd';
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
import map from '../../img/map.png';

import styles from './Map.module.sass';

function Map() {
  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <Input value='Ірпінь'/>
        <div className={styles.icon_container}>
            <ArrowRightOutlined />
        </div>
        <Input value='Київ'/>
      </div>
      <img
        className={styles.map_container}
        src={map}
      />
    </div>
  );
}

export default Map;
