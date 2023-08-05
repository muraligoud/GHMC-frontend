import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import './dashboard.component.css';
import { useNavigate } from 'react-router-dom';
import DemoPie from '../chart-examples';

const { Header, Sider, Content, Footer } = Layout;

const menuItems = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'nav 1',
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'nav 2',
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'nav 3',
  },
]

const App = () => {
  const history = useNavigate();
  const [selectedTab, setSelectedTab] = useState('1')

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (data) => {
    setSelectedTab(data.key)
    console.log(data)
  }

  const handleLogout = () => {
    history('/admin/login')
  }
  return (
    <Layout className='dashboard-container'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" >LOGO</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
          selectedKeys={[selectedTab]}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          className='header-class'
          style={{
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className='button-class'
          />
          <span className='welcome-text'>Hello, Welcome To Dashboard</span>
          <Button type="primary" className='logout-button' onClick={handleLogout}>
            Logout
          </Button>
        </Header>
        <Content
          className='content-class'
          style={{
            background: colorBgContainer,
          }}
        >
          Content {selectedTab}
          <div className='charts-container'>
            <DemoPie />
            <DemoPie />
            <DemoPie />
            <DemoPie />
            <DemoPie />
            <DemoPie />
            <DemoPie />
            <DemoPie />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          <p>Copyright 2013-2020. All rights reserved. GHMC, Hyderabad Phone: 12323456789</p>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;

