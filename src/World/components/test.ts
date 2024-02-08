import { BoxGeometry, Mesh, MeshStandardMaterial, TextureLoader } from 'three';

function createTestCube() {
  const geometry = new BoxGeometry(2, 2, 2);

  const cube = new Mesh(geometry, createMaterial());

  return cube;
}

function createMaterial() {
  const textureLoader = new TextureLoader();

  const map = textureLoader.load('/assets/textures/harshbricks/albedo.png');
  const normalMap = textureLoader.load('/assets/textures/harshbricks/normal.png');
  const metalnessMap = textureLoader.load('/assets/textures/harshbricks/metalness.png');
  const aoMap = textureLoader.load('/assets/textures/harshbricks/ao.png');
  const roughnessMap = textureLoader.load('/assets/textures/harshbricks/roughness.png');
  // const displacementMap = textureLoader.load('/assets/textures/harshbricks/height.png');

  const material = new MeshStandardMaterial({
    map,
    normalMap,
    metalnessMap,
    aoMap,
    roughnessMap,
    // displacementMap
  });

  return material;
}

export { createTestCube }
