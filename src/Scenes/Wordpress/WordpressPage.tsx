import React from 'react';
import axios from 'axios';
import {
  getHeaderStyles,
  getMainStyles,
  getWorksStyles,
} from './WordpressPageStyles';
import { IWorksProps } from '../utils/interfaceWorks';

export const WordpressPage: React.FC = () => {
  const [wordpressWorks, setWordpressWorks] = React.useState<IWorksProps[]>([]);

  React.useEffect(() => {
    axios.get('../../api/Data/works.json').then((res) => {
      const filterData = res.data.filter((obj) => obj.category === 'wordpress');
      setWordpressWorks(filterData);
      console.log(res);
    });
  }, []);

  return (
    <>
      <header css={getHeaderStyles}>
        <h2>WORDPRESS</h2>
      </header>
      <main css={getMainStyles}>
        <p>
          Here you can find some webs made for different clients using Wordpress
        </p>

        <section css={getWorksStyles}>
          {wordpressWorks.map((work, index) => (
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
