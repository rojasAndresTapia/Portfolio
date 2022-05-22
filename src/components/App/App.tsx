import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactPage } from '../../Scenes/Contact/ContactPage';
import { DesignPage } from '../../Scenes/Design/DesignPage';
import { Home } from '../../Scenes/Home/Home';
import { VideoPage } from '../../Scenes/Video/VideoPage';
import { WordpressPage } from '../../Scenes/Wordpress/WordpressPage';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import { Categories } from '../Categories/Categories';
import { GithubPage } from '../../Scenes/Github/GihubPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Github' element={<GithubPage />} />
        <Route path='/Design' element={<DesignPage />} />
        <Route path='/Wordpress' element={<WordpressPage />} />
        <Route path='/Video' element={<VideoPage />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
      <Categories />
      <Footer />
    </BrowserRouter>
  );
};
