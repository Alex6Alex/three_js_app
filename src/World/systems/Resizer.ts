import { PerspectiveCamera, WebGLRenderer } from 'three';

class Resizer {
  constructor(container: HTMLElement, camera: PerspectiveCamera, renderer: WebGLRenderer) {
    this.setSize(container, camera, renderer);

    window.addEventListener('resize', () => {
      this.setSize(container, camera, renderer);
    })
  }

  private setSize(container: HTMLElement, camera: PerspectiveCamera, renderer: WebGLRenderer): void {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  }
}

export { Resizer }
