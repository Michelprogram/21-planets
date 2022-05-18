import { Form, Input, Button, Checkbox } from 'antd';
import React, { useState } from 'react';
import ButtonBlue from './Button/ButtonBlue';
//import 'antd/dist/antd.css';

const Demo = () => {
  const onFinish = (values:any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='formulaire_container'>
        <h2>On vous connait déjà ?</h2>
        <br />
        <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            name="username"
            required tooltip="Champ obligatoire"
            rules={[
            {
                required: true,
                message: "Veuillez entrer votre nom d'utilisateur!",
            },
            ]}
        >
            <Input placeholder="nom d'utilisateur" className='input'/>
        </Form.Item>

        <Form.Item
            name="password"
            required tooltip="Champ obligatoire"
            rules={[
            {
                required: true,
                message: "Veuillez entrer votre mot de passe !",
            },
            ]}
        >
        <Input type='password' placeholder='mot de passe' className='input'/>
        </Form.Item>

        <br/>

        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Checkbox>Se souvenir de moi</Checkbox>
        </Form.Item>

        <br />
        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >

        <ButtonBlue text='Envoyez' link='/login' submit/>
        </Form.Item>
        </Form>
    </div>
  );
};

export default Demo;