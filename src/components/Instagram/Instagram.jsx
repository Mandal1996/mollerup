import React from 'react';
import './instagram.scss';
import InstagramEmbed from 'react-instagram-embed';

const Instagram = () => {
  return (
    <div className="instaGrid">
      <div className="instaContainer">
        <InstagramEmbed
          url='https://instagr.am/p/Zw9o4/'
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />
      </div>

      <div className="newsletter">
        <form>
          <h2>Tilmeld nyhedsbrev</h2>
          <p><span>*</span> skal udfyldes</p>

          <label htmlFor="Email">Email Adress <span>*</span></label>
          <input className="inputFelt" type="text" required />

          <label htmlFor="FirstName">First Name</label>
          <input className="inputFelt" type="text" />

          <label htmlFor="LastName">Efternavn</label>
          <input className="inputFelt" type="text" />

          <h3>Vælg nyhedsbrev</h3>
          <div>
            <input className="inputCheckbox" type="checkbox" name="" id="" />
            <label className="checkLabel" htmlFor="">Møllerup - alle</label>
          </div>
          <div>
            <input className="inputCheckbox" type="checkbox" name="" id="" />
            <label className="checkLabel" htmlFor="">Verdensballetten</label>
          </div>
          <div>
            <input className="inputCheckbox" type="checkbox" name="" id="" />
            <label className="checkLabel" htmlFor="">Møllerup Hamp</label>
          </div>
          <input type="submit" value="Tilmeld" />
        </form>
      </div>
    </div>
  )
}

export default Instagram;
