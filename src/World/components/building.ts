import { loadModelAsync } from '../utils/pathResolvers';
import { withShadow } from '../utils/castShadow';

async function loadBuilding() {
  const buildingData = await loadModelAsync('building');
  const building = withShadow(buildingData.scene.children[0]);

  building.position.set(0, 0.01, -40);

  return { building };
}

export { loadBuilding };
