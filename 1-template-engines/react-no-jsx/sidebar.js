'use strict';


function Sidebar() {

  return e(
    'nav',
    { className: 'sidebar' },
    e(
      'div',
      { className: 'logo' },
      e(
        'p',
        { className: 'wallgarden' },
        'Wallgarden'
      )
    ),
    e(
      'div',
      { className: "menu menu-1" },
      e(
        MenuItem,
        { text: "Dashboard" },
        null),
      e(
        MenuItem,
        { text: "NF Collection" },
        null),
      e(
        MenuItem,
        { text: "Swap" },
        null),
      e(
        MenuItem,
        { text: "Wallet" },
        null),
      e(
        MenuItem,
        { text: "Settings" },
        null),
    )
  )
}

renderComponents(Sidebar, '[data-component-id="sidebar"]')
