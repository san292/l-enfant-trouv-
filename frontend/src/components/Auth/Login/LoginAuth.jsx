import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  FormContainer,
  FormTitleH4,
  Input,
  InputContainer,
  HorizontalRule,
  Button,
  ButtonContainer
} from '../../../UI/form';
import styled from 'styled-components';
import { useForm } from '../../../Hooks/useForm';
import { login } from '../../../features/auth/createAsyncThunk';
import GoogleAuthLogin from '../GoogleAuth/GoogleAuthLogin';

const Login = () => {
  const initialState = {
    email: '',
    password: ''
  };

  const { email, password, formState, onInputChange, onResetForm } =
    useForm(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log('submitdata', formState);
    e.preventDefault();
    dispatch(login(formState));
    onResetForm(initialState);
    navigate('/');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LabelTextGoogle>
        {' '}
        <GoogleAuthLogin />
      </LabelTextGoogle>
      <HorizontalRule />
      <LabelText> votre Email</LabelText>
      <InputContainer>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={onInputChange}
          value={email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={onInputChange}
          autocomplete="new-password"
          value={password}
        />
      </InputContainer>
      <ButtonContainer>
        <Button type="submit" name="S'identifier" />
      </ButtonContainer>
      <LabelText> vous avez pas de compte ?</LabelText>
      {/* <LinkContainer> */}
      <Link to="/creercompte">
        <FormTitleH4>créer compte</FormTitleH4>
      </Link>
      {/* </LinkContainer> */}
    </FormContainer>
  );
};

const LabelText = styled.span`
  font-size: 0.6em;
  @media only screen and (min-width: 768px) {
    font-size: 1em;
  }
`;

const LabelTextGoogle = styled.span`
  font-size: 1em;
  margin-top: 1em;
`;

export default Login;
