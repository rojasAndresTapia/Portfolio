import React from 'react';
import { getHeaderStyles, getMainStyles } from './VideoPageStyles';

export const VideoPage: React.FC = () => {
  return (
    <>
      <header css={getHeaderStyles}>
        <h2>VIDEO</h2>
      </header>
      <main css={getMainStyles}>
        <p>
          Here you can find some video edition i did in my previous company work
        </p>
      </main>
    </>
  );
};
