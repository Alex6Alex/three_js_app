import { MathUtils, Vector3 } from 'three';

import { Sky } from 'three/addons/objects/Sky.js';

function createSky() {
  const sky = new Sky();

  const sun = new Vector3();
  const phi = MathUtils.degToRad(90 - 3);
  const theta = MathUtils.degToRad(180);

  sun.setFromSphericalCoords(1, phi, theta);

  sky.scale.setScalar(45000);

  const uniforms = sky.material.uniforms;
  uniforms['turbidity'].value = 10;
  uniforms['rayleigh'].value = 3;
  uniforms['mieCoefficient'].value = 0.0005;
  uniforms['mieDirectionalG'].value = 0.7;
  uniforms['sunPosition'].value.copy(sun);

  return sky;
}

export { createSky };
