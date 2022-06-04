import { Form, Input } from "antd";
import { useState } from "react";
import IFormulaire from "../../interfaces/IFormulaire";
import ButtonXL from "./Button/ButtonXL";
import { useUpdateUser } from "../../context/UserContext";

const Formulaire = ({
  titre,
  submitText,
  submitTarget,
  type,
  errorMsg,
  className,
}: IFormulaire) => {
  const updateUser = useUpdateUser();
  const [errorMsgVisible, setErrorMsgVisible] = useState(false);

  const users = [
    { username: "daryl", password: "deriendorian21" },
    { username: "dorian", password: "jeje" },
  ];

  const onFinish = (values: any) => {
    var username = values.username;
    var password = values.password;
    var newEntry = { username: username, password: password };
    var userExists = users.some((user) => {
      return user.username == username && user.password == password;
    });

    if (type === "enregistrement") {
      if (!userExists) {
        users.push(newEntry);
        updateUser(username);
      } else {
        setErrorMsgVisible(true);
      }
    }

    if (type === "connexion") {
      if (userExists) {
        updateUser(username);
      } else {
        setErrorMsgVisible(true);
      }
    }
  };

  return (
    <div className={"formulaire_container " + className}>
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
        autoComplete="off"
      >
        <div className="form_content">
          <Form.Item
            name="username"
            required
            tooltip="Champ obligatoire"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre nom d'utilisateur!",
              },
            ]}
          >
            <Input placeholder="nom d'utilisateur" className="input" />
          </Form.Item>

          <Form.Item
            name="password"
            required
            tooltip="Champ obligatoire"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre mot de passe !",
              },
            ]}
          >
            <Input
              type="password"
              placeholder="mot de passe"
              className="input"
            />
          </Form.Item>

          <br />

          {errorMsgVisible ? (
            <p className="ant-form-item-explain-error">{errorMsg}</p>
          ) : (
            <p></p>
          )}
        </div>

        <br />
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <ButtonXL text={submitText} link={submitTarget} submit />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Formulaire;
