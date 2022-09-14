import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FormContainer,
  FormTitle,
  FormTitleH4
} from '../../../UI/form/FormContainer';
import Input from '../../../UI/form/Input';
import InputContainer from '../../../UI/form/InputContainer';
import { HorizontalRule } from '../../../UI/form/HorizontalRule';
import { Button } from '../../../UI/form/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ButtonContainer } from '../../../UI/form/ButtonContainer';
import { loginUser } from '../../../features/user/userThunk';
const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    let loginData = {
      email: e.target.value,
      password: e.target.value
    };

    dispatch(loginUser(loginData));
  };
  const handleChange = (e) => {
    setData({
      [e.target.name]: e.target.value
    });
  };
  console.log('data------------->', data);
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle name="Se Connecter" />
      <InputContainer>
        <Input
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={email}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          onChange={handleChange}
          autocomplete="current-password"
          value={password}
        />
      </InputContainer>

      <ButtonContainer>
        <Button type="submit" name="S'identifier" />
      </ButtonContainer>
      <Link to="/creercompte">
        <FormTitleH4>créer compte</FormTitleH4>
      </Link>
      <HorizontalRule />
    </FormContainer>
  );
};
export default Login;

