import React from 'react';
import { Form } from '@unform/web';

import Input from '../../components/Form/Input';

import logo from '../../assets/logo.png';
import { Container, Card, Logo } from './styles';

export default function Login() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Card>
        <Logo>
          <img src={logo} width={250} alt="FastFeet" />
        </Logo>

        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            label="E-mail:"
            placeholder="example@email.com"
          />
          <Input
            name="password"
            type="password"
            label="Senha:"
            placeholder="*******"
          />
          <button type="submit">Entrar no sistema</button>
        </Form>
      </Card>
    </Container>
  );
}
