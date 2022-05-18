import { Form, Input, Button, Checkbox } from 'antd';
import React, { useState } from 'react';
import IFormulaire from '../../interfaces/IFormulaire';
import ButtonXL from './Button/ButtonXL';

const Formulaire = ({titre, submitText, submitTarget}: IFormulaire) => {

  const onFinish = (values:any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='formulaire_container'>
        <h2>{titre}</h2>
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

        <div className='form_content'>
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
        </div>

        <br />
        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <ButtonXL text={submitText} link={submitTarget} submit/>
        </Form.Item>
        </Form>
    </div>
  );
};

export default Formulaire;