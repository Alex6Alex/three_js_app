import { BoxGeometry, MeshBasicMaterial, Mesh, TextureLoader, RepeatWrapping } from 'three';

function createGround() {
  const geometry = new BoxGeometry(250, 0, 250);
  const material = new MeshBasicMaterial({ map: createTexture() });

  const ground = new Mesh(geometry, material);

  return ground;
}

function createTexture() {
  const texture = new TextureLoader().load('/assets/Grass_Texture.png');
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(200, 200);

  return texture;
}

export { createGround }
