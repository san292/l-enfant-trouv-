import { navLink } from './links';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ImMenu } from 'react-icons/im';
import AsideBar from './AsideBar';
import { useState } from 'react';

const HeaderTest = () => {
  const [toggleSideBar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSideBar);
  };

  return (
    <>
      <Wrapper>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">Logo</Link>
            <button className="nav-btn">
              <ImMenu onClick={handleToggleSidebar} />
            </button>
          </div>
          <ul className="nav-links">
            {navLink.map((link, idx) => {
              const { pathname, name } = link;

              return (
                <li key={idx}>
                  <Link to={pathname}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>

      {toggleSideBar && (
        <AsideBar
          toggleBar={toggleSideBar}
          handleToggleSidebar={handleToggleSidebar}
        />
      )}
    </>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  background: var(--ff-primary);
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-links {
    display: none;
  }

  .nav-btn {
    background: transparent;
    border: none;
  }

  @media (min-width: 768px) {
    .nav-btn {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        display: inline-block;
        margin: 0 1rem;
      }
      a {
        display: inline-block;
        color: var(--clr-grey-1);
        font-size: 0.65rem;
        text-transform: capitalize;
        letter-spacing: 0.25rem;
        padding: 0.5rem;
        &:hover {
          border-bottom: 1px solid var(--clr-Blue-1);
          color: var(--clr-Blue-1);
        }
      }
    }
  }
`;
export default HeaderTest;
