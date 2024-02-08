import { Camera, WebGLRenderer } from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';

class WorldControls extends FirstPersonControls implements Tickable {
  tick(delta: number): void {
    this.update(delta);
  }
}

function createControls(camera: Camera, renderer: WebGLRenderer) {
  const controls = new WorldControls(camera, renderer.domElement);

  controls.lookSpeed = 0.1;
  controls.movementSpeed = 10;

  return controls;
}

export { createControls };
