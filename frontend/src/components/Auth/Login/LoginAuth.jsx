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
import { loginUser, verifyEmail } from '../../../features/user/userThunk';
const Login = () => {
  const initialState = {
    email: '',
    password: ''
  };
  const dispatch = useDispatch();
  const [data, setData] = useState(initialState);
  const { email, password } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyEmail(data.email));
    // dispatch(loginUser(data));
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle name="Se Connecter" />
      <InputContainer>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={handleChange}
          autocomplete="new-password"
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

