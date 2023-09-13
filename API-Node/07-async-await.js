import fs from 'node:fs/promises';

/*
async function copyGitIgnore() {
  try {
    const buffer = await fs.readFile('03-path.js');
    await fs.writeFile('03-path.bak', buffer);
    console.log("Copy Sync Done");
  } catch (err) {
    console.error(err.message);
  }
}

copyGitIgnore();
*/

async function copyGitIgnore() {
    const buffer = await fs.readFile('03-path.js');
    await fs.writeFile('03-path.bak', buffer);
    console.log("Copy Sync Done");
}

// mix de syntax qui simplifie le try/catch
copyGitIgnore().catch((err) => console.error(err.message));

console.log('Test'); // executé avant Async
