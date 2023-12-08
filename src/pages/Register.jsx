import { Button, Form, Input } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.reducer';

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerThunk(formData));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="userName"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я]+)*$"
          required
        />
      </label>
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

      <Button type="submit">Sing Up</Button>
    </Form>
  );
};

export default Register;
