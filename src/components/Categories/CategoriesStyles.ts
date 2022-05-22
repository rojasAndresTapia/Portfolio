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
      backgroundImage: 'url("src/asset/github-background-black-.jpg")',
      ':hover': {
        backgroundImage: 'url("src/asset/github-background-.jpg")',
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Design' && {
      backgroundImage: 'url("src/asset/design-background-black.jpg")',
      ':hover': {
        backgroundImage: 'url("src/asset/design-background.jpg")',
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Wordpress' && {
      backgroundImage: 'url("src/asset/wordpress-background-black.jpg")',
      ':hover': {
        backgroundImage: 'url("src/asset/wordpress-background.jpg")',
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Video' && {
      backgroundImage: 'url("src/asset/video-background-black.jpg")',
      ':hover': {
        backgroundImage: 'url("src/asset/video-background.jpg")',
        transform: 'scale(1.05)',
      },
    }),
    transition: '0.5s',
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '2em',
      fontWeight: 500,
    },
  });
