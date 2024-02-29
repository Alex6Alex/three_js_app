import { Object3D } from 'three';
import GUI from 'three/addons/libs/lil-gui.module.min.js';

function createPositioningInterface(gui: GUI, model: Object3D) {
  const positionFolder = gui.addFolder('Position');

  positionFolder.add(model.position, 'x', -100, 100, 0.01);
  positionFolder.add(model.position, 'y', -100, 100, 0.01);
  positionFolder.add(model.position, 'z', -100, 100, 0.01);

  const rotationFolder = gui.addFolder('Rotation');

  rotationFolder.add(model.rotation, 'x', -100, 100, 0.1);
  rotationFolder.add(model.rotation, 'y', -100, 100, 0.25);
  rotationFolder.add(model.rotation, 'z', -100, 100, 0.25);

  const scaleFolder = gui.addFolder('Scale');

  scaleFolder
    .add({ scale: model.scale.x }, 'scale', 0, 10, 0.0001)
    .onChange((value: number) => {
      model.scale.setScalar(value);
    });
}

export { createPositioningInterface };
