import { css, SerializedStyles } from '@emotion/react';

export const getHeaderStyles = (): SerializedStyles =>
  css({
    backgroundImage: 'url("../../assets/video-background-black.jpg")',
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
      backgroundImage: 'url("../../assets/github-background-black.jpg")',
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

export const getWorksStyles = (): SerializedStyles =>
  css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    article: {
      width: '40%',
      padding: '1em',
    },
    img: {
      width: '100%',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },
  });
