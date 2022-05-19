import React from 'react';
import { getHeaderStyles, getMainStyles } from './DesignPageStyles';

export const DesignPage: React.FC = () => {
  return (
    <>
      <header css={getHeaderStyles}>
        <h2>DESIGN</h2>
      </header>
      <main css={getMainStyles}>
        <p>Here you can find some of my work</p>
      </main>
    </>
  );
};
