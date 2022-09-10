import styled from 'styled-components';

export const Button = ({ type, name }) => {
  return <StyledButton type={type}>{name}</StyledButton>;
};

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  margin-top: 2em;
  border-radius: 2rem;
  cursor: pointer;
`;
// export default StyledButton;
