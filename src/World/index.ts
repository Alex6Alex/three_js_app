import { createScene } from './components/scene';
import { createCamera } from './components/camera';
import { createLights } from './components/lights';
import { createGround } from './components/ground';
import { createSky } from './components/sky';
import { createCascadeShadows } from './components/shadows';
import { createStats } from './components/stats';
import { createGUI } from './components/gui';
import { createPositioningInterface } from './components/positioningInterface';

import { loadBuilding } from './components/building';
import { loadBuildings } from './components/buildings';
import { loadTrain } from './components/train';
import { loadRails } from './components/rails';

import { createOrbitControls as createControls } from './systems/controls';
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

    this.scene.add(createGround(), createSky(), ambientLight);

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
    const { building } = await loadBuilding();
    const { buildings } = await loadBuildings();

    const train = await loadTrain();
    const { rails } = await loadRails();

    this.scene.add(building, buildings, rails, train.model);
    this.loop.subscribe(train.onTick);

    createPositioningInterface(createGUI(), train.model);
  }

  run(): void {
    this.loop.run();
  }
}
