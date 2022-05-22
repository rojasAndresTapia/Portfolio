import React from 'react';
import axios from 'axios';

import { IWorksProps } from '../utils/interfaceWorks';
import { getHeaderStyles, getMainStyles } from './VideoPageStyles';

export const VideoPage: React.FC = () => {
  const [videoWorks, setVideoWorks] = React.useState<IWorksProps[]>([]);

  React.useEffect(() => {
    axios.get('../../api/Data/works.json').then((res) => {
      const filterData = res.data.filter((obj) => obj.category === 'video');
      setVideoWorks(filterData);
    });
  }, []);
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
