import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail } from '../../features/user/userThunk';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const VerifyPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const query = useQuery();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const verifyToken = async () => {
    setLoading(true);
    try {
      const userData = {
        verificationToken: query.get('token'),
        email: query.get('email')
      };
      console.log(userData);
      dispatch(verifyEmail(userData));
    } catch (error) {
      console.log(error.response);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    verifyToken();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <h4>There was an error, please double check your verification link </h4>
    );
  }

  return (
    <Container>
      <Title> Email verifié</Title>
      <Link to="/login" className="btn">
        Cliquez ici pour vous connecter !
      </Link>
    </Container>
  );
};
const Title = styled.h2`
  color: #27ae60;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  top: 5em;
  right: 0;
  left: 0;
  height: 20em;
  background: #ecf0f1;
  && a {
    color: blue;
    text-decoration: underline 0.15em rgba(0, 0, 0, 1);
    text-underline-offset: 0.2em;
    transition: text-decoration-color 300ms, text-underline-offset 600ms;
  }
  a:hover {
    text-decoration-color: rgba(0, 0, 255, 1);
    text-underline-offset: 0.4em;
  }
`;
export default VerifyPage;
