import { MathUtils } from 'three';

import { loadModelAsync } from '../utils/pathResolvers';
import { withShadow } from '../utils/castShadow';

async function loadBuilding() {
  const buildingData = await loadModelAsync('building');
  const building = withShadow(buildingData.scene.children[0]);

  building.scale.setScalar(0.07);
  building.position.set(0, 6.8, -40);
  building.rotateZ(MathUtils.degToRad(-90));

  return { building };
}

export { loadBuilding };
