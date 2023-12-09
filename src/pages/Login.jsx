import { Button, Form, Input } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { loginThunk } from 'redux/auth/operations';

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

    dispatch(loginThunk(formData))
      .unwrap()
      .then(() => toast.info('Welcome'))
      .catch(err => {
        toast.error('error, try changing the data!');
      });
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
