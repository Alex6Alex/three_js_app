import World from './World';

function main() {
  const container = document.getElementById('container');

  if (container) new World(container).render();
}

main()
