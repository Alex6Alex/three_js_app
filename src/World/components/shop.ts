import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

async function loadShop() {
  const loader = new GLTFLoader();

  const shopData = await loader.loadAsync('/assets/models/old_shop/scene.gltf');
  const shop = shopData.scene.children[0];

  shop.position.set(0, -1.2, -10);

  return { shop };
}

export { loadShop };
