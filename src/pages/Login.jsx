import { Button, Form, Input } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Email
        <Input
          type="email"
          name="userEmail"
          placeholder="Enter email"
          required
        />
      </label>

      <label>
        Password
        <Input
          type="password"
          name="userPassword"
          placeholder="Enter password"
          required
        />
      </label>

      <Button type="submit">Sing In</Button>
    </Form>
  );
};

export default Login;
