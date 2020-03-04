import React from 'react';
import './danskekonference.scss';
import KonferenceLogo from '../../img/DKBSlogo_new.png';

const DanskeKonference = () => {
  return (
    <div className="DanskeKonference">
      <img src={KonferenceLogo} alt="DanskeKonferenceCentre" />
      <p>Møllerup Gods er autoriseret partner hos Danske Konferencecentre</p>
    </div>
  )
}

export default DanskeKonference;
