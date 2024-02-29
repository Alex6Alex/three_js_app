import { AnimationMixer, LoopOnce } from 'three';

import { loadModelAsync } from '../utils/pathResolvers';
import { withShadow } from '../utils/castShadow';
import { Tickable } from '../world.types';

async function loadTrain() {
  const trainData = await loadModelAsync('train_ep-20');
  const model = withShadow(trainData.scene.children[0]);

  model.scale.setScalar(0.014);
  model.position.set(-80, 0.47, -100);

  const clip = trainData.animations[0];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);

  action.loop = LoopOnce;
  action.clampWhenFinished = true;
  action.timeScale = 0.7;
  action.play();

  let directionCoef = 1;

  const onTick: Tickable = (delta) => {
    mixer.update(delta);

    const isActionRunning = action.isRunning();

    if (model.position.x >= 80) {
      if (!isActionRunning) action.reset();
      directionCoef = -1;
      model.position.x -= 0.00001;
    } else if (model.position.x <= -80) {
      if (!isActionRunning) action.reset();
      directionCoef = 1;
      model.position.x += 0.00001;
    } else {
      if (!isActionRunning) model.position.x += 0.1 * directionCoef;
    }
  };

  return { model, onTick };
}

export { loadTrain };
