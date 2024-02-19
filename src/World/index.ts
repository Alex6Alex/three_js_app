import { createScene } from './components/scene';
import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createGround } from './components/ground';
import { createSky } from './components/sky';
import { createCascadeShadows } from './components/shadows';
import { createTestCube } from './components/test';
import { createStats } from './components/stats';

import { loadBuilding } from './components/building';
import { loadBirds } from './components/birds';

import { createFirstPersonControls as createControls } from './systems/controls';
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

    const { stats, onTick: statsOnTick } = createStats();
    container.append(stats.dom);

    const { ambientLight } = createLights();
    const { onTick: shadowsOnTick } = createCascadeShadows(this.scene, camera);

    this.scene.add(createGround(), createTestCube(), createSky(), ambientLight);

    new Resizer(container, camera, renderer);

    const { onTick: controlsOnTick } = createControls(camera, renderer);

    this.loop = new Loop(this.scene, camera, renderer);
    this.loop.subscribe(
      cameraOnTick,
      controlsOnTick,
      statsOnTick,
      shadowsOnTick,
    );
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();
    const { building } = await loadBuilding();

    this.scene.add(building, parrot.model, flamingo.model, stork.model);
    this.loop.subscribe(parrot.onTick, flamingo.onTick, stork.onTick);
  }

  run(): void {
    this.loop.run();
  }
}
