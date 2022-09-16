import React, { useState } from 'react';
import { FormContainer, FormTitleH4 } from '../../../UI/form/FormContainer';
import Input from '../../../UI/form/Input';
import InputContainer from '../../../UI/form/InputContainer';
import { HorizontalRule } from '../../../UI/form/HorizontalRule';
import { Button } from '../../../UI/form/Button';
import { useDispatch } from 'react-redux';
import { ButtonContainer } from '../../../UI/form/ButtonContainer';
import { register } from '../../../features/auth/createAsyncThunk';
import { useForm } from '../../../Hooks/useForm';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: ''
};
const Register = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState(initialState);

  const { name, email, password, passwordConfirm } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error('les deux mots de passe doivent être identique !');
    }
    dispatch(register(data));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitleH4>Bienvenue</FormTitleH4>
        <InputContainer>
          <Input
            name="name"
            type="text"
            placeholder="Entrer votre nom"
            required
            onChange={handleChange}
            value={name}
          />
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
    </>
  );
};
export default Register;
