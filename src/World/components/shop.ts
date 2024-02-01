import { Scene } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function createShop(scene: Scene) {
  const loader = new GLTFLoader();

  loader.load('/assets/the_old_curiosity_shop_2024/scene.gltf', (gltf) => {
    gltf.scene.position.z -= 10;
    gltf.scene.position.y -= 1.2;
    scene.add(gltf.scene);
  }, undefined, (error) => {
    console.error(error);
  });
}

export { createShop }
