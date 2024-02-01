import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.y = 1.6;

  return camera;
}

export { createCamera }
