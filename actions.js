import { select, Separator } from '@inquirer/prompts';

export async function look(instance, state) {
  let item = await select({
    message: 'What are you looking at?',
    choices: instance.look
  });

  console.log(item);
}

export async function go(instance, state) {
  let movement = await select({
    message: 'Where are you going',
    choices: instance.go
  })

  console.log(movement.travel_text);

  state.currentRoom = movement.dest;
}

export async function handleAction(action, instance, state) {
  switch (action) {
    case 'look':
      await look(instance, state);
      break;
    case 'go':
      await go(instance, state);
      break;
    default:
      console.error('unknown action: ' + action);
  }
}

export let actionList = [
  {
    name: 'Look',
    value: 'look',
  },
  {
    name: 'Go',
    value: 'go',
  },
];