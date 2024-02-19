import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  const mainLight = new DirectionalLight(0xffffff, 2);

  mainLight.position.set(0, 55, -100);

  const ambientLight = new HemisphereLight(0xedd4c0, 0x3c3c1c, 1.5);

  return { mainLight, ambientLight };
}

export { createLights };
