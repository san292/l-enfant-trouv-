import React, { useState } from 'react';
import styled from 'styled-components';

export const useShowMoreText = ({ children, limit }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      {readMore ? children : children.substring(0, limit)}

      <UsButtonShowMore
        onClick={() => {
          setReadMore(() => !readMore);
        }}
      >
        {readMore ? '...Lire moins' : ' ...Lire plus'}
      </UsButtonShowMore>
    </>
  );
};

const UsButtonShowMore = styled.button`
  margin-left: 1rem;
  border: 0.1rem solid var(--clr-secondary);
  width: 5rem;
  height: 2rem;
  color: var(--clr-grey-5);
  padding: 0.2rem 0;
  background-color: var(--clr-white);
  border-radius: var(--radius);
  &:hover {
    color: var(--clr-green);
    background-color: var(--clr-white);
    transition-duration: 0.4s;
  }
`;
