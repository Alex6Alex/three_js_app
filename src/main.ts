import World from './World';

async function main(): Promise<void> {
  const container = document.getElementById('container');

  if (!container) return;

  const world = new World(container);
  await world.init();

  world.run();
}

main().catch((err) => {
  console.error(err);
});
