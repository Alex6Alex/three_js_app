import {
  Mesh,
  TextureLoader,
  RepeatWrapping,
  MeshStandardMaterial,
  PlaneGeometry,
  Texture,
} from 'three';

import { pathToTexture } from '../utils/pathResolvers';

function createGround() {
  const geometry = new PlaneGeometry(250, 250, 250, 250);
  const material = createMaterial();

  const ground = new Mesh(geometry, material);
  ground.position.y = -0.45;
  ground.rotation.x = (Math.PI / 180) * -90;
  ground.receiveShadow = true;

  return ground;
}

function createMaterial() {
  const textureLoader = new TextureLoader();

  return new MeshStandardMaterial({
    map: setWrapOpitons(textureLoader.load(pathToTexture('meadow/albedo'))),
    normalMap: setWrapOpitons(
      textureLoader.load(pathToTexture('meadow/normal')),
    ),
    metalnessMap: setWrapOpitons(
      textureLoader.load(pathToTexture('meadow/metallic')),
    ),
    aoMap: setWrapOpitons(textureLoader.load(pathToTexture('meadow/ao'))),
    roughnessMap: setWrapOpitons(
      textureLoader.load(pathToTexture('meadow/roughness')),
    ),
    displacementMap: setWrapOpitons(
      textureLoader.load(pathToTexture('meadow/height')),
    ),
  });
}

function setWrapOpitons(texture: Texture) {
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);

  return texture;
}

export { createGround };
