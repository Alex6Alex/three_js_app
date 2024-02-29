import { Camera, Scene, Vector3 } from 'three';
import { CSM } from 'three/addons/csm/CSM.js';

import { Tickable } from '../world.types';

function createCascadeShadows(scene: Scene, camera: Camera) {
  const cascadeShadows = new CSM({
    maxFar: 1000,
    cascades: 4,
    lightIntensity: 0.5,
    mode: 'practical',
    parent: scene,
    shadowMapSize: 1024,
    lightDirection: new Vector3(0, -0.2, 0.7).normalize(),
    camera,
  });
  cascadeShadows.fade = true;

  const onTick: Tickable = () => {
    cascadeShadows.update();
  };

  return { cascadeShadows, onTick };
}

export { createCascadeShadows };
