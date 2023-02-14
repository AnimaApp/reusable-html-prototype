'use strict';

function CryptoCard({ text1, text2, text3, text4, text5 }) {
  return e(
    'article',
    { className: 'individual-crypto-card' },
    e(
      'div',
      { className: 'flex-row' },
      e(
        'div',
        { className: "ding-container" },
        e(
          'div',
          { className: "heading" },
          e(
            'div',
            { className: "crypto-code syne-semi-bold-bright-gray-20px" },
            text1
          ),
          e(
            'div',
            { className: "crypto-name ibmplexsans-regular-normal-pale-sky-14px" },
            text2
          )),
        e(
          'div',
          { className: "holding-price ibmplexsans-regular-normal-santas-gray-13px" },
          text3
        )
      ),
      e(
        'div',
        { className: 'flex-col' },
        e(
          'div',
          { className: 'holding-in-usd ibmplexmono-bold-bright-gray-20px' },
          text4
        ),
        e(
          'div',
          { className: "variation-2 ibmplexmono-semi-bold-rose-pearl-13px" },
          text5
        )
      )),
  )
}

renderComponents(CryptoCard, '[data-component-id="crypto-card"')
