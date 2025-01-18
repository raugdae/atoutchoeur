import verticalFlexbox from './components/css/VerticalFlexbox.module.css'
import topBannerFlexbox from './components/css/TopBannerFlexbox.module.css'
import middleBannerFlexbox from './components/css/MiddleBannerFlexbox.module.css'
import cardGrid from './components/css/CardGrid.module.css'
import menuContainer from './components/css/MenuContainer.module.css'
import gridWrapper from './components/css/GridWrapper.module.css'
import itemList from './components/css/ItemList.module.css'
import navigationMenu from './components/css/NavigationMenu.module.css'
import footerFlexbox from './components/css/FooterFlexbox.module.css'

import Image from 'next/image'


export default function Home() {
  return (
    <div className={verticalFlexbox.verticalFlexbox}>
      <div className={topBannerFlexbox.topBanner}>
        <div className={topBannerFlexbox.topBannerImage}>
          <Image src='/assets/top-banner.png' alt='Banniere' fill className='object-cover'/></div>
        </div>
      <div className={gridWrapper.gridWrapper}>
        <div className={menuContainer.menuContainer}>
          <div className={navigationMenu.navigationMenu}>Accueil</div>
          <div className={navigationMenu.navigationMenu}>Présentation</div>
          <div className={navigationMenu.navigationMenu}>Nous rejoindre</div>
          <div className={navigationMenu.navigationMenu}>Nous contacter</div>
        </div>
      </div>
      <div className={gridWrapper.gridWrapper}>
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
      </div>
      <div className={middleBannerFlexbox.middleBanner}>
        <div className={middleBannerFlexbox.middleBannerImage}>
          <Image src='/assets/flyer-ensemble.png' alt='Flyer Ensemble' fill className='object-cover' />
        </div>
      </div>
      <div className={footerFlexbox.footerFlexbox}>
        <div className={footerFlexbox.footerFlexboxItem}>
          Dévelopé par &nbsp;<a href='https://www.raug-info.ch'>raug-info.ch</a>&nbsp;- 2024 - Tout droit réservé
        </div>

      </div>
      
    </div>
  );
}