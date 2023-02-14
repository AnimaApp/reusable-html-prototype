'use strict';

function CryptoCard({ text1, text2, text3, text4, text5 }) {
  return html`
    <article className="individual-crypto-card">
      <div className="flex-row">
        <div className="ding-container">
          <div className="heading">
            <div className="crypto-code syne-semi-bold-bright-gray-20px">
              ${text1}
            </div>
            <div className="crypto-name ibmplexsans-regular-normal-pale-sky-14px">
              ${text2}
            </div>
          </div>
          <div className="holding-price ibmplexsans-regular-normal-santas-gray-13px">
            ${text3}
          </div>
        </div>
        <div className="flex-col">
          <div className="holding-in-usd ibmplexmono-bold-bright-gray-20px">
            ${text4}
          </div>
          <div className="variation-2 ibmplexmono-semi-bold-rose-pearl-13px">
            ${text5}
          </div>
        </div>
      </div>
    </article>
  `
}

renderComponents(CryptoCard, '[data-component-id="crypto-card"')