import React, { useState } from 'react';
import './news.scss';
import BalletGods from '../../img/Verdensballet_paa_Moellerup_Gods_1280x1280-1.jpg';
import HampeProdukter from '../../img/hampeprodukter.jpg';
import VerdensBalletten from '../../img/Verdensballet_paa_Moellerup_Gods_dansere_1280x1280-1.jpg';
import HistorieHus from '../../img/hus.jpg';

const News = () => {
  const [news, setNews] = useState([
    {
      image: HampeProdukter, title: 'Køb vores hampeprodukter',
      body: 'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark og resultatet er en række gode produkter som du kan købe her på webshoppen..',
      link: 'Køb online her',
      id: 1
    },
    {
      image: VerdensBalletten,
      title: 'Verdensballetten 2019', body: 'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånde blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods',
      link: 'Se mere her',
      id: 2
    },
    {
      image: HistorieHus, title: 'Historien om Møllerup Gods',
      body: 'Marsk Stig andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møkkerup. Møllerup var hans vigtigste besiddelse. Gården lå, som idag, med en borg på øen og avlsbygninger på den anden side af voldgraven.',
      link: 'Læs historien her',
      id: 3
    }
  ]);
  return (
    <div className="newsContainer">
      <div className="bigNews">
        <img src={BalletGods} alt="Verdensballetten" />
        <div className="bigNewsTxt">
          <h3>Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften</h3>
          <p>Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020</p>
          <a href="#">Læs mere her</a>
        </div>
      </div>

      <div className="responsiveGrid">
        {news.map(news => {
          return (
            <div className="smallNews">
              <img src={news.image} alt="News" />
              <div className="smallNewsTxt">
                <h3>{news.title}</h3>
                <p>{news.body}</p>
                <a href="#">{news.link}</a>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default News;