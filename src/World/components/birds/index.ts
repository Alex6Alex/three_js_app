import { setupModel } from './setupModel';
import { loadModelAsync } from '../../utils/pathResolvers';

async function loadBirds() {
  const [parrotData, flamingoData, storkData] = await Promise.all([
    loadModelAsync('Parrot'),
    loadModelAsync('Flamingo'),
    loadModelAsync('Stork'),
  ]);

  const parrot = setupModel(parrotData);
  parrot.model.scale.setScalar(0.01);
  parrot.model.position.set(0, 2, -5);

  const flamingo = setupModel(flamingoData);
  flamingo.model.scale.setScalar(0.01);
  flamingo.model.position.set(-4, 2, -5);

  const stork = setupModel(storkData);
  stork.model.scale.setScalar(0.01);
  stork.model.position.set(4, 2, -5);

  return { parrot, flamingo, stork };
}

export { loadBirds };
