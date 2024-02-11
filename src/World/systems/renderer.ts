import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.toneMappingExposure = 0.5;
  renderer.shadowMap.enabled = true;

  return renderer;
}

export { createRenderer };
