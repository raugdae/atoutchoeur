
import middleBannerFlexbox from './components/css/MiddleBannerFlexbox.module.css'
import cardGrid from './components/css/CardGrid.module.css'

import gridWrapper from './components/css/GridWrapper.module.css'
import itemList from './components/css/ItemList.module.css'


import Image from 'next/image'



export default function Home() {
  return (
    
      <><div className={gridWrapper.gridWrapper}>
      <div className={cardGrid.cardGrid}>
        <div className={itemList.itemCard}>
          <div className={itemList.itemTitle}><h1>Répétitions</h1></div>
          <div className={itemList.itemContent}>
            <p>Lieu : Collège de la Combe</p>
            <p>Localité : Cugy</p>
            <p>Horaire : Mardi de 20h à 22h</p> </div>
        </div>
        <div className={itemList.itemCard}>
          <div className={itemList.itemTitle}>Prochain évènement</div>
          <div className={itemList.itemContent}>
            <p>Ensemble</p>
            <p>55ème anniversaire de la Fanfare de la Police Cantonale Vaudoise</p>
          </div>
        </div>
        <div className={itemList.itemCard}>
          <div className={itemList.itemTitle}>Sur les réseaux sociaux</div>
          <div className={itemList.itemContent}>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </div><div className={middleBannerFlexbox.middleBanner}>
        <div className={middleBannerFlexbox.middleBannerImage}>
          <Image src='/assets/flyer-ensemble.png' alt='Flyer Ensemble' fill className='object-cover' />
        </div>
      </div></>

  );
}