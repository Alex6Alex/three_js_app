import * as THREE from 'three';

import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import GrassTexture from '../textures/GrassTexture';
import AppScene from '../Scene';

const clock = new THREE.Clock(true);
let scene: THREE.Scene, controls: FirstPersonControls, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;

export default function run(container: HTMLElement) {
  init(container).then(animate);
}

async function init(container: HTMLElement) {
  scene = new AppScene().load();
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(250, 0, 250);
  const material = new THREE.MeshBasicMaterial({ map: new GrassTexture().load() });
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.y = 1.6;

  controls = new FirstPersonControls(camera, renderer.domElement);
  controls.lookSpeed = 0.1;
  controls.movementSpeed = 10;

  const loader = new GLTFLoader();
  loader.load('/models/the_old_curiosity_shop_2024/scene.gltf', (gltf) => {
    gltf.scene.position.z -= 10;
    gltf.scene.position.y -= 1.2;
    scene.add(gltf.scene);
  }, undefined, (error) => {
    console.error(error);
  });

  loader.load('/models/latin_rock_house.glb', (glb) => {
    glb.scene.position.x += 12;
    glb.scene.position.z += 7;
    glb.scene.position.y -= 0.15;
    scene.add(glb.scene);
  }, undefined, (error) => {
    console.error(error);
  });
}

function animate() {
  requestAnimationFrame(animate);

  controls.update(clock.getDelta());
  camera.position.y = 1.6;

  renderer.render(scene, camera);
}
