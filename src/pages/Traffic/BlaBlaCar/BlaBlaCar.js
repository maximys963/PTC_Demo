import React, { useState } from 'react';
import {
  Card, Tag, Button, message,
} from 'antd';
import moment from 'moment';
import 'moment/locale/uk';

import styles from './BlaBlaCar.module.sass';

const { Meta } = Card;

const driversDataSet = [
  {
    id: '1',
    name: 'Baсиль',
    img: 'https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg',
    direction: 'напрям: Ірпінь - Львів, автомобіль: Audi A5 ',
    price: '400 грн',
    isBooked: false,
  },
  {
    id: '2',
    name: 'Іванна',
    img: 'https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg',
    direction: 'напрям: Ірпінь - Київ, автомобіль: VW Golf ',
    price: '60 грн',
    isBooked: false,
  },
  {
    id: '3',
    name: 'Катя',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoAJ0lRoAiBxAiRX-ycYSATZL21rcVewQVw&usqp=CAU',
    direction: 'напрям: Ірпінь - Миронівка, автомобіль: Reno Megan ',
    price: '120 грн',
    isBooked: false,
  },
  {
    id: '4',
    name: 'Андрій',
    img: 'https://rockstart.imgix.net/wp-content/uploads/2012/06/bas-300x300.jpg?auto=compress%2Cformat&ixlib=php-1.1.0',
    direction: 'напрям: Ірпінь - Вижгород, автомобіль: Audi 80',
    price: '160 грн',
    isBooked: false,
  },
  {
    id: '5',
    name: 'Світлана',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjWcsoMVRknE7UNgOssv7Ug4GfxYUS_yt5g&usqp=CAU',
    direction: 'напрям: Ірпінь - Київ, автомобіль: Deawoo Lanos',
    price: '70 грн',
    isBooked: false,
  },
  {
    id: '6',
    name: 'Олексій',
    img: 'https://avatars.githubusercontent.com/u/1071625?v=4',
    direction: 'напрям: Ірпінь - Одеса, автомобіль: VW Multivan',
    price: '250 грн',
    isBooked: false,
  },
];

const BlaBlaCar = (props) => {
  const [drivers, setDrivers] = useState(driversDataSet);

  const handleBookDriver = (id) => {
    const updatedDrives = drivers.map((driver) => {
      if (id === driver.id) {
        message.success('Лист із підтвердженням відправлено на вашу пошту');
        return {
          ...driver,
          isBooked: true,
        };
      }

      return driver;
    });

    setDrivers(updatedDrives);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <div>
          Поїздки на сьогодні
          {' '}
          {moment(new Date()).locale('uk').format('LL')}
        </div>
      </div>
      <div className={styles.drivers_container}>
        {drivers.map((driver) => (
          <Card
            hoverable
            style={{
              width: 240, marginLeft: 20, marginRight: 20, marginBottom: 20,
            }}
            cover={(
              <img
                className={styles.img}
                alt="example"
                src={driver.img}
              />
            )}
          >
            <Meta
              title={driver.name}
              description={driver.direction}
            />
            <div className={styles.tag_container}>
              <Tag color="cyan">{driver.price}</Tag>
            </div>
            <div className={styles.button_container}>
              <Button
                type="primary"
                disabled={driver.isBooked}
                onClick={() => handleBookDriver(driver.id)}
              >
                {
                  driver.isBooked
                    ? 'Забронювано'
                    : 'Забронювати'
                }
              </Button>
            </div>
          </Card>
        ))}

      </div>
    </div>
  );
};

export default BlaBlaCar;
