import { Camera, Scene, WebGLRenderer, Clock } from 'three';

import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';

class Loop {
  private scene;
  private camera;
  private renderer;
  private controls;
  private clock;

  constructor(scene: Scene, camera: Camera, renderer: WebGLRenderer, controls: FirstPersonControls) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.controls = controls;
    this.clock = new Clock(true);
  }

  run(): void {
    requestAnimationFrame(this.run.bind(this));

    this.controls.update(this.clock.getDelta());
    this.camera.position.y = 1.6;

    this.renderer.render(this.scene, this.camera);
  }
}

export { Loop }
