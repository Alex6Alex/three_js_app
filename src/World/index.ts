import { createScene } from './components/scene';
import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createGround } from './components/ground';
import { loadShop } from './components/shop';
import { loadHouse } from './components/house';
import { createTestCube } from './components/test';
import { loadBirds } from './components/birds';

import { createControls } from './systems/controls';
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';

export default class World {
  private scene;
  private controls;
  private camera;
  private renderer;
  private loop;

  constructor(container: HTMLElement) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    const { ambientLight, mainLight } = createLights();
    this.scene.add(createGround(), createTestCube(), mainLight, ambientLight);

    new Resizer(container, this.camera, this.renderer);

    this.controls = createControls(this.camera, this.renderer);

    this.loop = new Loop(this.scene, this.camera, this.renderer);
    this.loop.subscribe(this.camera, this.controls);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();
    const { house } = await loadHouse();
    const { shop } = await loadShop();

    this.scene.add(shop, house, parrot, flamingo, stork);
  }

  run(): void {
    this.loop.run();
  }
}
