import styled from 'styled-components';

const FormContainer = styled.form`
  position: absolute;
  top: 10em;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;
  width: 30vw;
  margin: auto;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0.5em 4em 0 rgba(31, 38, 135, 0.2);
  border-radius: 10px;
  color: #909497;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 60vh;
    h3 {
      font-size: small;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
    h3 {
      font-size: x-large;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 80vw;
    height: 60vh;
    h3 {
      font-size: x-large;
    }
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 60vh;
  }
`;
const FormTitle = ({ text }) => {
  return <FormTitleDynamic>{text}</FormTitleDynamic>;
};
const FormTitleDynamic = styled.h3`
  color: black;
`;
const FormTitleH4 = styled.h4`
  margin-top: 1em;
  color: #909497;
  text-underline-offset: 0.2em;
  background-size: 100% 0.1em, 0 0.1em;
  &:hover {
    text-underline-offset: 0.4em;
    color: blue;
    background-size: 0 0.1em, 100% 0.1em;
  }
`;

export { FormContainer, FormTitle, FormTitleH4 };
