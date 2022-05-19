import React from 'react';
import axios from 'axios';
import { getCategoriesStyles, getSectionStyles } from './CategoriesStyles';
import { useNavigate } from 'react-router-dom';

export const Categories: React.FC = () => {
  interface Categories {
    name: string;
    url: string;
    backgroundImage: string;
    backgroundImageHover: string;
  }

  const [categories, setCategories] = React.useState<Categories[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    axios.get('src/Models/categories.json').then((res) => {
      setCategories(res.data);
      console.log(categories);
    });
  }, []);

  const handleOnclick = () => {
    const path = '/Design';
    navigate(path);
  };

  return (
    <section css={getSectionStyles}>
      {categories.map((category, index) => (
        <a
          href={category.url}
          key={index}
          id={category.name}
          css={getCategoriesStyles(category.name)}
          onClick={handleOnclick}
        >
          <h3>{category.name}</h3>
        </a>
      ))}
    </section>
  );
};
