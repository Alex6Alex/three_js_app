import { Object3D, Mesh } from 'three';

function withShadow(model: Object3D) {
  model.traverse((node) => {
    if ((node as Mesh).isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  return model;
}

export { withShadow };
