import { Scene } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function createHouse(scene: Scene) {
  const loader = new GLTFLoader(); // TODO: use only one loader?

  loader.load('/assets/latin_rock_house.glb', (glb) => {
    glb.scene.position.x += 12;
    glb.scene.position.z += 7;
    glb.scene.position.y -= 0.15;
    scene.add(glb.scene);
  }, undefined, (error) => {
    console.error(error);
  });
}

export { createHouse }
