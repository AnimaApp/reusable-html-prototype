class CryptoCard extends Lit.LitElement {
  static styles = Lit.css`
    :host * {
      box-sizing: border-box;
    }

    .individual-crypto-card {
      background-color: var(--white);
      border-radius: 16px;
      flex: 1;
      height: 80px;
      min-width: 329.5px;
      overflow: hidden;
      position: relative;
    }

    .flex-row {
      align-items: center;
      display: flex;
      height: 50px;
      left: 18px;
      min-width: 293px;
      position: relative;
      top: 15px;
    }

    .ding-container {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-left: 18px;
      min-height: 48px;
      width: 122px;
    }

    .heading {
      align-items: flex-end;
      display: flex;
      gap: 5px;
      position: relative;
      width: fit-content;
    }

    .crypto-code {
      letter-spacing: 0;
      line-height: normal;
      margin-top: -1px;
      position: relative;
      width: fit-content;
    }

    .syne-semi-bold-bright-gray-20px {
      color: var(--bright-gray);
      font-family: var(--font-family-syne-semibold);
      font-size: var(--font-size-xxl);
      font-style: normal;
      font-weight: 600;
    }

    .crypto-name {
      letter-spacing: 0;
      line-height: 20.7px;
      position: relative;
      white-space: nowrap;
      width: fit-content;
    }

    .ibmplexsans-regular-normal-pale-sky-14px {
      color: var(--pale-sky);
      font-family: var(--font-family-ibm_plex_sans-regular);
      font-size: var(--font-size-m);
      font-style: normal;
      font-weight: 400;
    }

    .holding-price {
      letter-spacing: 0;
      line-height: 19.2px;
      white-space: nowrap;
    }

    .ibmplexsans-regular-normal-santas-gray-13px {
      color: var(--santas-gray);
      font-family: var(--font-family-ibm_plex_sans-regular);
      font-size: var(--font-size-s);
      font-style: normal;
      font-weight: 400;
    }

    .holding-in-usd {
      letter-spacing: 0;
      line-height: normal;
      min-height: 26px;
      min-width: 84px;
      text-align: right;
    }

    .variation-2 {
      letter-spacing: 0;
      line-height: 19.2px;
      min-width: 47px;
      text-align: right;
      white-space: nowrap;
    }

    .ibmplexmono-semi-bold-rose-pearl-13px {
      color: var(--rose-pearl);
      font-family: var(--font-family-ibm_plex_mono-semibold);
      font-size: var(--font-size-s);
      font-style: normal;
      font-weight: 600;
    }    
  `

  static properties = {
    text1: { type: String },
    text2: { type: String },
    text3: { type: String },
    text4: { type: String },
    text5: { type: String },
  };

  render() {
    console.log(this)
    return Lit.html`
          <article class="individual-crypto-card">
            <div class="flex-row">
              <div class="ding-container">
                <div class="heading">
                  <div class="crypto-code syne-semi-bold-bright-gray-20px">
                    ${this.text1}
                  </div>
                  <div class="crypto-name ibmplexsans-regular-normal-pale-sky-14px">
                    ${this.text2}
                  </div>
                </div>
                <div class="holding-price ibmplexsans-regular-normal-santas-gray-13px">
                  ${this.text3}
                </div>
              </div>
              <div class="flex-col">
                <div class="holding-in-usd ibmplexmono-bold-bright-gray-20px">
                  ${this.text4}
                </div>
                <div class="variation-2 ibmplexmono-semi-bold-rose-pearl-13px">
                  ${this.text5}
                </div>
              </div>
            </div>
          </article>
    `
  }
}

customElements.define('rc-crypto-card', CryptoCard)