import React, { useState } from 'react';

import { Table, Tag, Input } from 'antd';

import styles from './Buses.module.sass';

const { Search } = Input;

const columns = [
  {
    title: 'Номер',
    dataIndex: 'number',
    key: 'number',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Напрямок',
    dataIndex: 'direction',
    key: 'direction',
  },
  {
    title: 'Ціна',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Робочі дні',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => (
          <Tag color="green" key={tag}>
            {tag.toUpperCase()}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: 'Час роботи',
    dataIndex: 'workTime',
    key: 'workTime',
  },
];

const data = [
  {
    key: '1',
    number: '1-Д',
    direction: 'Військове містечко – Ірпінь',
    price: '16 грн',
    tags: ['Пн', 'Ср', 'Пт'],
    workTime: '8:00 - 17:00',
    isShown: true,
  },
  {
    key: '2',
    number: '2',
    direction: 'м. Буча – с. Мироцьке',
    price: '24 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
    workTime: '8:00 - 19:00',
    isShown: true,
  },
  {
    key: '3',
    number: '3',
    direction: 'Ірпінь – Буча',
    price: '16 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Нд'],
    workTime: '5:30 - 23:00',
    isShown: true,
  },
  {
    key: '4',
    number: '6',
    direction: 'ст. Ірпінь – Машторф',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '9:00 - 20:00',
    isShown: true,
  },
  {
    key: '5',
    number: '6, 7A, 7-Б',
    direction: 'Ірпінь (кільцевий)',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '6:00 - 23:00',
    isShown: true,
  },
  {
    key: '6',
    number: '8',
    direction: 'Ірпінь – Романівка',
    price: '16грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '10:00 - 17:00',
    isShown: true,
  },
  {
    key: '7',
    number: '11',
    direction: 'ст. Ірпінь – с. Рубежівка',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
    workTime: '10:00 - 15:00',
    isShown: true,
  },
  {
    key: '8',
    number: '12',
    direction: 'Буча, р-н Ястремщина, ж/к Новатор - з/д вокзал',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '6:00 - 19:00',
    isShown: true,
  },
  {
    key: '9',
    number: '14',
    direction: 'м.Буча - с.м.т.Гостомел',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '5:30 - 23:00',
    isShown: true,
  },
  {
    key: '10',
    number: '15',
    direction: 'м.Буча - с.м.т.Гостомел',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '8:00 - 23:00',
    isShown: true,
  },
  {
    key: '11',
    number: '15К',
    direction: 'м .Буча – с. Мироцьке',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '6:00 - 18:00',
    isShown: true,
  },
  {
    key: '12',
    number: '23',
    direction: 'м .Буча – с. Блиставиця - с. Гаврилівка',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
    workTime: '8:00 - 19:00',
    isShown: true,
  },
  {
    key: '13',
    number: '16',
    direction: 'м .Буча – с. Блиставиця - с. Гаврилівка',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '9:00 - 19:00',
    isShown: true,
  },
  {
    key: '14',
    number: '17, 17К',
    direction: 'с. Забуччя – с. Мих.Рубежівка – смт. Ворзель',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '8:00 - 23:00',
    isShown: true,
  },
  {
    key: '15',
    number: '18',
    direction: 'Ірпінь (вокзал) – Військовий госпіталь',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '8:00 - 23:00',
    isShown: true,
  },
  {
    key: '16',
    number: '18Д',
    direction: 'Буча - Ірпінь',
    price: '16 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '8:00 - 23:00',
    isShown: true,
  },
  {
    key: '17',
    number: '19',
    direction: 'м. Ірпінь – с. Кичеєве',
    price: '16 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '6:00 - 18:00',
    isShown: true,
  },
  {
    key: '18',
    number: '20, 20/б',
    direction: 'ст. Ірпінь – смт. Гостомель',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
    workTime: '10:00 - 15:00',
    isShown: true,
  },
  {
    key: '19',
    number: '22',
    direction: 'м. Буча – с.м.т. Гостомель',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '5:30 - 23:00',
    isShown: true,
  },
  {
    key: '20',
    number: '22, 24',
    direction: 'с.Гаврилівка - м.Ірпінь',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '5:30 - 22:00',
    isShown: true,
  },
  {
    key: '21',
    number: '381',
    direction: 'АДПСУ (Ірпінь) – Святошин',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
    workTime: '8:00 - 20:00',
    isShown: true,
  },
  {
    key: '22',
    number: '386(1)',
    direction: 'с. Луб’янка – ст. м. Святошин',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '8:00 - 23:00',
    isShown: true,
  },
  {
    key: '23',
    number: '395',
    direction: 'Ірпінь (вокзал) - ст.м. Оболонь (Київ',
    price: '8 грн',
    tags: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    workTime: '8:00 - 22:00',
    isShown: true,
  },
];

const Buses = (props) => {
  const [busesDataSet, setBusesDataSet] = useState(data);

  const onSearch = (value) => {
    const updatedDataSet = busesDataSet.map((item) => {
      if (item.direction.includes(value)) {
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
          placeholder="Введіть ваш маршрут"
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

export default Buses;
