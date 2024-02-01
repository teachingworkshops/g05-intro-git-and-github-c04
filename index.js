import { select, Separator } from '@inquirer/prompts';
import rooms from './rooms.js';
import { go, look, viewInventory, printDescription } from './actions.js';

// track what rooms have been seen for easy text variation?
let state = {
  currentRoom: 'startRoom',
  inventory: [],
  seenRooms: []
};

async function gameLoop() {
  while (true) {
    let instance = await rooms[state.currentRoom](state);
    console.log(''); //Adds a spacing to make the text easier to read

    // should we only print this after traveling?
    printDescription(instance, state);
    state.seenRooms[state.currentRoom] = true;

    console.log('');

    let action = await select({
      message: 'What will you do?',
      choices: [
        {
          name: 'Look',
          value: 'look',
        },
        {
          name: 'Go',
          value: 'go',
        },
        {
          name: 'View Inventory',
          value: 'inventory',
        },
      ]
    });

    switch (action) {
      case 'look':
        await look(instance, state);
        break;
      case 'go':
        await go(instance, state);
        break;
      case 'inventory':
        viewInventory(state);
        break;
    }
  }
}


gameLoop().catch(reason => {
  console.log("Error, stopping program.");
  // console.error(reason);
  Deno && Deno.exit(1);
  process.exit(1);
});