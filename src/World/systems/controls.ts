import { Camera, WebGLRenderer } from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { Tickable } from '../world.types';

function createFirstPersonControls(camera: Camera, renderer: WebGLRenderer) {
  const controls = new FirstPersonControls(camera, renderer.domElement);

  controls.lookSpeed = 0.1;
  controls.movementSpeed = 10;

  const onTick: Tickable = (delta: number) => {
    controls.update(delta);
  };

  return { controls, onTick };
}

function createOrbitControls(camera: Camera, renderer: WebGLRenderer) {
  const controls = new OrbitControls(camera, renderer.domElement);

  const onTick: Tickable = (delta: number) => {
    controls.update(delta);
  };

  return { controls, onTick };
}

export { createFirstPersonControls, createOrbitControls };
