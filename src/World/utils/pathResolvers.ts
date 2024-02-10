import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function pathToModel(modelName: string): string {
  return `/assets/models/${modelName}.glb`;
}

function pathToTexture(textureName: string): string {
  return `/assets/textures/${textureName}.png`;
}

function loadModelAsync(modelName: string): Promise<GLTF> {
  const loader = new GLTFLoader();

  return loader.loadAsync(pathToModel(modelName));
}

export { loadModelAsync, pathToTexture };
