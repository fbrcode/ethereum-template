import { getBlock } from './getData';

async function main() {
  console.log('starting...');
  const latestBlock = await getBlock('latest');
  console.log(latestBlock);
}

main();
