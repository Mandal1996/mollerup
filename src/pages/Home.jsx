import React from 'react';
import Slider from '../components/Slider/Slider';
import News from '../components/News/News';
import Activites from '../components/Activities/Activites';
import DanskeKonference from '../components/DanskeKonference/DanskeKonference';
import Instagram from '../components/Instagram/Instagram';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Slider />
      <News />
      <Activites />
      <DanskeKonference />
      <Instagram />
      <Footer />
    </div>
  )
}

export default Home;
