import { css, SerializedStyles } from '@emotion/react';

export const getHeaderStyles = (): SerializedStyles =>
  css({
    fontFamily: 'Montserrat, sans-serif',
    height: '75vh',
    backgroundImage: 'url("src/asset/header-background.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      backgroundImage: 'url("src/asset/Header-background-image.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    transition: '0.8s',
    h1: {
      fontSize: '3em',
      color: '#ffffff',
      fontWeight: 700,
      letterSpacing: '4px',
      marginBottom: 0,
    },
    h2: {
      fontSize: '2em',
      color: '#ffffff',
      letterSpacing: '2px',
      fontWeight: 500,
      marginTop: 0,
    },
  });

export const getMainStyles = (): SerializedStyles =>
  css({
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
