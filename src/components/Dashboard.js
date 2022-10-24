import React, { useState } from "react"
import {
  DesktopOutlined,
  TeamOutlined,
  UserOutlined,
  UserAddOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons"
import { Layout, Menu } from "antd"
const { Content, Sider } = Layout
import { Outlet, NavLink, useNavigate } from "react-router-dom"
import "antd/dist/antd.css"

const items = [
  {
    key: "PM",
    label: <NavLink to='/pm'>PM</NavLink>,
    icon: <DesktopOutlined />,
  },
  {
    key: "HR",
    label: <NavLink to={`/hr`}>HR</NavLink>,
    icon: <TeamOutlined />,
  },
  {
    key: "login",
    label: <NavLink to={`/login`}>Login</NavLink>,
    icon: <UserOutlined />,
  },
  {
    key: "register",
    label: <NavLink to={`/register`}>Register</NavLink>,
    icon: <UserAddOutlined />,
  },
]

const Dashboard = ({ user }) => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(true)
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        collapsedWidth={0}
        trigger={<ArrowLeftOutlined />}
        zeroWidthTriggerStyle={{
          marginTop: "28vw",
          // backgroundColor: "#ff9800",
          // color: "#4caf50",
        }}
      >
        <h1
          style={{ color: "white", margin: "20px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          EdW
        </h1>
        {user ? <p style={{ color: 'white' }}>{user.name}</p> : ''}
        <Menu
          theme='dark'
          defaultSelectedKeys={["1"]}
          mode='inline'
          items={items}
        />
        sdf
      </Sider>
      <Content
      // style={{
      //   margin: "0 16px",
      // }}
      >
        <div
          className='site-layout-background'
        // style={{
        //   padding: 24,
        //   minHeight: 360,
        // }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  )
}

export default Dashboard