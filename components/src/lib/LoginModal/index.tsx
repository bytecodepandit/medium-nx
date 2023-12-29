import './styles.css';

/* eslint-disable-next-line */
export interface LoginModalProps { }

export function LoginModal(props: LoginModalProps) {
  return (
    <div role="dialog" aria-modal="true" className="n o p jd mn mo mp mq mr an ao iq ap aq ms">
      <div className="mt mu mv mw mx my">
        <div className="pw-susi-modal gs mz na ah cz nb nc nd ne nf ng">
          <div className="gs dc al nh n bc ku ni nj nk nl">
            <div className="nm nn n o dd p bt cv no np nk">
              <h2 className="dl b nq nr ns eb ec">Welcome back.</h2>
              <div className="nt nu ah">
                <h4 className="by b eh eg cb"></h4>
              </div>
              <div className="nv ah">
                <a className="by b eh eg cb nw nb cv nx ny cj ck cp df nz oa ob oc cq cr cs ct cu" href="#" rel="noopener follow">
                  <div className="n o ku">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ah"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z" fill="#4285F4"></path><path d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.41 5.41 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z" fill="#34A853"></path><path d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z" fill="#FBBC05"></path><path d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 3.96 7.96l3 2.33A5.36 5.36 0 0 1 12 6.6z" fill="#EA4335"></path></g></svg>Sign in with Google
                    <div className="od oe ah"></div>
                  </div>
                </a>
                <div className="gz of ah">
                  <a className="by b eh eg cb nw nb cv nx ny cj ck cp df nz oa ob oc cq cr cs ct cu" href="#" rel="noopener follow">
                    <div className="n o ku">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ah"><path d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57V12h2.78l-.45 2.9h-2.33v6.98A10 10 0 0 0 22 12z" fill="#1877F2"></path><path d="M15.9 14.9l.44-2.9h-2.78v-1.87c0-.8.39-1.57 1.63-1.57h1.26V6.1s-1.14-.2-2.24-.2c-2.28 0-3.77 1.4-3.77 3.9V12H7.9v2.9h2.54v6.98a10.07 10.07 0 0 0 3.12 0V14.9h2.33z" fill="#fff"></path></svg>Sign in with Facebook
                      <div className="od oe ah"></div>
                    </div>
                  </a>
                </div>
                <div className="gz of ah">
                  <a className="by b eh eg cb nw nb cv nx ny cj ck cp df nz oa ob oc cq cr cs ct cu" href="#" rel="noopener follow">
                    <div className="n o ku">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="ah"><path d="M18.52 8.23c-.1.09-2 1.18-2 3.62 0 2.82 2.4 3.82 2.48 3.84-.01.06-.38 1.37-1.27 2.7-.78 1.17-1.6 2.34-2.86 2.34-1.25 0-1.58-.75-3.02-.75-1.41 0-1.91.77-3.06.77-1.15 0-1.95-1.08-2.86-2.41A11.9 11.9 0 0 1 4 12.04C4 8.36 6.33 6.4 8.62 6.4c1.22 0 2.23.82 3 .82.73 0 1.86-.87 3.25-.87.52 0 2.4.05 3.65 1.88zm-4.31-3.45c.57-.7.98-1.67.98-2.65 0-.13-.01-.27-.04-.38-.93.04-2.04.64-2.7 1.44a4.2 4.2 0 0 0-1.02 2.58c0 .15.02.3.03.34.06.01.16.03.25.03.84 0 1.9-.58 2.5-1.36z" fill="currentColor"></path></svg>Sign in with Apple
                      <div className="od oe ah"></div>
                    </div>
                  </a>
                </div>
                <div className="gz of ah">
                  <a className="by b eh eg cb nw nb cv nx ny cj ck cp df nz oa ob oc cq cr cs ct cu" href="#" rel="noopener follow">
                    <div className="n o ku">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ah"><path d="M19.1 8.03c.02.17.02.34.02.5 0 5.24-3.69 11.28-10.43 11.28-2 0-3.94-.62-5.62-1.78a6.9 6.9 0 0 0 5.43-1.64 3.72 3.72 0 0 1-3.43-2.75c.55.11 1.12.09 1.66-.07a3.9 3.9 0 0 1-2.94-3.88v-.05c.5.3 1.08.47 1.66.5a4.16 4.16 0 0 1-1.13-5.3 10.16 10.16 0 0 0 7.55 4.14c-.3-1.37.1-2.82 1.06-3.78a3.48 3.48 0 0 1 5.19.17c.82-.18 1.6-.5 2.32-.96-.27.91-.84 1.7-1.6 2.19.72-.1 1.43-.3 2.1-.63a7.8 7.8 0 0 1-1.83 2.06z" fill="#1D9BF0"></path></svg>Sign in with Twitter
                      <div className="od oe ah">
                      </div>
                    </div>
                  </a>
                </div>
                <div className="og ah">
                  <button className="by b eh eg cb nw nb cv nx ny cj ck cp df nz oa ob oc cq cr cs ct cu">
                    <div className="n o ku">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ah"><g stroke="#242424"><rect x="3.5" y="5.5" width="17" height="13" rx="1"></rect><path d="M3.5 8l8.5 6 8.5-6" stroke-linecap="round"></path></g></svg>Sign in with email
                      <div className="od oe ah"></div>
                    </div>
                  </button>
                </div>
                <div className="oh ah">
                  <p className="by b eh eg cb">No account?
                    <button className="ia oi bf bg bh bi bj bk bl bm bn bo bp oj ok ol">
                      <b>Create one</b>
                    </button>
                  </p>
                </div>
                <div className="eo ah">
                  <p className="by b iy ca il">Forgot email or trouble signing in?
                    <a className="bd be bf bg bh bi bj bk bl bm bn bo bp om" href="#" rel="noopener follow" target="_blank">Get help</a>.</p>
                </div>
              </div>
              <div className="on ah oo">
                <p className="by b iy ca il">Click “Sign in” to agree to Medium’s
                  <a className="bd be bf bg bh bi bj bk bl bm bn bo bp om" href="#" rel="noopener follow" target="_blank">Terms of Service</a>
                  and acknowledge that Medium’s <a className="bd be bf bg bh bi bj bk bl bm bn bo bp om" href="#" rel="noopener follow" target="_blank">Privacy Policy</a> applies to you.</p>
              </div></div></div><div className="ah jn or os">
            <button className="bd be bf bg bh bi bj bk bl bm bn bo bp bq br n" data-testid="close-button" aria-label="close">
              <svg className="op oq" width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62" fill-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
