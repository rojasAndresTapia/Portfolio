import { css, SerializedStyles } from '@emotion/react';

export const getHeaderStyles = (): SerializedStyles =>
  css({
    backgroundImage: 'url("src/assets/github-background-black.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    height: '25vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      margin: 0,
      fontSize: '2em',
      color: '#ffffff',
      letterSpacing: '3px',
      fontWeight: 700,
    },
  });

export const getMainStyles = (): SerializedStyles =>
  css({
    header: {
      backgroundImage: 'url("src/assets/github-background-black.jpg")',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '80%',
    margin: 'auto',
    paddingTop: '7vh',
    paddingBottom: '7vh',
    fontFamily: 'Montserrat, sans-serif',
    p: {
      fontSize: '1em',
      color: '#45434C',
      fontWeight: 500,
      letterSpacing: '2px',
      marginBottom: 0,
      lineHeight: '1.5em',
    },
    h2: {
      fontSize: '2em',
      letterSpacing: '2px',
      fontWeight: 700,
      marginTop: 0,
    },
  });
