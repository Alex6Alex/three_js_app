import { AnimationMixer } from 'three';
import { GLTF } from 'three/addons/loaders/GLTFLoader.js';

import { withShadow } from '../../utils/castShadow';
import { Tickable } from '../../world.types';

function setupModel(data: GLTF) {
  const model = withShadow(data.scene.children[0]);

  const clip = data.animations[0];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);

  action.play();

  const onTick: Tickable = (delta: number) => {
    mixer.update(delta);
    if (model.position.z > 100) model.position.z = 0;
    model.position.z += 0.1;
  };

  return { model, onTick };
}

export { setupModel };
