import { css } from '@emotion/css'
import { Menu, MenuMobile } from '../../components'


export const PageBanner = ({
  title,
  children,
  banner,
  bannerResponsive,
  textLeft,
  bannerLink,
  bannerLinkTitle
}) => {
    const pageBanner=css`
      background:url(${banner});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 100vh;
      width: 100%;
      @media (min-width:240px) and (max-width:500px){
        background: url(${bannerResponsive}) no-repeat;
        background-size: cover;
        height:50vh;
      }
    `
    const pageBannerBackground=css`
      align-items:center;
      display:flex;
      width:100%;
      height:100%;
      background: rgb(23,42,14);
      background: linear-gradient(90deg, rgba(23,42,14,0.875770376509979) 0%, rgba(61,106,40,0.22591043253238796) 50%, rgba(22,41,13,0.7945378835127801) 100%); 
      justify-content:center;
      padding: 3rem 0;
    `
    const pageTitleBanner=css`
      text-align: center;
      align-items: center;
      color:var(--white-primary);
      display:flex;
      flex-direction: column;
      font-size:1.5rem;
      gap:2rem;
      justify-content: center;
      width:80%;
      height:100%;
      margin: 0 auto;
      /*margin-left: ${!textLeft ? '60%' : '10%'};*/
      /*padding:3rem;*/
      line-height:2.5rem;
      text-align:center;
      @media (min-width:240px) and (max-width:1024px){
        font-size:1.5rem;
        width:100%;
      }
      /*@media (min-width:1200px) and (max-width:1400px){
        width:50%;
        align-items:center;
        margin-left:40%;
        padding:1rem;
      }*/
    `
    const pageBannerText=css`
      text-align:justify;
      overflow-x: hidden;
      overflow-y: scroll;
      
      @media (min-width:240px) and (max-width:1400px){
        padding:1rem;
        background:var(--banner-responsive);
        display:none;
      }
      `
      const pageBannerTitle= css`
        color: var(--white-primary);
        font-size:1.8rem;
      `
    return (
      <>
        <section
          className={pageBanner}
        >
          <div
            
            className={pageBannerBackground}
          >
            <div
              className={pageTitleBanner}
            >
              <h1>{title}</h1>
              {
                !bannerLink ? null
                :
                <a
                  href={bannerLink}
                  className={pageBannerTitle}
                >
                    {bannerLinkTitle}
                </a>
              }
            </div>
          </div>
        </section>
        <Menu />
        <MenuMobile />
      </>
    );
};