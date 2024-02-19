import { BoxGeometry, Mesh, MeshStandardMaterial, TextureLoader } from 'three';

import { pathToTexture } from '../utils/pathResolvers';

function createTestCube() {
  const geometry = new BoxGeometry(2, 2, 2);

  const cube = new Mesh(geometry, createMaterial());
  cube.castShadow = true;
  cube.receiveShadow = true;
  cube.position.y = 1;
  // cube.position.set(0, 55, -1000);

  return cube;
}

function createMaterial() {
  const textureLoader = new TextureLoader();

  const map = textureLoader.load(pathToTexture('harshbricks/albedo'));
  const normalMap = textureLoader.load(pathToTexture('harshbricks/normal'));
  const metalnessMap = textureLoader.load(
    pathToTexture('harshbricks/metalness'),
  );
  const aoMap = textureLoader.load(pathToTexture('harshbricks/ao'));
  const roughnessMap = textureLoader.load(
    pathToTexture('harshbricks/roughness'),
  );
  // const displacementMap = textureLoader.load(pathToTexture('harshbricks/height'));

  const material = new MeshStandardMaterial({
    map,
    normalMap,
    metalnessMap,
    aoMap,
    roughnessMap,
    // displacementMap,
  });

  return material;
}

export { createTestCube };
