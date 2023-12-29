import { ArticleCard, Header, PreLoginBanner, TrendingArticleCard } from '@medium/components';
import { ReactComponent as BannerImage } from './assets/pre-login-banner.svg'

export default function PreLoginHomePage() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div>
      <div className='ag ah ai'>
        <Header />
        <div className="bb ah"></div>
        <PreLoginBanner bannerSvgImage={<BannerImage />} />
      </div>

      <div className='n dd'>
        <div className='jf ah'>
          <div className='n p'>
            <div className='at au av aw ax ay az al'>
              <div className='hr jg ah'>
                <div className='jh n o bc'>
                  <svg width="28" height="29" viewBox="0 0 28 29" fill="none" className="ji ah"><path fill="#fff" d="M0 .8h28v28H0z"></path><g opacity="0.8" clip-path="url(#trending_svg__clip0)"><path fill="#fff" d="M4 4.8h20v20H4z"></path><circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle><path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" stroke-linecap="round"></path></g><defs><clipPath id="trending_svg__clip0"><path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                  <h2 className="by fn eh ca hs cb">Trending on Medium</h2>
                </div>
                <div className='al ah'>
                  <div className='ew n bc ex ey ez fa fb fc fd fe ff fg fh fi fj fk fl fm'>
                    <TrendingArticleCard />
                    <TrendingArticleCard />
                    <TrendingArticleCard />
                    <TrendingArticleCard />
                    <TrendingArticleCard />
                    <TrendingArticleCard />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='ek ah ib ic id'>
        <div className='n p'>
          <div className='at au av aw ax ay az al'>
            <div className='s t u v w x'>
              <section className='pw-homefeed y z ab ac'>
                <div className='ah'>
                  <div>
                    <div className='kk kl ah'>
                      <ArticleCard />
                      <ArticleCard />
                      <ArticleCard />
                      <ArticleCard />
                      <ArticleCard />
                    </div>
                  </div>
                </div>
              </section>
              <aside className="f ae z af ac">
                <div className="ah ie if">
                  <div className="h k j ig ih">
                    <div className="hh hi hj hk hl hm hn ho hp hq ah">
                      <div className="ah">
                        <div className="hr ah">
                          <h2 className="by fn eh ca hs cb">Discover more of what matters to you</h2>
                        </div>
                        <div className="n ew ex">
                          <div className="hu n">
                            <a className="gt bk bm" rel="noopener follow" href="#">
                              <div className="ce cz et ht kg kh ki by b bz ca cb kj">Programming</div>
                            </a>
                          </div>
                          <div className="hu n">
                            <a className="gt bk bm" rel="noopener follow" href="#">
                              <div className="ce cz et ht kg kh ki by b bz ca cb kj">Programming</div>
                            </a>
                          </div>
                          <div className="hu n">
                            <a className="gt bk bm" rel="noopener follow" href="#">
                              <div className="ce cz et ht kg kh ki by b bz ca cb kj">Programming</div>
                            </a>
                          </div>

                          <div className="hz ah">
                            <p className="by b bz ca ia">
                              <a className="bd be bf bg bh bi bj bk bl bm bn bo bp bq br" rel="noopener follow" href="#">See more topics</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ii n bc ex">
                      <div className="ij ik ah">
                        <a className="bd be bf bg bh bi bj bk bl bm bn bo bp bq br" href="#" rel="noopener follow">
                          <p className="by b bz ca il">Help</p>
                        </a>
                      </div>
                      <div className="ij ah">
                        <a className="bd be bf bg bh bi bj bk bl bm bn bo bp bq br" rel="noopener follow" href=""><p className="by b bz ca il">Teams</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
