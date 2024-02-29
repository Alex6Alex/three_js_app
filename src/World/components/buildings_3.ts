import { Group, MathUtils, Object3D } from 'three';

import { loadModelAsync } from '../utils/pathResolvers';
import { withShadow } from '../utils/castShadow';

async function loadBuilding3() {
  const houses = new Group();

  const houseData = await loadModelAsync('panel_house_1');
  const house = withShadow(houseData.scene.children[0]);

  houses.add(house);

  house.scale.setScalar(0.0135);
  house.position.set(70, -0.5, 85);
  house.rotateZ(MathUtils.degToRad(180));

  let houseCopy = new Object3D();
  houseCopy.copy(house);
  houseCopy.position.x = 0;

  houses.add(houseCopy);

  houseCopy = new Object3D();
  houseCopy.copy(house);
  houseCopy.position.x = -70;

  houses.add(houseCopy);

  return { houses };
}

export { loadBuilding3 };
