'use strict';

function Sidebar() {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  const motionProps = {
    transition: {
      duration: 1,
      staggerChildren: 0.3
    },
  }


  return html`
    <nav className="sidebar">
      <div className="logo">
        <img src="./Union.svg" />
        Wallgarden
      </div>
      <${motion.div} initial="hidden" animate="visible" variants=${list} ...${motionProps} className="menu menu-1">
        <${motion.div} variants=${item}>
          <${MenuItem} text="Dashboard" />
        </${motion.div}>
        <${motion.div} variants=${item}>
          <${MenuItem} text="NF Collection" />
        </${motion.div}>
        <${motion.div} variants=${item}>
          <${MenuItem} text="Swap" />
        </${motion.div}>
        <${motion.div} variants=${item}>
          <${MenuItem} text="Wallet" />
        </${motion.div}>
        <${motion.div} variants=${item}>
          <${MenuItem} text="Settings" />
        </${motion.div}>
      </${motion.div}>
    </nav>
  `
}

renderComponents(Sidebar, 'rc-sidebar')
