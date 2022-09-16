import styled from 'styled-components';

const FormContainer = styled.form`
  position: absolute;
  top: 10em;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
const FormTitleDynamic = styled.h2`
  margin: 2em 0 2em 0;
`;
const FormTitleH4 = styled.h3`
  margin-top: 2em;
  color: #909497;
`;

export { FormContainer, FormTitle, FormTitleH4 };
