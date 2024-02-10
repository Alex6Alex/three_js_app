import { loadModelAsync } from '../utils/pathResolvers';

async function loadHouse() {
  const houseData = await loadModelAsync('latin_rock_house');
  const house = houseData.scene.children[0];

  house.position.set(12, -0.15, 12);

  return { house };
}

export { loadHouse };
