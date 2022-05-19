import React from 'react';
import {
  getButtonStyles,
  getHeaderStyles,
  getMainStyles,
} from '../Github/GithubPageStyles';
import Button from '@mui/material/Button';

export const GithubPage: React.FC = () => {
  return (
    <>
      <header css={getHeaderStyles}>
        <h2>GITHUB</h2>
      </header>
      <main css={getMainStyles}>
        <p>
          Below is the button that will direct you to my Github repository,
          where little by little I am uploading exercises from my Bootcamp, as
          well as small projects that I am creating.
        </p>
      </main>
      <div css={getButtonStyles}>
        <Button
          onClick={() =>
            window.open('https://github.com/rojasAndresTapia', '_blank')
          }
          variant='outlined'
        >
          Github
        </Button>
      </div>
    </>
  );
};
