import React from 'react';
import { getHeaderStyles, getMainStyles } from './HomeStyles';

export const Home: React.FC = () => {
  return (
    <>
      <header css={getHeaderStyles}>
        <h1>ANDRÉS ROJAS</h1>
        <h2>FRONT END DEVELOPER</h2>
      </header>
      <main css={getMainStyles}>
        <h2>ABOUT ME</h2>
        <p>
          Soy diseñador gráfico y maquetador web de origen chileno. Estudié
          Dirección de hoteles en Santiago, y después de mi primera experiencia
          laboral en el area de RR.HH., decidí viajar y abrir mi mente a nuevas
          oportunidades. Desde el 2010, resido en España. He trabajado en
          diferentes proyectos diseñando webs, imagen corporativa e imagen
          digital y video. Actualmente, soy responsable del área de diseño y
          soporte de una empresa que ha desarrollado un software para compañías
          constructoras e instaladoras, facilitando su proceso de transformación
          digital. Actualmente, estoy ampliando mis competencias en el area de
          desarrollo web través del Master Front End de Lemoncode.
        </p>
      </main>
    </>
  );
};
