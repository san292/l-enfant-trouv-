import styled from 'styled-components';
const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
const StyledInput = styled.input`
  background: var(--clr-grey-input);
  box-shadow: 0 0.2em 0.4em 0 rgba(31, 38, 135, 0.37);
  border-radius: 2em;
  margin-top: 2em;
  width: 80%;
  height: 3em;
  padding: 1em;
  border: none;
  outline: none;
  color: var(--clr-grey-2);
  font-size: 1em;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.1em #e5e7e9;
  }
  &::placeholder {
    color: var(--clr-Blue-2);
    font-weight: 100;
    font-size: 1em;
  }
`;
