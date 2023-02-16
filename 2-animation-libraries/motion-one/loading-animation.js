// IIFE due to lack of modules
(function () {
  // set timeout to ensure that the components have rendered when this fies
  setTimeout(() => {

    const sequence = [
      ["nav .logo", { x: 100 }, { duration: 1 }],
      [".initial-invisible", { opacity: 1 }, { duration: 1, delay: Motion.stagger(0.3) }]
    ];

    Motion.timeline(sequence)
  }, 300);
})()