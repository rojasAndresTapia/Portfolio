import React from 'react';
import axios from 'axios';

import { IWorksProps } from '../utils/interfaceWorks';
import {
  getHeaderStyles,
  getMainStyles,
  getWorksStyles,
} from './VideoPageStyles';

export const VideoPage: React.FC = () => {
  const [videoWorks, setVideoWorks] = React.useState<IWorksProps[]>([]);

  React.useEffect(() => {
    axios.get('../../api/Data/works.json').then((res) => {
      const filterData = res.data.filter((obj) => obj.category === 'video');
      setVideoWorks(filterData);
      console.log(filterData);
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
        <section css={getWorksStyles}>
          {videoWorks.map((work, index) => (
            <article key={index}>
              <h3>{work.name}</h3>
              <a href={work.url} target='_blank' rel='noopener noreferrer'>
                <img src={work.image} />
              </a>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};
