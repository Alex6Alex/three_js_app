import { Scene, CubeTextureLoader } from 'three';

function createScene() {
  const scene = new Scene();

  scene.background = new CubeTextureLoader().setPath('/models/sky_box/').load([
    'px.bmp', 'nx.bmp',
    'py.bmp', 'ny.bmp',
    'pz.bmp', 'nz.bmp',
  ]);

  return scene;
}

export { createScene }
