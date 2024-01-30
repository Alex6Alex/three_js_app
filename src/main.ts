import * as THREE from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xe0e2db);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load('/models/Grass_Texture.png');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(20, 20);

const geometry = new THREE.BoxGeometry(25, 0, 25);
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// SKY

scene.background = new THREE.CubeTextureLoader().setPath('/models/sky_box/').load([
  'px.bmp', 'nx.bmp',
  'py.bmp', 'ny.bmp',
  'pz.bmp', 'nz.bmp',
]);

// SKY End

camera.position.y = 1.6;

// addEventListener('keydown', (event) => {
//   console.log(event);

//   switch (event.key) {
//     case 'w': {
//       camera.position.z -= 0.1;
//       break;
//     }
//     case 's': {
//       camera.position.z += 0.1;
//       break;
//     }
//     case 'a': {
//       camera.position.x -= 0.1;
//       break;
//     }
//     case 'd': {
//       camera.position.x += 0.1;
//       break;
//     }
//   }
// });

const controls = new FirstPersonControls(camera, renderer.domElement);
controls.lookSpeed = 0.1;
controls.movementSpeed = 10;

const clock = new THREE.Clock(true);

const loader = new GLTFLoader();
loader.load('/models/the_old_curiosity_shop_2024/scene.gltf', (gltf) => {
  gltf.scene.position.z -= 10;
  gltf.scene.position.y -= 1.2;
  scene.add(gltf.scene);
}, undefined, (error) => {
  console.error(error);
});

// loader.load('/models/low_poly_winter_scene/scene.gltf', (glb) => {
//   glb.scene.position.z += 10;
//   glb.scene.position.y -= 0.7;
//   scene.add(glb.scene);
// }, undefined, (error) => {
//   console.error(error);
// });

loader.load('/models/latin_rock_house.glb', (glb) => {
  glb.scene.position.x += 12;
  glb.scene.position.z += 7;
  glb.scene.position.y -= 0.15;
  scene.add(glb.scene);
}, undefined, (error) => {
  console.error(error);
});

function animate() {
  requestAnimationFrame(animate);

  controls.update(clock.getDelta());
  camera.position.y = 1.6;

  // if (camera.position.x > cube.)

  renderer.render(scene, camera);
}

animate();
