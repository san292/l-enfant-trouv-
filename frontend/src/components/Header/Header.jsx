import React, { useState, useEffect } from 'react';
import Button from '../../UI/button/Button';
import { navLink } from './links';
import styled from 'styled-components';
import { ImMenu } from 'react-icons/im';

import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = () => {
  const [phoneMenu, setPhoneMenu] = useState(false);
  const [width, setWidth] = useState('window.innerWidth');
  const handelPhoneMenu = () => {
    setPhoneMenu(!phoneMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        console.log('ferme menu apres 768');
        setPhoneMenu(false);
      }
    };
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <Wrapper>
      <nav>
        <Link to="/">LOGO</Link>
        {(phoneMenu || width > 768) && (
          <ul>
            {navLink.map((link, idx) => (
              <Link key={idx} to={link.pathname}>
                {link.name}
              </Link>
            ))}
          </ul>
        )}
        <div>
          <Button color="#fff" name="je donne" />
        </div>

        {/* Phone Menu */}
      </nav>
      <menu>
        {phoneMenu ? (
          <IoMdClose className="text-white " onClick={handelPhoneMenu} />
        ) : (
          <ImMenu className="text-white" onClick={handelPhoneMenu} />
        )}
      </menu>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.header`
  background-color: #eee9e9;
  position: fixed;
  width: 100%;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 5rem;
    font-weight: 600;
    font-size: 1rem;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin-top: 26rem;
      color: red;
      padding-left: 0.4rem;
      width: 50%;
    }
  }
  a {
    color: rgb(100 116 139);
    list-style: none;
    margin-right: 30px;
    cursor: pointer;
    a:hover {
      color: #00ff00;
      background-color: white;
    }
    @media screen and (max-width: 768px) {
      margin-top: 0.3rem;
      padding: 4%;
      border-bottom: 1px;
      border-bottom: solid 1px;
      color: gray;
      cursor: pointer;
    }
  }

  logo {
    background-color: #fff;
    padding: 1rem;
    color: #00ff00;
    border-radius: 10px 100px / 120px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      margin-left: 0.1rem;
      position: fixed;
      left: 0.5rem;
    }
  }

  input:hover {
    padding: 0.4rem;
  }
  button {
    border: 0.1rem solid white;
    border-radius: 10px;
    font-weight: 600;
    padding: 0.5rem;
    color: rgb(100 116 139);
    font-size: 1rem;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  menu {
    position: absolute;
    right: 4px;
    top: 30px;
    padding: 0.3rem;
    font-size: 1.2rem;
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
`;
