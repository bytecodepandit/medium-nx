import styles from './PreLoginBanner.module.scss';

/* eslint-disable-next-line */
export interface PreLoginBannerProps {
  bannerSvgImage: any;
}

export function PreLoginBanner({ bannerSvgImage }: PreLoginBannerProps) {
  return (
    <div className="cy ah cz">
      <div className="mj ah jn mk ml mm">
        {bannerSvgImage}
      </div>
      <div className="n p"><div className="at au av aw ax ay az al"><div className="al n bc"><div className="da db dc n dd de df dg dh di dj"><div className="dk ah"><h2 className="dl b dm dn do dp dq dr ds dt du dv dw dx dy dz ea eb ec">Stay curious.</h2></div><div className="ed ee ah df"><span className="cw"><h3 className="by b ef eg cb">Discover stories, thinking, and expertise from writers on any topic.</h3></span></div><div className="cx"><span><button className="by b eh eg cd ei cf cg ch ci cj ck cl cm cn co cp ej cq cr cs ct cu cv">Start reading</button></span></div></div></div></div></div>
    </div>
  )
}

export default PreLoginBanner;
