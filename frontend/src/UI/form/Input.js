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
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0.2em 0.4em 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  margin-top: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #717d7e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.1em #e5e7e9;
  }
  &::placeholder {
    color: #d7bde2;
    font-weight: 100;
    font-size: 1em;
  }
`;
