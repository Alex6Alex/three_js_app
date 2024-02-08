import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  const mainLight = new DirectionalLight(0xffffff, 2.5);
  mainLight.position.set(10, 250, -100);

  const ambientLight = new HemisphereLight(0xffffff, 0x2f4f4f, 3);

  return { mainLight, ambientLight };
}

export { createLights }
