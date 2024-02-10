import { loadModelAsync } from '../utils/pathResolvers';

async function loadBuilding() {
  const buildingData = await loadModelAsync('building');
  const building = buildingData.scene.children[0];

  building.position.set(0, 0.01, -40);

  return { building };
}

export { loadBuilding };
