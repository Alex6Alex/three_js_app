import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

function createGUI() {
  const panel = new GUI({ width: 400 });

  return panel;
}

export { createGUI };
