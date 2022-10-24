import React from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'

export default function LogIn({ setUser }) {
  const LOGIN_URL = "http://localhost:8083/api/getLoggedUser/"

  const login = async () => {
    axios
      .get(`${LOGIN_URL}${formData.email}/?pwd=${formData.password}`)
      .then(response => {
        const user = response.data;
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
      })
      .catch(error => console.error(error.response.data))
  }

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    const userData = {
      email,
      password,
    }
    login()
  }

  return (
    <div className="authenticationWrapper">
      <Form name="normal_register" className="authenticationForm" onFinish={onSubmit}>
        <Form.Item>
          <h2>Log in </h2>
        </Form.Item>
        <Form.Item
          name="usernameItem"
          rules={[
            {
              required: true,
              message: 'Please select an Username!',
            },
          ]}
        >
          <Input
            name="email"
            id="email"
            defaultValue={email}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          name="passwordItem"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            }
          ]}
        >
          <Input
            name="password"
            id="password"
            defaultValue={password}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={onChange}

          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-form-button" size="large" style={{ width: "100%" }}>
            Log in
          </Button>

          <p>Don't have an account? <Link to="../register"> <a href="">Register</a> </Link></p>
        </Form.Item>
      </Form>
    </div>
  )
}
