import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Menu } from 'antd';
import { StockOutlined, ScheduleOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const UserMenu = (props) => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const history = useHistory();

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      <SubMenu key="sub1" icon={<ScheduleOutlined />} title="Громадський транспорт">
        <Menu.Item
          role="button"
          onClick={() => history.push('/traffic/buses')}
          key="1"
        >
          Маршрутні таксі
        </Menu.Item>
        <Menu.Item
          role="button"
          onClick={() => history.push('/traffic/taxi')}
          key="2"
        >
          Таксі
        </Menu.Item>
        <Menu.Item
          role="button"
          onClick={() => history.push('/traffic/blablacar')}
          key="3"
        >
          BlaBlaCar
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<StockOutlined />} title="Аналітика">
        <Menu.Item
          onClick={() => history.push('/traffic/overall')}
          key="5"
        >
          Загальна
        </Menu.Item>
        <Menu.Item key="6">Таксі</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Аккаунт">
        <Menu.Item key="12">Вийти</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default UserMenu;
