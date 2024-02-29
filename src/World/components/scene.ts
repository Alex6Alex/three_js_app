import { FogExp2, Scene } from 'three';

function createScene() {
  const scene = new Scene();

  scene.fog = new FogExp2(0xbbbbbb, 0.005);
  return scene;
}

export { createScene };
