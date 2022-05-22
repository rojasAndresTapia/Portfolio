import React from 'react';
import axios from 'axios';

import { IWorksProps } from '../utils/interfaceWorks';

import {
  getHeaderStyles,
  getMainStyles,
  getWorksStyles,
} from './DesignPageStyles';

export const DesignPage: React.FC = () => {
  const [designWorks, setDesignWorks] = React.useState<IWorksProps[]>([]);

  React.useEffect(() => {
    axios.get('src/api/Data/works.json').then((res) => {
      const filterData = res.data.filter((obj) => obj.category === 'design');
      setDesignWorks(filterData);
      console.log(filterData);
    });
  }, []);
  return (
    <>
      <header css={getHeaderStyles}>
        <h2>DESIGN</h2>
      </header>
      <main css={getMainStyles}>
        <p>Here you can find some of my work</p>
        <section css={getWorksStyles}>
          {designWorks.map((work, index) => (
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
