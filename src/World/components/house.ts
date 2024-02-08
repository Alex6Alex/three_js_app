import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

async function loadHouse() {
  const loader = new GLTFLoader();

  const houseData = await loader.loadAsync('/assets/models/latin_rock_house.glb')
  const house = houseData.scene.children[0];

  house.position.set(12, -0.15, 12);

  return { house };
}

export { loadHouse }
