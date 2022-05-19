import { css, SerializedStyles } from '@emotion/react';

export const getSectionStyles = (): SerializedStyles =>
  css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  });

export const getCategoriesStyles = (categoryName: string): SerializedStyles =>
  css({
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#ffffff',
    height: '35vh',
    textDecoration: 'none',
    ...(categoryName === 'Github' && {
      backgroundImage: 'url("src/assets/github-background-black.jpg")',
      ':hover': {
        backgroundImage: 'url("src/assets/github-background.jpg")',
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Design' && {
      backgroundImage: 'url("src/assets/design-background-black.jpg")',
      ':hover': {
        backgroundImage: 'url("src/assets/design-background.jpg")',
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Wordpress' && {
      backgroundImage: 'url("src/assets/github-background-black.jpg")',
      ':hover': {
        backgroundImage: 'url("src/assets/github-background.jpg")',
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Video' && {
      backgroundImage: 'url("src/assets/design-background-black.jpg")',
      ':hover': {
        backgroundImage: 'url("src/assets/design-background.jpg")',
        transform: 'scale(1.05)',
      },
    }),
    transition: '0.5s',
    h3: {
      fontSize: '2em',
    },
  });
