import { Scene, WebGLRenderer, Clock, PerspectiveCamera } from 'three';
import { Tickable } from '../world.types';

class Loop {
  private scene;
  private camera;
  private renderer;
  private clock;
  private subscribers: Tickable[];

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
  ) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.subscribers = [];
    this.clock = new Clock(true);
  }

  subscribe(...objects: Tickable[]): void {
    this.subscribers.push(...objects);
  }

  run(): void {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      this.renderer.render(this.scene, this.camera);
    });
  }

  private tick(): void {
    const delta = this.clock.getDelta();
    this.subscribers.forEach((subsciber) => subsciber(delta));
  }
}

export { Loop };
