import Stats from 'three/addons/libs/stats.module.js';
import { Tickable } from '../world.types';

function createStats() {
  const stats = new Stats();

  const onTick: Tickable = () => stats.update();

  return { stats, onTick };
}

export { createStats };
