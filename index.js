import { select, Separator } from '@inquirer/prompts';
import rooms from './rooms.js';
import { go, look } from './actions.js';

// track what rooms have been seen for easy text variation?
let state = {
  currentRoom: 'startRoom'
};

async function gameLoop() {
  while (true) {
    let instance = await rooms[state.currentRoom](state);

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
      ]
    });

    switch (action) {
      case 'look':
        await look(instance, state);
        break;
      case 'go':
        await go(instance, state);
        break;
    }
  }
}

await gameLoop();
