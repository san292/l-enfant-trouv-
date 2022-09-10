import styled from 'styled-components';

const FormContainer = styled.form`
  position: absolute;
  top: 10em;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-arround;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  margin: auto;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0.5em 4em 0 rgba(31, 38, 135, 0.2);
  border-radius: 10px;
  color: #909497;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;
const FormTitle = ({ name }) => {
  return <FormTitleDynamic>{name}</FormTitleDynamic>;
};
const FormTitleDynamic = styled.h3`
  margin: 2em 0 2em 0;
`;
const FormTitleH4 = styled.h4`
  margin: 2em 0 2em 0;
`;

export { FormContainer, FormTitle, FormTitleH4 };
