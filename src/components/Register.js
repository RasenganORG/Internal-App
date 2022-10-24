import React from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register({ setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    password2: ''
  })

  const { name, email, phoneNumber, password, password2 } = formData

  const register = async () => {
    const REGISTER_URL = "http://localhost:8083/api/user"
    const userData = {
      name,
      email,
      password,
      phoneNumber,
    }
    const response = await axios.post(REGISTER_URL, userData)

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
      setUser(response.data)
    }
  }
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = () => {
    if (password !== password2) {
      console.log('passwords do not match')
    } else {
      register()
    }
  }

  return (
    <div className="authenticationWrapper">
      <Form name="normal_register" className="authenticationForm" onFinish={onSubmit}>
        <Form.Item>
          <h2>Register </h2>
        </Form.Item>
        <Form.Item
          name="nameItem"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input
            name="name"
            id="name"
            defaultValue={name}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
            onChange={onChange}
          />
        </Form.Item>


        <Form.Item
          name="emailItem"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input
            name="email"
            id="email"
            defaultValue={email}
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="E-mail address"
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: 'Please add your phone number!',
            },
          ]}
        >
          <Input
            name="phoneNumber"
            id="phoneNumber"
            defaultValue={phoneNumber}
            prefix={<PhoneOutlined />}
            placeholder="Phone number"
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
        <Form.Item
          name="password2Item"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            }
          ]}
        >
          <Input
            name="password2"
            id="password2"
            defaultValue={password2}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm password"
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-form-button" size="large" style={{ width: "100%" }}>
            Create account
          </Button>

          <p>Already have an account? <Link to="../login"> <a href=''>Log in</a> </Link></p>

        </Form.Item>
      </Form>
    </div>
  )
}
