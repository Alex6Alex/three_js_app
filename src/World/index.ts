import { createScene } from './components/scene';
import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createGround } from './components/ground';
import { loadBuilding } from './components/building';
import { loadHouse } from './components/house';
import { createTestCube } from './components/test';
import { loadBirds } from './components/birds';

import { createControls } from './systems/controls';
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';

export default class World {
  private scene;
  private loop;

  constructor(container: HTMLElement) {
    this.scene = createScene();

    const { camera, onTick: cameraOnTick } = createCamera();
    const renderer = createRenderer();
    container.append(renderer.domElement);

    const { ambientLight, mainLight } = createLights();
    this.scene.add(createGround(), createTestCube(), mainLight, ambientLight);

    new Resizer(container, camera, renderer);

    const { onTick: controlsOnTick } = createControls(camera, renderer);

    this.loop = new Loop(this.scene, camera, renderer);
    this.loop.subscribe(cameraOnTick, controlsOnTick);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();
    const { house } = await loadHouse();
    const { building } = await loadBuilding();

    this.scene.add(building, house, parrot.model, flamingo.model, stork.model);
    this.loop.subscribe(parrot.onTick, flamingo.onTick, stork.onTick);
  }

  run(): void {
    this.loop.run();
  }
}
