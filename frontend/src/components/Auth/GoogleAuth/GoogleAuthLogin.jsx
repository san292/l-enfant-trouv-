import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { displayName } from '../../../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const GoogleAuthLogin = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleFetch = async (tokenId) => {
    try {
      const res = await fetch('/api/v1/auth/google', {
        method: 'POST',
        body: JSON.stringify({
          tokenId
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      const { name } = data;
      console.log('data', data);
      setUser(data);
      dispatch(displayName(name));
      console.log('user ggole', name);

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        handleFetch(credentialResponse.credential);
      }}
      text="continue_with"
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

export default GoogleAuthLogin;
