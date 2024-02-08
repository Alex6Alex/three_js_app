import { PerspectiveCamera } from 'three';

class WorldCamera extends PerspectiveCamera implements Tickable {
  tick(): void {
    this.position.y = 1.6;
  }
}

function createCamera() {
  const camera = new WorldCamera(50, 1, 0.1, 1000);
  camera.position.y = 1.6;

  return camera;
}

export { WorldCamera, createCamera }
