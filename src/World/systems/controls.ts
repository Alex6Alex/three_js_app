import { Camera, WebGLRenderer } from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';

function createControls(camera: Camera, renderer: WebGLRenderer) {
  const controls = new FirstPersonControls(camera, renderer.domElement);

  controls.lookSpeed = 0.1;
  controls.movementSpeed = 10;

  return controls;
}

export { createControls }
