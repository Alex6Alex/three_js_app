import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { setupModel } from './setupModel';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('/assets/models/Parrot.glb'),
    loader.loadAsync('/assets/models/Flamingo.glb'),
    loader.loadAsync('/assets/models/Stork.glb'),
  ]);
  console.log(parrotData);

  const parrot = setupModel(parrotData);
  parrot.scale.setScalar(0.01);
  parrot.position.set(0, 2, -5);

  const flamingo = setupModel(flamingoData);
  flamingo.scale.setScalar(0.01);
  flamingo.position.set(-4, 2, -5);

  const stork = setupModel(storkData);
  stork.scale.setScalar(0.01);
  stork.position.set(4, 2, -5);

  return { parrot, flamingo, stork };
}

export { loadBirds };
