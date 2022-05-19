import { css, SerializedStyles } from '@emotion/react';

export const getFooterSectionStyles = (): SerializedStyles =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25vh',
    backgroundColor: 'grey',
    img: {
      maxHeight: '15vh',
      maxWidth: '80%',
      padding: '1em',
    },
    p: {
      fontSize: '1.2em',
      fontFamily: 'Montserrat, sans-serif',
      margin: '0.5em',
    },
  });
