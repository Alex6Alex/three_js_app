import { DirectionalLight, HemisphereLight, MathUtils } from 'three';

function createLights() {
  const mainLight = new DirectionalLight(0xffffff, 2);

  const phi = MathUtils.degToRad(90 - 3);
  const theta = MathUtils.degToRad(180);

  mainLight.position.setFromSphericalCoords(1, phi, theta);
  mainLight.castShadow = true;

  const ambientLight = new HemisphereLight(0xedd4c0, 0x3c3c1c, 1.5);

  return { mainLight, ambientLight };
}

export { createLights };
