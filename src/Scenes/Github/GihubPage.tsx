import React from 'react';
import { getButtonStyles, getMainStyles } from '../Github/GithubPageStyles';
import Button from '@mui/material/Button';

export const GithubPage: React.FC = () => {
  return (
    <>
      <main css={getMainStyles}>
        <header>
          <h2>GITHUB</h2>
        </header>
        <p>
          Below is the button that will direct you to my Github repository,
          where little by little I am uploading exercises from my Bootcamp, as
          well as small projects that I am creating.
        </p>
      </main>
      <div css={getButtonStyles}>
        <Button variant='outlined'>Github</Button>
      </div>
    </>
  );
};
