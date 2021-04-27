import React, { useState } from 'react';

import { Table, Tag, Input } from 'antd';

import styles from './Taxi.module.sass';

const { Search } = Input;

const columns = [
  {
    title: 'Назва',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Рейтинг',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = 'green';

          if (tag > 0 && tag < 4) {
            color = 'red';
          } else if (tag > 4 && tag < 7) {
            color = 'yellow';
          } else {
            color = 'green';
          }

          return (
            <Tag color={color} key={tag}>
              {String(tag).toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Ціна виклику',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Ціна за км',
    dataIndex: 'price_d',
    key: 'price_d',
  },
  {
    title: 'Номер телефону',
    dataIndex: 'telephone',
    key: 'telephone',
  },
];

const data = [
  {
    key: '1',
    name: 'Таксі десятка',
    tags: [9.2],
    price: '40грн',
    price_d: '9грн',
    telephone: '+380676566663',
    isShown: true,
  },
  {
    key: '2',
    name: 'Євролайн',
    tags: [6.7],
    price: '40грн',
    price_d: '9грн',
    telephone: '+380933388190',
    isShown: true,
  },
  {
    key: '3',
    name: 'Авангард',
    tags: [9.9],
    price: '30грн',
    price_d: '6грн',
    telephone: '+380632331848',
    isShown: true,
  },
  {
    key: '4',
    name: 'Deluxe Taxi',
    tags: [3.8],
    price: '50грн',
    price_d: '8грн',
    telephone: '+380935003500',
    isShown: true,
  },
  {
    key: '5',
    name: 'Лінкор таксі',
    tags: [6.1],
    price: '40грн',
    price_d: '7грн',
    telephone: '+537',
    isShown: true,
  },
  {
    key: '6',
    name: 'Ірпінь таксі',
    tags: [9.1],
    price: '40грн',
    price_d: '7грн',
    telephone: '+380634097751',
    isShown: true,
  },
  {
    key: '7',
    name: 'Аврора',
    tags: [5.3],
    price: '30грн',
    price_d: '6грн',
    telephone: '+380970412520',
    isShown: true,
  },
  {
    key: '8',
    name: 'Таксі 2444',
    tags: [6.8],
    price: '30грн',
    price_d: '5грн',
    telephone: '+380933949955',
    isShown: true,
  },
  {
    key: '9',
    name: 'Таксі 13',
    tags: [3.9],
    price: '30грн',
    price_d: '5грн',
    telephone: '+380442001313',
    isShown: true,
  },
  {
    key: '10',
    name: 'Сова',
    tags: [2.6],
    price: '30грн',
    price_d: '5грн',
    telephone: '+907',
    isShown: true,
  },
  {
    key: '11',
    name: '3838',
    tags: [4.2],
    price: '30грн',
    price_d: '5грн',
    telephone: '+3838',
    isShown: true,
  },

];

const Taxi = (props) => {
  const [busesDataSet, setBusesDataSet] = useState(data);

  const onSearch = (value) => {
    const updatedDataSet = busesDataSet.map((item) => {
      if (item.name.toLowerCase().includes(value.toLowerCase())) {
        return {
          ...item,
          isShown: true,
        };
      }

      return {
        ...item,
        isShown: false,
      };
    });

    setBusesDataSet(updatedDataSet);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search_container}>
        <Search
          placeholder="Введіть назву таксі"
          allowClear
          size="large"
          enterButton="Шукати"
          onSearch={onSearch}
        />
      </div>
      <Table columns={columns} dataSource={busesDataSet.filter((bus) => bus.isShown)} />
    </div>
  );
};

export default Taxi;
