import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactPage } from '../../scenes/Contact/ContactPage';
import { DesignPage } from '../../scenes/Design/DesignPage';
import { GithubPage } from '../../scenes/Github/GihubPage';
import { Home } from '../../scenes/Home/Home';
import { VideoPage } from '../../scenes/Video/VideoPage';
import { WordpressPage } from '../../scenes/Wordpress/WordpressPage';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import { Categories } from '../Categories/Categories';

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
