import React, { useState } from 'react';
import './activities.scss';
import FirstActivitiesImage from '../../img/activites_1.jpg';
import SecondActivitiesImage from '../../img/activites_2.jpg';
import ThirdActivitiesImage from '../../img/activites_3.jpg';


const Activites = () => {
  const [activities, setActivities] = useState([
    {
      image: FirstActivitiesImage,
      title: 'Møllerup Hamp',
      body: 'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',
      link: 'Køb produkter her',
      id: 1
    },
    {
      image: FirstActivitiesImage,
      title: 'Møder & events',
      body: 'Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet',
      link: 'Læs mere her',
      id: 2
    },
    {
      image: FirstActivitiesImage,
      title: 'Fest på kroen',
      body: 'Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.',
      link: 'Læs mere',
      id: 3
    },

    {
      image: SecondActivitiesImage,
      title: 'Rundvisninger',
      body: 'Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup.',
      link: 'Læs mere',
      id: 4
    },
    {
      image: SecondActivitiesImage,
      title: 'Hamp hudpleje',
      body: 'Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.',
      link: 'Læs mere',
      id: 5
    },
    {
      image: SecondActivitiesImage,
      title: 'Hamp fødevarer',
      body: 'Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup',
      link: 'Læs mere',
      id: 6
    },

    {
      image: ThirdActivitiesImage,
      title: 'Møllerup bogen',
      body: 'Der er kød og blod på historien. Læs mere om Marsk stig & livet på Møllerup.',
      link: 'Køb bogen her',
      id: 7
    },
    {
      image: ThirdActivitiesImage,
      title: 'Møllerup jagt',
      body: 'Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.',
      link: 'Læs mere her',
      id: 8
    },
    {
      image: ThirdActivitiesImage,
      title: 'Ferie for 40',
      body: 'Nyd en ferie eller weekend på Hubertus Kroen. op til 40 personer inkl pool',
      link: 'Læs mere her',
      id: 9
    },

    {
      image: FirstActivitiesImage,
      title: 'Bolig på landet',
      body: 'Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund',
      link: 'Læs mere her',
      id: 10
    },
    {
      image: FirstActivitiesImage,
      title: 'Hestepension',
      body: 'Giv din hest et sundt ophold, god plads ude og inde i den gamle gerskabsstald.',
      link: 'Læs mere her',
      id: 11
    },
    {
      image: FirstActivitiesImage,
      title: 'Verdensballetten',
      body: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup.',
      link: 'Læs mere her',
      id: 12
    }
  ]);
  return (
    <div className="activitiesContainer">
      <div className="activitiesTxt">
        <h3>Møllerup Gods tilbyder en perlerække af muligheder</h3>
        <p>
          Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, 
          vi er også en virksomhed med højt til loftet, masser af muligheder og 
          god plads til aktiviteter på 425 hektar - for private og erhverv
        </p>
      </div>
      {activities.map(activities => {
        return (
          <div>
            <img src={activities.image} alt="Activites" />
            <div className="activitiesTxt">
              <h3>{activities.title}</h3>
              <p>{activities.body}</p>
              <a href="#">{activities.link}</a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Activites;
