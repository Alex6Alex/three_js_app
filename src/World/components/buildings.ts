import { Group, Object3D } from 'three';

import { loadModelAsync } from '../utils/pathResolvers';
import { withShadow } from '../utils/castShadow';

async function loadBuildings() {
  const buildingData = await loadModelAsync('panel_house_9');
  const building = withShadow(buildingData.scene.children[0]);

  building.scale.setScalar(1.3);
  building.position.set(22, 0, 30);

  const buildingCopy = new Object3D();
  buildingCopy.copy(building);

  buildingCopy.position.set(-35.7, 0, 30);

  const buildings = new Group().add(building, buildingCopy);

  return { buildings };
}

export { loadBuildings };
