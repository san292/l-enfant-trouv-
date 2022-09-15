import React, { useState } from 'react';
import { FormContainer, FormTitle } from '../../../UI/form/FormContainer';
import Input from '../../../UI/form/Input';
import InputContainer from '../../../UI/form/InputContainer';
import { HorizontalRule } from '../../../UI/form/HorizontalRule';
import { Button } from '../../../UI/form/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ButtonContainer } from '../../../UI/form/ButtonContainer';
import { register } from '../../../features/auth/createAsyncThunk';
import { verifyEmail } from '../../../features/user/userThunk';

const initialState = {
  email: 'moi@gmail.com',
  password: 'moi123',
  passwordConfirm: 'moi123'
};
const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [data, setData] = useState(initialState);

  const { email, password, passwordConfirm } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data submit', data);

    dispatch(register(data));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle name="Bienvenue" />
      <InputContainer>
        <Input
          name="email"
          type="email"
          placeholder="Entrer votre Email"
          required
          onChange={handleChange}
          value={email}
        />

        <Input
          name="password"
          type="password"
          placeholder="Entrer votre mot de passe"
          required
          onChange={handleChange}
          value={password}
          autocomplete="new-password"
        />

        <Input
          name="passwordConfirm"
          type="password"
          placeholder="confirmer mot de passe"
          required
          onChange={handleChange}
          value={passwordConfirm}
          autocomplete="new-password"
        />
      </InputContainer>
      <ButtonContainer>
        <Button type="submit" name="S'enregistrer" />
      </ButtonContainer>
      <HorizontalRule />
    </FormContainer>
  );
};
export default Register;
