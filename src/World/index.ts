import { createScene } from './components/scene';
import { createCamera } from './components/camera';
import { createGround } from './components/ground';
import { createShop } from './components/shop';
import { createHouse } from './components/house';

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

    this.scene.add(createGround());

    new Resizer(container, this.camera, this.renderer);

    this.controls = createControls(this.camera, this.renderer);

    this.loop = new Loop(this.scene, this.camera, this.renderer, this.controls);

    createShop(this.scene);
    createHouse(this.scene); // TODO: not to pass scene?
  }

  render(): void {
    this.loop.run();
  }
}
