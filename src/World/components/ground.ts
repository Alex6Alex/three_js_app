import {
  Mesh,
  TextureLoader,
  RepeatWrapping,
  MeshStandardMaterial,
  PlaneGeometry,
  Texture,
} from 'three';

function createGround() {
  const geometry = new PlaneGeometry(250, 250);
  const material = createMaterial();

  const ground = new Mesh(geometry, material);
  ground.rotation.x = (Math.PI / 180) * -90;

  return ground;
}

function createMaterial() {
  const textureLoader = new TextureLoader();

  return new MeshStandardMaterial({
    map: setWrapOpitons(
      textureLoader.load('/assets/textures/meadow/albedo.png'),
    ),
    normalMap: setWrapOpitons(
      textureLoader.load('/assets/textures/meadow/normal.png'),
    ),
    metalnessMap: setWrapOpitons(
      textureLoader.load('/assets/textures/meadow/metallic.png'),
    ),
    aoMap: setWrapOpitons(textureLoader.load('/assets/textures/meadow/ao.png')),
    roughnessMap: setWrapOpitons(
      textureLoader.load('/assets/textures/meadow/roughness.png'),
    ),
    // displacementMap: setWrapOpitons(textureLoader.load('/assets/textures/meadow/height.png')),
    // wireframe: true,
  });
}

function setWrapOpitons(texture: Texture) {
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);

  return texture;
}

export { createGround };
