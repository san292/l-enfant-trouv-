import styled from 'styled-components';
import childPhoto from '../../UI/images/child.jpg';
import { Button } from '../../UI/form/Button';

const Main = () => {
  return (
    <Wrapper>
      <Button className="btn" name="je donne" />
    </Wrapper>
  );
};
export default Main;

const Wrapper = styled.main`
  min-height: calc(100vh);
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${childPhoto}) center/cover no-repeat fixed;
  text-justify: auto;
  position: static;

  button {
    background-color: white;
    color: lime;
    font-size: 1.5rem;
    width: 6rem;
    height: 2rem;
    border-radius: 10%;
    position: absolute;
    top: 30rem;
    left: 10rem;
    button:hover {
      background: lime;
      color: white;
    }
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
`;
