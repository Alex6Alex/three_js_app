import { loadModelAsync } from '../utils/pathResolvers';

async function loadCar() {
  const carData = await loadModelAsync('dodge_ram');
  const car = carData.scene.children[0];

  car.position.set(12, 0, 12);

  return { car };
}

export { loadCar };
