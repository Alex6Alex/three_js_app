import { Group, MathUtils, Object3D } from 'three';

import { loadModelAsync } from '../utils/pathResolvers';
import { withShadow } from '../utils/castShadow';

async function loadRails() {
  const rails = new Group();

  const railData = await loadModelAsync('rail');
  let rail = withShadow(railData.scene.children[0]);

  rails.add(rail);

  rail.scale.setScalar(0.0082);
  rail.position.set(-92, 0.2, -100);
  rail.rotateZ(MathUtils.degToRad(90));

  for (let i = 0; i < 30; i++) {
    rail = new Object3D().copy(rail);

    rails.add(rail);
    rail.position.x += 6.47;
  }

  return { rails };
}

export { loadRails };
