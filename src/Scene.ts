import { Scene, CubeTextureLoader } from "three"

export default class AppScene {
  scene: Scene;

  constructor() {
    this.scene = new Scene();
    this.scene.background = new CubeTextureLoader().setPath('/models/sky_box/').load([
      'px.bmp', 'nx.bmp',
      'py.bmp', 'ny.bmp',
      'pz.bmp', 'nz.bmp',
    ]);
  }

  load(): Scene {
    return this.scene;
  }
}
