import { Header, PreLoginBanner } from '@medium/components';
import { ReactComponent as BannerImage }  from './assets/pre-login-banner.svg'

export default function PostLoginHomePage() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className='ag ah ai'>
      <Header />
      <div className="bb ah"></div>
      <PreLoginBanner bannerSvgImage={<BannerImage/>} />
    </div>
  );
}
