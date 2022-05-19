import React from 'react';
import { getHeaderStyles, getMainStyles } from './WordpressPageStyles';

export const WordpressPage: React.FC = () => {
  return (
    <>
      <header css={getHeaderStyles}>
        <h2>WORDPRESS</h2>
      </header>
      <main css={getMainStyles}>
        <p>
          Here you can find some webs i did for different clients in Wordpress
        </p>
      </main>
    </>
  );
};
