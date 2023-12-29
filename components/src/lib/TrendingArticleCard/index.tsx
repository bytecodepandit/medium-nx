import styles from './TrendingArticleCard.module.scss';

/* eslint-disable-next-line */
export interface TrendingArticleCardProps { }

export function TrendingArticleCard(props: TrendingArticleCardProps) {
  return (
    <div className="fs ft fu fv fw fx fy fz ga gb gc gd ge gf gg gh gi gj gk gl gm">
      <div className="al dc">
        <div className="pw-trending-post gn dc al n ew">
          <div className="go jk ah hx cz gp">
            <span className="by fn fo fp fq fr">01</span>
          </div>
          <div className="n dd">
            <div className="ij ah">
              <div className="n o bc">
                <a rel="noopener follow" href="#">
                  <div className="ah cz">
                    <img alt="Adam Scotti" className="ah cs jm gu gv et" src="https://miro.medium.com/v2/resize:fill:40:40/1*AJz2FIVfzj3s3kFqJfPsQA.jpeg" width="20" height="20" loading="lazy" />
                    <div className="jl jm ah gu gv jn ao jo jp">
                    </div>
                  </div>
                </a>
                <div className="jq n o ex">
                  <div className="gy ah">
                    <div>
                      <div className="ah" aria-hidden="false" aria-describedby="61" aria-labelledby="61">
                        <div className="n o">
                          <a className="bd be bf bg bh bi bj bk bl bm bn bo bp bq br" rel="noopener follow" href="#">
                            <h4 className="by fn iy jr cy js jt ju jv jw jx jy cb jz">Adam Scotti</h4>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ij ah">
              <a className="bd be bf bg bh bi bj bk bl bm bn bo bp bq br" href="https://cdnadamscotti.medium.com/2023-with-prime-minister-trudeau-b338e8ee1e57?source=home---------0---------------------7ca201d9_4f08_470c_8262_b2b23b8d6cba-------7" rel="noopener follow">
                <div className="">
                  <h2 className="by ka eh ca cy kb jt ju kc jw jy hs cb">2023 with Prime Minister Trudeau</h2>
                </div>
              </a>
            </div>
            <span className="by b iy ca il">
              <div className="n o">
                <span>Dec 28</span>
                <div className="kd ke ah" aria-hidden="true">
                  <span className="ah" aria-hidden="true">
                    <span className="by b bz ca il">·</span>
                  </span>
                </div>
                <span className="pw-reading-time by b iy ca il">15 min read</span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingArticleCard;
