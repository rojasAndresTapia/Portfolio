import React from 'react';

import { getFooterSectionStyles } from './FooterStyles';

export const Footer: React.FC = () => {
  return (
    <section css={getFooterSectionStyles}>
      <img src='src/asset/logo-Andres.png' />
      <div>
        <p>rojas.tapia.andres@gmail.com</p>
        <p>646165440</p>
      </div>
    </section>
  );
};
